import { logger } from 'apps/auth-app/lib/logger'
import prisma from 'apps/auth-app/lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { generateToken } from 'apps/auth-app/lib/auth'
import { env } from 'apps/auth-app/lib/env'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { username, password } = body

    if (!username || !password) {
      logger.warn('Missing credentials', { username })
      return NextResponse.json({ error: 'Missing username or password' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { username } })

    if (!user) {
      logger.warn('User not found during login attempt', { username })
      return NextResponse.json({ error: 'Invalid username' }, { status: 401 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      logger.warn('Invalid password attempt', { username })
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = generateToken({ id: user.id, email: user.email })

    const res = NextResponse.json({ message: 'Logged in' })
    res.cookies.set('token', token, {
      domain: env.SESSION_COOKIES_DOMAIN,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    })

    logger.info('User logged in successfully', { id: user.id, domain: env.SESSION_COOKIES_DOMAIN })

    return res
  } catch (error) {
    logger.error('Login error', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

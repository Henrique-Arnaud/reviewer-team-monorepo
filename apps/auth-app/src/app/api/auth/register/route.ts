import prisma from 'apps/auth-app/lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { logger } from 'apps/auth-app/lib/logger'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, username, password, ageConfirm } = body

    if (!email || !username || !password || typeof ageConfirm !== 'boolean') {
      return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
    }

    const [existingEmail, existingUsername] = await Promise.all([
      prisma.user.findUnique({ where: { email } }),
      prisma.user.findUnique({ where: { username } }),
    ])

    if (existingEmail) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 409 })
    }

    if (existingUsername) {
      return NextResponse.json({ error: 'Username already exists' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    logger.info('creating user', username)
    const user = await prisma.user.create({
      data: { email, username, password: hashedPassword, ageConfirm },
    })

    return NextResponse.json(
      {
        message: 'User created successfully',
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          ageConfirm: user.ageConfirm,
          createdAt: user.createdAt,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    logger.error('User registration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

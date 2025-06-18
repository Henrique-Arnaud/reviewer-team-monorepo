import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken } from './verifyToken'

export async function requireAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  if (!token) {
    redirect('/login')
  }

  try {
    const user = verifyToken(token)
    return user
  } catch (err) {
    redirect('/login')
  }
}

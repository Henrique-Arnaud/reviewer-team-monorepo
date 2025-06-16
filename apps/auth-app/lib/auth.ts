import jwt from 'jsonwebtoken'
import { env } from './env'

type TokenPayload = {
  id: string
  email: string
}

export function generateToken(payload: TokenPayload) {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string) {
  return jwt.verify(token, env.JWT_SECRET)
}

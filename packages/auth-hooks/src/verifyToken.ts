import jwt from 'jsonwebtoken'

export function verifyToken<T = any>(token: string): T {
  return jwt.verify(token, process.env.JWT_SECRET || '') as T
}

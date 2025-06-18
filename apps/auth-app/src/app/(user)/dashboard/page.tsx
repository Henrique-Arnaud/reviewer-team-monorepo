import React from 'react'
import { requireAuth } from 'packages/auth-hooks'

export default async function Page() {
  const token = await requireAuth()
  return (
    <div>
      <p>
        Dashboard - <strong>{!!token ? 'LOGADO' : 'DESLOGADO'}</strong>
      </p>
    </div>
  )
}

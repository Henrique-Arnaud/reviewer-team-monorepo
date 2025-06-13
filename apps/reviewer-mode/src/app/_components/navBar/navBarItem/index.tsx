import Link from 'next/link'
import React from 'react'

export default function NavBarItem({
  url,
  children,
  onClick,
}: {
  url: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link href={url} onClick={onClick}>
      <li className="cursor-pointer transition-colors hover:text-[#c0c0c0] bg-gray-800/25 active:bg-gray-500 p-2">
        {children}
      </li>
    </Link>
  )
}

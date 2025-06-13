import React from 'react'
import Image from 'next/image'
import Search from './search'
import Link from 'next/link'
import SidebarToggle from './sidebarToggle'

export default function NavBar() {
  return (
    <header className="fixed top-0 w-full h-20 flex z-50">
      <SidebarToggle />

      <div className="relative ml-auto mr-auto top-5">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={196}
            height={44}
            priority
          />
        </Link>
      </div>
      <div className="hidden">
        <Search />
      </div>
    </header>
  )
}

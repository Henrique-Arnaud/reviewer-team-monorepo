'use client'

import React, { useCallback, useRef, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useClickOutsideComponentObserver } from '@/app/_utils/handleClickOutsideComponent'
import NavBarItem from '../navBarItem'
import { navigationItems } from './const/navBarItems'

export default function SidebarToggle() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const navRef = useRef(null)
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)

  const closeSidebarIfItIsOpen = useCallback(() => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false)
    }
    return
  }, [isSidebarOpen])

  useClickOutsideComponentObserver(navRef, closeSidebarIfItIsOpen)

  return (
    <div
      ref={navRef}
      className={`flex flex-col fixed gap-6 w-full pt-5 text-white transition-all duration-500 ${
        isSidebarOpen ? 'bg-gray-950 pb-1' : ''
      }`}
    >
      <button
        aria-expanded={isSidebarOpen}
        aria-controls="sidebar-nav"
        className="h-10 w-fit"
        onClick={toggleSidebar}
      >
        <Bars3Icon className="h-10 w-10" />
      </button>

      <nav
        id="sidebar-nav"
        role="navigation"
        className={`w-full whitespace-nowrap transition-transform duration-500 origin-top ${
          isSidebarOpen
            ? 'scale-y-100 opacity-100 pointer-events-auto'
            : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        {isSidebarOpen && (
          <ul className="flex flex-col w-full gap-1">
            {navigationItems.map((item) => (
              <NavBarItem key={item.id} url={item.url} onClick={() => closeSidebarIfItIsOpen()}>
                {item.name}
              </NavBarItem>
            ))}
          </ul>
        )}
      </nav>
    </div>
  )
}

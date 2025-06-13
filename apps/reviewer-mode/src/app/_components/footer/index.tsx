import React from 'react'
import { CodeBracketIcon, IdentificationIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex gap-7 flex-wrap items-center justify-center fixed bottom-0 bg-gray-500/30 w-full h-16">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/about"
      >
        <IdentificationIcon
          aria-hidden
          width={24}
          height={24}
        />
        About
      </Link>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/Henrique-Arnaud/reviewer-mode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeBracketIcon
          aria-hidden
          width={24}
          height={24}
        />
        Source code
      </a>
    </footer>)
}

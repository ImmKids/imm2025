'use client'

import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full fixed top-0 bg-imm-header backdrop-blur-sm border-b border-gray-200 z-50 font-roboto h-[var(--header-height)]">
      <div className="w-full px-8">
        <div className="flex justify-between items-center h-[var(--header-height)]">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center gap-3 pl-4">
            <div className="w-8 h-8 rounded-full bg-green-500"></div>
            <h1 className="font-jersey text-4xl text-black">IMM 2025</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden sm:flex space-x-12">
            <Link href="/" className="text-black hover:text-gray-900 text-xl font-roboto">Home</Link>
            <Link href="/about" className="text-black hover:text-gray-900 text-xl font-roboto">About</Link>
            <Link href="/contact" className="text-black hover:text-gray-900 text-xl font-roboto">Contact</Link>
          </nav>

          {/* Mobile menu button */}
          <div className="sm:hidden pr-4">
            <button className="p-3">
              <span className="sr-only">Open menu</span>
              {/* You can add a hamburger icon here */}
              <span className="text-2xl text-black">☰</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
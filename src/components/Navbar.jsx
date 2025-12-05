import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../images/Amer Logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'Home', href: '#Home' },
    { name: 'About Me', href: '#About' },
    { name: 'Projects', href: '#Projects' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Contact Me', href: '#Contact' },
  ]

  return (
    <header
      className={`text-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md shadow-md'
          : 'bg-black backdrop-blur-sm'
      }`}
    >
    <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href='#Home' className="flex items-center gap-2">
            <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 object-cover rounded-full shadow-sm border-2 border-white"
            />
            <span className="text-xl font-bold text-primary-500 tracking-tight">
                Amer<span className='text-blue-400 ml-1'>Hussein</span> <span className="text-blue-400 dark:text-slate-100">.</span>
            </span>
        </a>


        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 hover:text-gray-400">
        {links.map((link) => (
            <button
                key={link.name}
                onClick={() => {
                const element = document.querySelector(link.href)
                if (element) {
                    const yOffset = -80 // adjust offset for your fixed navbar height
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset
                    window.scrollTo({ top: y, behavior: 'smooth' })
                    setMenuOpen(false)
                }
                }}
                className="relative text-sm text-white dark:text-slate-200 font-medium hover:text-blue-500 hover:underline hover:scale-105"
            >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full"></span>
            </button>
            ))}

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white dark:text-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/75 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-700 backdrop-blur-md shadow-md">
            <div className="flex flex-col items-center py-6 space-y-4">
                {links.map((link) => (
                    <button
                        key={link.name}
                        onClick={() => {
                        const element = document.querySelector(link.href)
                        if (element) {
                            const yOffset = -80 // adjust offset for your fixed navbar height
                            const y = element.getBoundingClientRect().top + window.scrollY + yOffset
                            window.scrollTo({ top: y, behavior: 'smooth' })
                            setMenuOpen(false)
                        }
                        }}
                        className="relative text-white dark:text-slate-200 font-medium hover:text-gray-300"
                    >
                        {link.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full"></span>
                    </button>
                ))}

            </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

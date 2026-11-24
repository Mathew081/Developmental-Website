
import { useState } from 'react'
import { Menu, X, Flower2 } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'My Eras', href: '#eras' },
  { label: 'Theories', href: '#theories' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Reflection', href: '#reflection' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-4 sm:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-paper/85 px-5 py-3 shadow-sm backdrop-blur-xl">

        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-2"
        >
          <Flower2 size={21} className="text-ink" />

          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            A Journey in Bloom<span className="text-muted">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full p-2 text-ink transition-colors hover:bg-black/5 md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/70 bg-paper/95 p-5 shadow-lg backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-peach/30"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

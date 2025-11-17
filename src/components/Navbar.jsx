import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label) => (
    <a
      key={label}
      href={`#${label.toLowerCase()}`}
      className="text-sm md:text-base text-zinc-300 hover:text-white transition-colors"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-zinc-950/40 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-px">
                <div className="h-full w-full rounded-[11px] bg-zinc-950 grid place-items-center">
                  <Sparkles className="h-5 w-5 text-cyan-300" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight">Nova Studio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {['Work', 'Services', 'About', 'Contact'].map(navItem)}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm transition-colors">Start a Project</a>
            </div>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-4 pt-4">
                {['Work', 'Services', 'About', 'Contact'].map(navItem)}
                <a href="#contact" className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm transition-colors text-center">Start a Project</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

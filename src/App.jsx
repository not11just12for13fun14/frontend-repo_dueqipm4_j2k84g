import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Features />
      <Work />
      <CTA />
      <footer className="bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-zinc-500 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Nova Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

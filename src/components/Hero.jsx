import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] w-full overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,10,72,0.6),rgba(6,5,18,0.95))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects — Q4 2025
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Futuristic web experiences that feel alive
          </h1>
          <p className="mt-6 text-zinc-300 text-base md:text-lg">
            We blend 3D, motion, and meticulous design to craft interfaces that convert and delight. From landing pages to full product ecosystems.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white text-zinc-900 px-5 py-3 text-sm font-semibold hover:bg-zinc-200 transition-colors">
              Start a project
            </a>
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

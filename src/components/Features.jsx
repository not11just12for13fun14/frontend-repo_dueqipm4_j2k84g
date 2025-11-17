import { motion } from 'framer-motion'
import { Rocket, Sparkles, Bot, Layers } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Performance-first',
    desc: 'We architect for speed and scale from day one with best-in-class tooling.'
  },
  {
    icon: Sparkles,
    title: 'Premium aesthetics',
    desc: 'Micro-interactions, depth, and polish that elevate your brand.'
  },
  {
    icon: Layers,
    title: '3D + Motion',
    desc: 'Spline, WebGL, and Framer Motion woven into clean, accessible UX.'
  },
  {
    icon: Bot,
    title: 'AI-native',
    desc: 'Integrations and automation that actually move metrics.'
  }
]

export default function Features() {
  return (
    <section id="services" className="relative bg-zinc-950 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-bold text-white">
            What we do
          </motion.h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">A focused services stack to ship faster without compromising craft.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay: i * 0.05}}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500/30 via-fuchsia-500/30 to-cyan-400/30 grid place-items-center mb-4">
                <f.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-zinc-400 text-sm mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

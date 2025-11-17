import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-zinc-950 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.08),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-bold text-white">
          Let’s build something extraordinary
        </motion.h2>
        <p className="mt-4 text-zinc-400">Tell us about your goals and timelines. We’ll propose a path to launch that balances ambition with clarity.</p>

        <form className="mt-10 grid grid-cols-1 gap-4 text-left">
          <input placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <input placeholder="Company or project" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <textarea placeholder="What are you looking to build?" rows={5} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" />
          <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-white text-zinc-900 px-5 py-3 text-sm font-semibold hover:bg-zinc-200 transition-colors">Request proposal</button>
        </form>
      </div>
    </section>
  )
}

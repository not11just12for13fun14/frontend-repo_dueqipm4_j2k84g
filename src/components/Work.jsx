import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Nebula OS',
    tag: 'Product Website',
    cover: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Pulse Analytics',
    tag: 'SaaS Dashboard',
    cover: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Astra Labs',
    tag: 'Brand + Site',
    cover: 'https://images.unsplash.com/photo-1538300342682-cf57afb972e3?q=80&w=1200&auto=format&fit=crop',
  }
]

export default function Work() {
  return (
    <section id="work" className="relative bg-zinc-950 py-24">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Selected work</h2>
            <p className="mt-3 text-zinc-400">A peek into recent builds across web, product, and experiments.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-xl border border-white/20 text-white hover:bg-white/10">Start a project</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.6, delay: i * 0.08}}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-xs text-zinc-400">{p.tag}</div>
                <div className="mt-1 text-white font-semibold">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

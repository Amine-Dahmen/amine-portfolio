import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { skillCategories } from '../../data/portfolio'

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 border-t border-white/[0.06] bg-zinc-950/30 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Capabilities"
          title="Skills by domain"
          subtitle="From model training to edge devices and operator tools—a single thread: systems that stay understandable under pressure."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.06 * i }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent p-6 ring-1 ring-white/[0.06] transition-shadow hover:shadow-xl hover:shadow-violet-500/10"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-violet-200/90">
                {cat.label}
              </h3>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-400/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { timeline } from '../../data/portfolio'

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 border-t border-white/[0.06] px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Journey"
          title="Experience & education"
          subtitle="A concise timeline of where I’m investing depth—studies, builds, and the bridge between AI and physical systems."
        />

        <div className="relative mt-16 pl-2">
          <div
            aria-hidden
            className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-violet-500/60 via-cyan-400/35 to-transparent sm:left-5"
          />

          <ul className="space-12">
            {timeline.map((item, i) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.06 * i }}
                className="relative pl-12 sm:pl-16"
              >
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950 ring-2 ring-violet-500/45 sm:left-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300/90">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-violet-200/85">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.detail}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

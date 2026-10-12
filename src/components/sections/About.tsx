import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { techGrid } from '../../data/portfolio'

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 border-t border-white/[0.06] bg-zinc-950/40 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="About"
          title="Precision engineering across software and hardware."
          subtitle="I focus on machine learning, AI, embedded systems, industrial automation, and IoT—unifying models, data, and physical systems into dependable workflows."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent p-8 ring-1 ring-white/[0.06] sm:p-10"
        >
          <p className="text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
            Outside the lab, football keeps me obsessed with performance metrics and
            prediction—exactly the mindset I bring to ML experiments and data
            storytelling. I love turning messy signals into models and dashboards
            people actually trust.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-14"
        >
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Technologies
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {techGrid.map((tech, i) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * i }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="rounded-xl bg-white/[0.03] px-4 py-3 text-center text-sm font-medium text-zinc-200 ring-1 ring-white/[0.06] transition-shadow hover:shadow-lg hover:shadow-violet-500/10"
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

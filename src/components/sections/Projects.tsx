import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { ProjectCard } from '../ui/ProjectCard'
import {
  projects,
  projectFilterLabels,
  type ProjectCategory,
} from '../../data/portfolio'

const filters: ProjectCategory[] = [
  'all',
  'ai-ml',
  'iot',
  'embedded',
  'automation',
  'frontend',
]

export function Projects() {
  const [active, setActive] = useState<ProjectCategory>('all')

  const filtered = useMemo(() => {
    if (active === 'all') return projects
    return projects.filter((p) => p.categories.includes(active))
  }, [active])

  return (
    <section
      id="projects"
      className="scroll-mt-28 border-t border-white/[0.06] px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Work"
          title="Selected projects"
          subtitle="A mix of AI/ML, IoT, embedded firmware, and industrial interfaces—each built with clarity, rigor, and room to scale."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 flex flex-wrap justify-center gap-2"
        >
          {filters.map((f) => {
            const selected = active === f
            return (
              <motion.button
                key={f}
                type="button"
                layout
                onClick={() => setActive(f)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors sm:text-[13px] ${
                  selected
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {selected ? (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/35 to-cyan-500/35 ring-1 ring-violet-400/40"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full bg-white/[0.04] ring-1 ring-white/[0.06]" />
                )}
                <span className="relative z-10">{projectFilterLabels[f]}</span>
              </motion.button>
            )
          })}
        </motion.div>

        <LayoutGroup>
          <motion.div layout className="mt-14 grid gap-8 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  )
}

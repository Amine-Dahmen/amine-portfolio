import { motion } from 'framer-motion'
import type { Project } from '../../data/portfolio'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-zinc-900/40 ring-1 ring-white/[0.06] backdrop-blur-sm transition-[box-shadow,transform] hover:-translate-y-0.5 hover:ring-violet-500/25 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.15),0_24px_80px_-32px_rgba(0,0,0,0.8)]"
    >
      <div className="relative h-44 overflow-hidden">
        {project.cover ? (
          <img
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${project.imageGradient}`} />
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-40 mix-blend-overlay translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-400 ring-1 ring-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-white/5 py-2.5 text-sm font-medium text-zinc-100 ring-1 ring-white/10 transition-colors hover:bg-white/10"
          >
            GitHub
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex flex-1 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500/90 to-cyan-500/90 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-opacity hover:opacity-95"
          >
            Live demo
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}
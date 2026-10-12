import { motion } from 'framer-motion'
import { SITE, navLinks } from '../../data/portfolio'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <p className="text-lg font-semibold text-white">{SITE.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-500">
              {SITE.role}. Building thoughtful AI systems, embedded interfaces,
              and automation that stays reliable in the real world.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
            {navLinks.map((l) => (
              <motion.button
                key={l.id}
                type="button"
                whileHover={{ y: -1 }}
                onClick={() => scrollToId(l.id)}
                className="hover:text-white"
              >
                {l.label}
              </motion.button>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>© {year} {SITE.name}. Crafted with React & Tailwind.</p>
          <div className="flex gap-4">
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300"
            >
              GitHub
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-zinc-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

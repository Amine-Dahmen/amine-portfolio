import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { AnimatedBackground } from '../effects/AnimatedBackground'
import { SITE } from '../../data/portfolio'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-28 pb-20 sm:px-6"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-violet-300/90"
        >
          {SITE.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl sm:leading-[1.05]"
        >
          <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            {SITE.name}
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent">
            AI, embedded systems & automation.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          Engineering student crafting machine learning pipelines, football analytics,
          and industrial-grade interfaces—where data science meets hardware and the
          plant floor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center"
        >
          <Button type="button" onClick={() => scrollToId('projects')}>
            View projects
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => scrollToId('contact')}
          >
            Contact me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-500"
        >
          <span className="rounded-full bg-white/[0.04] px-3 py-1 ring-1 ring-white/[0.06]">
            PyTorch
          </span>
          <span className="rounded-full bg-white/[0.04] px-3 py-1 ring-1 ring-white/[0.06]">
            Embedded
          </span>
          <span className="rounded-full bg-white/[0.04] px-3 py-1 ring-1 ring-white/[0.06]">
            PLC / HMI
          </span>
          <span className="rounded-full bg-white/[0.04] px-3 py-1 ring-1 ring-white/[0.06]">
            IoT
          </span>
        </motion.div>
      </div>
    </section>
  )
}

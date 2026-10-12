import { motion } from 'framer-motion'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
}

export function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-300/90"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-4 text-pretty text-base leading-relaxed text-zinc-400"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}

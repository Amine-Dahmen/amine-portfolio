import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  show: boolean
}

export function PageLoader({ show }: Props) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="h-12 w-12 rounded-full border-2 border-violet-400/30 border-t-cyan-400"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.9, ease: 'linear' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-sm font-medium tracking-wide text-zinc-400"
            >
              Loading portfolio…
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

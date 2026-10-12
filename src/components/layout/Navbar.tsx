import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks, SITE } from '../../data/portfolio'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-4 z-50 flex justify-center px-4 transition-all duration-300 ${
          scrolled ? 'top-3' : 'top-4'
        }`}
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6 transition-all duration-300 ${
            scrolled
              ? 'bg-zinc-950/75 shadow-lg shadow-black/40 ring-1 ring-white/[0.08] backdrop-blur-xl'
              : 'bg-zinc-950/40 ring-1 ring-white/[0.06] backdrop-blur-md'
          }`}
        >
          <button
            type="button"
            onClick={() => scrollToId('hero')}
            className="group flex items-center gap-2 text-left"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-violet-500/25">
              AD
            </span>
            <span className="hidden flex-col sm:flex">
              <span className="text-sm font-semibold text-white leading-none">
                {SITE.name}
              </span>
              <span className="mt-1 text-[11px] text-zinc-500 leading-none">
                Portfolio
              </span>
            </span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(link.id)}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <motion.button
              type="button"
              onClick={() => scrollToId('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-500/20"
            >
              Let&apos;s talk
            </motion.button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-zinc-200 ring-1 ring-white/10 md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform ${
                  open ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current transition-opacity ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-current transition-transform ${
                  open ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col gap-2 border-l border-white/10 bg-zinc-950/95 p-6 pt-24 shadow-2xl"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => {
                    setOpen(false)
                    scrollToId(link.id)
                  }}
                  className="rounded-xl px-4 py-3 text-left text-base font-medium text-zinc-200 hover:bg-white/5"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => {
                  setOpen(false)
                  scrollToId('contact')
                }}
                className="mt-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 py-3 text-center text-sm font-semibold text-white"
              >
                Let&apos;s talk
              </motion.button>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

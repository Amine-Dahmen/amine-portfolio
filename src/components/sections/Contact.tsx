import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'
import { SITE } from '../../data/portfolio'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setStatus('error')
      return
    }

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        })
        if (!res.ok) throw new Error('Bad response')
        setStatus('sent')
        form.reset()
        return
      } catch {
        setStatus('error')
        return
      }
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(
      `${message}\n\n— ${name} <${email}>`,
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    form.reset()
  }

  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-white/[0.06] bg-zinc-950/50 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s build something reliable."
          subtitle="Reach out for collaborations, internships, or research-minded product work—especially where AI meets embedded and industrial systems."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <p className="text-sm font-medium text-zinc-500">Email</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-1 inline-block text-lg font-medium text-white hover:text-violet-300"
              >
                {SITE.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500">Social</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <motion.a
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  className="rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-white/10"
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  className="rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-white/10"
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-zinc-500">
              {!endpoint
                ? 'Form submits via your email client. Add VITE_FORM_ENDPOINT (e.g. Formspree) for serverless delivery.'
                : 'Form posts to your configured endpoint.'}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="lg:col-span-3 space-y-4 rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/[0.06] sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="text-zinc-400">Name</span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none ring-0 transition-[border,box-shadow] placeholder:text-zinc-600 focus:border-violet-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm">
                <span className="text-zinc-400">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
                  placeholder="you@domain.com"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span className="text-zinc-400">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-violet-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.15)]"
                placeholder="Tell me about the project, stack, or timeline…"
              />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" className="w-full sm:w-auto">
                Send message
              </Button>
              {status === 'sent' ? (
                <p className="text-sm text-emerald-400">Thanks — message route opened or sent.</p>
              ) : null}
              {status === 'error' ? (
                <p className="text-sm text-rose-400">
                  Please fill all fields or check your form endpoint.
                </p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

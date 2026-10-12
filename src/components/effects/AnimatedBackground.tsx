import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const particles = Array.from({ length: 42 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.00015,
      vy: (Math.random() - 0.5) * 0.00015,
      a: Math.random() * 0.35 + 0.08,
    }))

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let last = 0
    const tick = (now: number) => {
      const dt = last ? Math.min(now - last, 32) : 16
      last = now
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx * dt
        p.y += p.vy * dt
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
        ctx.beginPath()
        ctx.fillStyle = `rgba(167, 139, 250, ${p.a})`
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [reduced])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.55]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.2 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 20%, black 20%, transparent 70%)',
        }}
      />
      <div
        className="absolute -left-1/4 top-[-20%] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(139,92,246,0.35), transparent 65%)',
        }}
      />
      <div
        className="absolute -right-1/4 bottom-[-25%] h-[480px] w-[480px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(34,211,238,0.22), transparent 65%)',
        }}
      />
      {!reduced ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-70"
          aria-hidden
        />
      ) : null}
    </div>
  )
}

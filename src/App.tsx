import { useEffect, useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { PageLoader } from './components/layout/PageLoader'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      <PageLoader show={loading} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

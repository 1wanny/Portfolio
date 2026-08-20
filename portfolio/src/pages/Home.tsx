import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { CurrentlyBuilding } from '@/components/CurrentlyBuilding'
import { Education } from '@/components/Education'
import { Hackathons } from '@/components/Hackathons'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { ResumeCTA } from '@/components/ResumeCTA'
import { Skills } from '@/components/Skills'
import { site } from '@/data/site'
import { usePageMeta } from '@/hooks/usePageMeta'

export function Home() {
  usePageMeta(`${site.name} — ${site.role}`)

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Hackathons />
      <Education />
      <CurrentlyBuilding />
      <ResumeCTA />
      <Contact />
    </>
  )
}

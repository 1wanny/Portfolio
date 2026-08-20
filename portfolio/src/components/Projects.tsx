import { featuredProjects } from '@/data/projects'
import { copy } from '@/data/site'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'

export function Projects() {
  return (
    <Section id="projects" index="02" title="Featured Projects" subtitle={copy.projectsSubheading}>
      <div className="space-y-20 sm:space-y-24 lg:space-y-32">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

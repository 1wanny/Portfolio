import { ArrowRight } from 'lucide-react'
import { featuredProjects, projects } from '@/data/projects'
import { copy } from '@/data/site'
import { ProjectCard } from './ProjectCard'
import { Button } from './ui/Button'
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

      <Reveal className="mt-16 border-t border-border pt-10 sm:mt-20">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-fg-muted">
            {projects.length} projects in total, including coursework and side projects.
          </p>
          <Button to="/projects" variant="primary" size="sm"
            iconAfter={<ArrowRight className="size-4" />}>
            Browse all projects
          </Button>
        </div>
      </Reveal>
    </Section>
  )
}

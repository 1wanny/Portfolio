import { skillGroups } from '@/data/skills'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { Tag } from './ui/Tag'

/**
 * Grouped technologies — no ratings, bars or percentages, which say nothing
 * verifiable to a reviewer. The grouping itself is the signal.
 */
export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      title="Technical Skills"
      subtitle="Grouped by where they get used rather than rated — the projects above are the evidence."
      tinted
    >
      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal
            as="li"
            key={group.category}
            delay={Math.min(index * 60, 240)}
            className="bg-bg p-6"
          >
            <h3 className="text-sm font-semibold tracking-tight text-fg">{group.category}</h3>

            {group.note ? (
              <p className="mt-1.5 text-xs leading-relaxed text-fg-subtle">{group.note}</p>
            ) : null}

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item, itemIndex) => (
                <li key={`${item}-${itemIndex}`}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

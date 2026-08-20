import { education } from '@/data/education'
import { Reveal } from './ui/Reveal'
import { Section } from './ui/Section'
import { Tag } from './ui/Tag'

export function Education() {
  return (
    <Section id="education" index="05" title="Education" tinted>
      <ul className="space-y-8">
        {education.map((entry, index) => (
          <Reveal as="li" key={`${entry.institution}-${index}`}>
            <article className="grid gap-6 rounded-lg border border-border bg-bg p-6 sm:p-7 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <h3 className="text-lg font-semibold tracking-tight">{entry.institution}</h3>
                <p className="mt-1 text-sm text-fg-muted">{entry.program}</p>
                <p className="mt-3 font-mono text-xs text-fg-subtle">
                  {entry.start} — {entry.end}
                </p>

                {entry.achievements && entry.achievements.length > 0 ? (
                  <ul className="mt-5 space-y-1.5 border-t border-border pt-4 text-sm text-fg-muted">
                    {entry.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex gap-2">
                        <span aria-hidden="true" className="text-accent">
                          ▹
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="lg:col-span-7">
                <h4 className="text-xs font-medium tracking-wide text-fg-subtle uppercase">
                  Coursework
                </h4>

                {/* One block per group (year / semester). The label sits above its
                    modules so long module names get the full column width. */}
                <dl className="mt-4 divide-y divide-border border-t border-border">
                  {entry.coursework.map((group) => (
                    <div key={group.label} className="py-4">
                      <dt className="flex items-baseline gap-2">
                        <span className="font-mono text-xs text-accent">{group.label}</span>
                        <span className="text-xs text-fg-subtle">
                          {group.modules.length} {group.modules.length === 1 ? 'module' : 'modules'}
                        </span>
                      </dt>
                      <dd className="mt-2.5">
                        <ul className="flex flex-wrap gap-1.5">
                          {group.modules.map((module, moduleIndex) => (
                            <li key={`${module}-${moduleIndex}`}>
                              <Tag>{module}</Tag>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

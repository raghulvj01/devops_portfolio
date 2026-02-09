'use client'

import { education, workExperience } from '@/constants'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { Timeline as TimelineComponent } from '@/components/ui/timeline'

type TimelineBlock = {
  id: string
  date: string
  label: 'Work Experience' | 'Education'
  heading: string
  organization: string
  location: string
  summary: string
  bullets: string[]
}

const timelineData: TimelineBlock[] = [
  ...workExperience.map((item) => ({
    id: `${item.company}-${item.role}`,
    date: item.date,
    label: 'Work Experience' as const,
    heading: item.role,
    organization: item.company,
    location: item.location,
    summary: item.summary,
    bullets: item.achievements,
  })),
  ...education.map((item) => ({
    id: `${item.institution}-${item.degree}`,
    date: item.date,
    label: 'Education' as const,
    heading: item.degree,
    organization: item.institution,
    location: item.location,
    summary: `CGPA: ${item.cgpa}`,
    bullets: [],
  })),
]

const TimelineElement: FC<{ item: TimelineBlock }> = ({ item }) => (
  <article className="space-y-4">
    <span className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      {item.label}
    </span>

    <div>
      <h3 className="text-lg font-semibold text-foreground">{item.heading}</h3>
      <p className="text-sm text-muted-foreground">
        {item.organization} | {item.location}
      </p>
    </div>

    <p className="text-sm text-muted-foreground">{item.summary}</p>

    {item.bullets.length > 0 && (
      <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
        {item.bullets.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    )}
  </article>
)

const Timeline: FC = () => {
  const timelineContent = timelineData.map((item) => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} />,
  }))

  return (
    <section id="experience" className="py-20 bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary">
            Experience and Education
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
            Professional journey across DevOps engineering, platform operations, and advanced IT education.
          </p>
        </motion.div>

        <div className="relative w-full">
          <TimelineComponent data={timelineContent} />
        </div>
      </div>
    </section>
  )
}

export default Timeline

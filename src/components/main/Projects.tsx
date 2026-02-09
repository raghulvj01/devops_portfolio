'use client'

import { projects } from '@/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-base md:text-lg">
            Cloud, AI, and distributed systems projects with measurable reliability, performance, and cost impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-border bg-card shadow-sm overflow-hidden"
            >
              <div className="relative h-52 w-full bg-muted">
                <Image
                  src={project.imageURL}
                  alt={project.title}
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 50vw"
                  quality={80}
                  fill
                />
              </div>

              <div className="p-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="text-xl font-semibold text-foreground">{project.title}</h2>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Stack:</span> {project.stack}
                </p>

                <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

'use client'

import { projects } from '@/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaShieldAlt, FaTerminal } from 'react-icons/fa'

function renderHighlight(highlight: string) {
  const colonIndex = highlight.indexOf(':')
  if (colonIndex > 0 && colonIndex < 36) {
    const label = highlight.slice(0, colonIndex + 1)
    const rest = highlight.slice(colonIndex + 1)
    return (
      <>
        <span className="font-semibold text-foreground">{label}</span>
        {rest}
      </>
    )
  }
  return highlight
}

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
            Cloud, DevSecOps, AI, and open-source systems with measurable reliability, security, and cost impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isTrailingOdd =
              projects.length % 2 === 1 && index === projects.length - 1

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-xl border border-border bg-card shadow-sm overflow-hidden ${
                  isTrailingOdd ? 'xl:col-span-2' : ''
                }`}
              >
                {project.imageURL ? (
                  <div className="relative h-52 w-full bg-muted">
                    <Image
                      src={project.imageURL}
                      alt={project.title}
                      className="object-cover"
                      sizes={
                        isTrailingOdd
                          ? '100vw'
                          : '(max-width: 1280px) 100vw, 50vw'
                      }
                      quality={80}
                      fill
                    />
                  </div>
                ) : (
                  <div className="relative h-44 w-full bg-gradient-to-br from-muted via-card to-muted/60 border-b border-border p-6 flex flex-col justify-between">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
                        <FaShieldAlt className="h-3 w-3 text-primary" />
                        {project.category ?? 'Open Source'}
                      </span>
                      {project.packageName && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
                          <FaTerminal className="h-3 w-3" />
                          {project.packageName}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">
                        DevSecOps MCP Server · 19 Security Tools · JWT RBAC · Docker &amp; npm
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl font-semibold text-foreground">{project.title}</h2>
                      {project.category && project.imageURL && (
                        <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted-foreground">
                          {project.category}
                        </span>
                      )}
                    </div>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Stack:</span> {project.stack}
                  </p>

                  <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{renderHighlight(highlight)}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects

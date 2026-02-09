'use client'

import { technicalSkillCategories } from '@/constants'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-10 py-16 px-4 sm:px-8 min-h-[600px] bg-gradient-to-br from-background via-muted to-background"
      aria-labelledby="skills-heading"
    >
      <div className="text-center max-w-4xl">
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Technical Skills
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted-foreground font-medium">
          Cloud-native, DevSecOps, and platform engineering capabilities from production systems.
        </p>
      </div>

      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 12 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.04 } },
        }}
      >
        {technicalSkillCategories.map((skillCategory) => (
          <motion.article
            key={skillCategory.category}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="rounded-lg border border-border/70 bg-card p-5 shadow-sm"
          >
            <h3 className="text-base font-semibold text-foreground">{skillCategory.category}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skillCategory.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills

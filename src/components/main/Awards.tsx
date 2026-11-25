'use client'

import { awards } from '@/constants'
import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa'

export function AwardsSection() {
  return (
    <section id="awards" className="w-full py-16 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Awards</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
            Recognition for delivery excellence, ownership, and rapid technical execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {awards.map((award, index) => (
            <motion.article
              key={`${award.title}-${award.date}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm flex items-start gap-4"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-primary">
                <FaAward className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{award.title}</h3>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                    {award.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{award.issuer}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

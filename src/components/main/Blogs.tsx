'use client'

import { additionalStrengths, certifications, languages } from '@/constants'
import { motion } from 'framer-motion'

export function CredentialsSection() {
  return (
    <section id="credentials" className="w-full py-16 bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Certifications and Strengths</h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
            Credentials and core strengths that support delivery across DevOps, cloud operations, and platform engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <article className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Certifications</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {certifications.map((certification) => (
                <li key={certification} className="list-disc ml-5 text-foreground">
                  {certification}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="text-lg font-semibold">Languages</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {languages.map((language) => (
                <li
                  key={language}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                >
                  {language}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-border bg-card p-5 shadow-sm lg:col-span-1">
            <h3 className="text-lg font-semibold">Additional Strengths</h3>
            <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
              {additionalStrengths.map((strength) => (
                <li key={strength.title}>
                  <span className="font-semibold text-foreground">{strength.title}:</span>{' '}
                  {strength.detail}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

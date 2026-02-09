'use client'

import { profile } from '@/constants'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { RxGithubLogo } from 'react-icons/rx'

const Footer: FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0)

  useEffect(() => {
    const savedCount = localStorage.getItem('visitorCount')
    const lastVisit = localStorage.getItem('lastVisit')
    const today = new Date().toDateString()

    let count = savedCount ? parseInt(savedCount, 10) : 0

    if (!lastVisit || lastVisit !== today) {
      count += 1
      localStorage.setItem('visitorCount', count.toString())
      localStorage.setItem('lastVisit', today)
    }

    setVisitorCount(count)
  }, [])

  const socialLinks = [
    {
      href: profile.github,
      icon: <RxGithubLogo className="w-5 h-5" />,
      label: 'GitHub',
    },
    {
      href: profile.linkedin,
      icon: <FaLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
    },
    {
      href: `mailto:${profile.email}`,
      icon: <FaEnvelope className="w-5 h-5" />,
      label: 'Email',
    },
  ]

  const quickLinks = ['About', 'Skills', 'Experience', 'Projects', 'Credentials', 'Resume', 'Contact']

  return (
    <footer className="relative w-full px-6 py-12 mt-20 bg-background text-foreground border-t border-border transition-colors">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-cyan-500" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <h1 className="text-2xl font-extrabold">{profile.name}</h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {profile.role} building and operating production CI/CD and cloud infrastructure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Connect</h2>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-center w-10 h-10 bg-muted rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  aria-label={`Visit my ${link.label}`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            (c) {new Date().getFullYear()} Built by {profile.name}.
          </p>
          <p className="text-xs text-muted-foreground">
            Visitors:{' '}
            <span className="font-semibold bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              {visitorCount.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

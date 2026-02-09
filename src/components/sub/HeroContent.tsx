'use client'

import { profile } from '@/constants'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { TbDeviceLaptop } from 'react-icons/tb'
import { Badge } from '../ui/badge'
import { PointerHighlight } from '../ui/pointer-highlight'
import { NavbarButton } from '../ui/resizable-navbar'

const HeroContent = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center gap-8 px-4 sm:px-8 lg:px-16 lg:pt-5 w-full min-h-[calc(100vh-80px)] bg-background"
    >
      <motion.div variants={slideInFromTop} className="flex items-center gap-2">
        <Badge variant="secondary" className="bg-red-500 text-white dark:bg-red-500 font-extrabold">
          <TbDeviceLaptop />
          {profile.role}
        </Badge>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.4)}
        className="flex flex-col items-center justify-between gap-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
      >
        <span>{profile.name}</span>
        <PointerHighlight rectangleClassName="rounded-none">
          <span className="text-primary p-3 text-2xl sm:text-3xl lg:text-5xl">
            Kubernetes | Multi-Cloud | CI/CD | Observability
          </span>
        </PointerHighlight>
        <span className="text-base text-muted-foreground italic max-w-3xl mx-auto">
          {profile.summary}
        </span>
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.6)}
        className="mt-4 flex flex-wrap items-center justify-center gap-3"
      >
        <NavbarButton
          as="button"
          type="button"
          variant="primary"
          className="flex items-center gap-2 shadow"
          aria-label="Scroll to contact"
          onClick={() => scrollToSection('contact')}
        >
          <span className="w-2 h-2 bg-destructive rounded-full" />
          Let&apos;s Connect
        </NavbarButton>

        <NavbarButton
          variant="secondary"
          className="flex items-center gap-2 shadow"
          aria-label="Scroll to resume"
          href="#resume"
        >
          View Resume
        </NavbarButton>

        <NavbarButton
          variant="dark"
          className="flex items-center gap-2 shadow"
          aria-label="GitHub"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-1" />
          <span>GitHub</span>
        </NavbarButton>
      </motion.div>
    </motion.section>
  )
}

export default HeroContent

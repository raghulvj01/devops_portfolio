'use client'

import type { BlogPost } from '@/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft, FaCalendarAlt, FaClock } from 'react-icons/fa'

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <section className="py-20 bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <FaArrowLeft className="w-3 h-3" />
            Back to Blog
          </Link>

          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden mb-8 bg-muted">
            <Image
              src={post.coverImage}
              alt={post.title}
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              quality={80}
              fill
              priority
            />
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <hr className="border-border mb-8" />

          <article className="space-y-8">
            {post.content.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{section.heading}</h2>
                )}

                {section.image && (
                  <div className="relative h-52 sm:h-64 md:h-72 w-full rounded-xl overflow-hidden mb-6 bg-muted">
                    <Image
                      src={section.image}
                      alt={section.imageAlt || section.heading || 'Blog illustration'}
                      className="object-cover"
                      sizes="(max-width: 896px) 100vw, 896px"
                      quality={80}
                      fill
                    />
                  </div>
                )}

                <div className="space-y-4">
                  {section.body.split('\n\n').map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </article>

          <hr className="border-border mt-12 mb-8" />

          <div className="text-center">
            <Link
              href="/#blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              <FaArrowLeft className="w-3 h-3" />
              Back to all posts
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

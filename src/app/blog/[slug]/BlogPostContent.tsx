'use client'
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { BlogPost } from '@/constants'
import { motion, useScroll, useSpring } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaArrowLeft, FaCalendarAlt, FaClock, FaShareAlt, FaBookmark, FaHeart } from 'react-icons/fa'
import { Inter, Outfit } from 'next/font/google'
import toast, { Toaster } from 'react-hot-toast'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Blog3DBackground from './Blog3DBackground'
import Blog3DCover from './Blog3DCover'

// Load premium fonts for the blog reading experience
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })
const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700', '800'] })

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast.success('Link copied to clipboard!')
  }

  const handleLike = () => {
    setLiked(!liked)
    if (!liked) toast.success('Liked post!')
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
    if (!bookmarked) toast.success('Saved to bookmarks!')
  }

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  }

  return (
    <>
      <Toaster position="bottom-right" />
      {/* Dynamic reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary origin-left z-50 rounded-r-full shadow-sm"
        style={{ scaleX }}
      />
      
      <Blog3DBackground />
      <section className={`min-h-screen bg-transparent text-foreground pt-20 pb-48 relative ${inter.className}`}>
        {/* Header Container */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-10 text-center"
          >
            <div className="flex flex-col items-center">
               <Link
                 href="/#blog"
                 className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mb-8 tracking-widest uppercase"
               >
                 <FaArrowLeft className="w-3 h-3" />
                 Back to Engineering Blog
               </Link>

               <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                 {post.tags.map((tag) => (
                   <span
                     key={tag}
                     className="rounded-md bg-secondary/50 border border-border text-foreground/80 px-2.5 py-1 text-xs font-medium tracking-wide"
                   >
                     {tag}
                   </span>
                 ))}
               </div>

               <h1 className={`${outfit.className} text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-8 text-foreground`}>
                 {post.title}
               </h1>

               <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-medium mb-10 w-full border-y border-border/40 py-4">
                 <div className="flex items-center gap-2">
                   <div className="w-9 h-9 rounded-full overflow-hidden border border-border bg-muted relative shadow-sm">
                      <Image src="/character.png" alt="Raghul M" fill className="object-cover" />
                   </div>
                   <div className="flex flex-col items-start leading-tight">
                      <span className="text-foreground font-semibold">Raghul M</span>
                      <span className="text-xs opacity-80">Platform Engineer</span>
                   </div>
                 </div>
                 
                 <div className="hidden sm:block h-6 w-px bg-border"></div>

                 <div className="flex items-center gap-2 opacity-90">
                   <FaCalendarAlt className="w-4 h-4 text-muted-foreground/70" />
                   {new Date(post.date).toLocaleDateString('en-US', {
                     month: 'short',
                     day: 'numeric',
                     year: 'numeric',
                   })}
                 </div>

                 <div className="hidden sm:block h-6 w-px bg-border"></div>

                 <div className="flex items-center gap-2 opacity-90">
                   <FaClock className="w-4 h-4 text-muted-foreground/70" />
                   {post.readTime}
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Cover Image - Widescreen bleeding out slightly */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-16"
        >
            <div className="relative w-full h-[40vh] min-h-[400px] md:h-[50vh] min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-border/40 bg-black/40 backdrop-blur-sm z-10">
              <Blog3DCover src={post.coverImage} alt={post.title} />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 pointer-events-none rounded-3xl" />
            </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 transition-all duration-500">
            <div className="bg-background/60 backdrop-blur-3xl border border-white/10 dark:border-white/5 rounded-[2.5rem] p-8 sm:p-12 md:p-20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] ring-1 ring-inset ring-white/20 overflow-hidden relative">
              
              {/* Subtle ambient light from top edge of card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent" />

              <article className={`prose prose-zinc dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-primary/10 ${inter.className}`}>
                
                {/* Introduction / Excerpt */}
                <p className="lead text-xl md:text-2xl text-foreground font-medium mb-12 border-l-4 border-primary pl-6 py-1 opacity-90">
                   {post.excerpt}
                </p>

                {post.content.map((section, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeIn}
                    className="mb-14"
                  >
                    {section.heading && (
                      <h2 className={`${outfit.className} text-3xl md:text-4xl font-bold tracking-tight mt-16 mb-8 text-foreground`}>
                        {section.heading}
                      </h2>
                    )}

                    {section.image && (
                      <figure className="my-10">
                        <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden bg-muted group shadow-xl border border-border/40">
                          <Image
                            src={section.image}
                            alt={section.imageAlt || section.heading || 'Blog illustration'}
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 896px) 100vw, 896px"
                            fill
                          />
                        </div>
                        {(section.imageAlt || section.heading) && (
                          <figcaption className="text-center text-sm text-muted-foreground mt-4 italic opacity-80">
                            {section.imageAlt || section.heading}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    <div className="text-muted-foreground leading-[1.8] text-lg">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          ol: ({node: _node, ...props}) => <ol className="bg-secondary/30 p-6 sm:p-8 rounded-2xl border border-border/50 my-8 list-decimal list-outside ml-4 text-foreground/90 space-y-4 marker:text-primary font-medium" {...props} />,
                          ul: ({node: _node, ...props}) => <ul className="bg-secondary/30 p-6 sm:p-8 rounded-2xl border border-border/50 my-8 list-disc list-outside ml-4 text-foreground/90 space-y-4 marker:text-primary font-medium" {...props} />,
                          li: ({node: _node, ...props}) => <li className="pl-2" {...props} />,
                          blockquote: ({node: _node, ...props}) => <blockquote className={`${outfit.className} border-l-4 border-primary/80 bg-gradient-to-r from-primary/5 to-transparent p-6 sm:p-8 rounded-r-2xl my-10 italic text-foreground font-medium text-2xl`} {...props} />,
                          p: ({node: _node, ...props}) => <p className="mb-6 last:mb-0" {...props} />,
                          strong: ({node: _node, ...props}) => <strong className="font-bold text-foreground" {...props} />
                        }}
                      >
                        {section.body}
                      </ReactMarkdown>
                    </div>
                  </motion.div>
                ))}
              </article>



              {/* Bottom Actions */}
              <div className="flex items-center justify-between border-y border-border/40 py-6 mt-16 mb-16">
                 <div className="flex gap-4">
                    <button 
                      onClick={handleLike}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 transition-colors text-sm font-medium ${liked ? 'bg-red-500/10 border-red-500/30 text-red-500' : 'bg-secondary/30 hover:bg-secondary/60'}`}
                    >
                       <FaHeart className={`w-4 h-4 ${liked ? 'text-red-500' : 'text-foreground/50'}`} /> {liked ? 'Liked' : 'Like'}
                    </button>
                 </div>
                 <div className="flex gap-3">
                    <button 
                      onClick={handleShare}
                      className="p-2.5 rounded-full border border-border/50 bg-secondary/30 hover:bg-secondary/60 hover:text-primary transition-colors"
                    >
                       <FaShareAlt className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleBookmark}
                      className={`p-2.5 rounded-full border border-border/50 transition-colors ${bookmarked ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-secondary/30 hover:bg-secondary/60 hover:text-primary'}`}
                    >
                       <FaBookmark className="w-4 h-4" />
                    </button>
                 </div>
              </div>

              {/* Author Box Footer */}
              <div className="bg-gradient-to-br from-secondary/50 to-background rounded-3xl p-8 border border-border/50 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                 <div className="flex-shrink-0 pt-2">
                   <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border relative">
                      <Image src="/character.png" alt="Raghul M" fill className="object-cover" />
                   </div>
                 </div>
                 <div>
                   <h3 className={`${outfit.className} text-xl font-bold mb-2`}>Written by Raghul M</h3>
                   <p className="text-muted-foreground mb-5 leading-relaxed">
                     DevOps / Platform Engineer building and operating production CI/CD and cloud infrastructure across AWS, Azure, GCP, and Oracle Cloud.
                   </p>
                   <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-transform hover:-translate-y-0.5 text-sm">
                     Get in touch
                   </Link>
                 </div>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

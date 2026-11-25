'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { FaDownload } from 'react-icons/fa'

const Document = dynamic(() => import('react-pdf').then((mod) => mod.Document), { ssr: false })
const Page = dynamic(() => import('react-pdf').then((mod) => mod.Page), { ssr: false })

import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

const ResumeSection = () => {
  const [error, setError] = useState<string | null>(null)
  const [numPages, setNumPages] = useState<number>(1)
  const [containerWidth, setContainerWidth] = useState<number>(890)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import('react-pdf').then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
    })
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof ResizeObserver === 'undefined') return

    const updateWidth = () => {
      setContainerWidth(Math.min(890, Math.max(280, el.clientWidth - 32)))
    }

    updateWidth()
    const observer = new ResizeObserver(updateWidth)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const onDocumentLoadError = (err: Error) => {
    setError(err.message)
  }

  return (
    <section
      id="resume"
      className="bg-background text-foreground px-6 py-16 flex flex-col items-center min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">My Resume</h2>
        <p className="mt-2 text-muted-foreground text-sm italic">
          View my professional qualifications across DevSecOps, cloud security, Kubernetes, and GenAI infrastructure.
        </p>
      </motion.div>

      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl bg-card border border-border rounded-lg shadow-lg overflow-hidden"
      >
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">Resume Preview</span>
          <span>{numPages > 1 ? `${numPages} pages (scroll to view all)` : '1 page'}</span>
        </div>

        <div className="relative w-full max-h-[820px] overflow-y-auto custom-scrollbar bg-muted/20 p-3 sm:p-4">
          {error ? (
            <p className="text-destructive text-center text-lg p-4">Failed to load PDF: {error}</p>
          ) : (
            <Document
              file="/resume.pdf"
              onLoadSuccess={({ numPages: total }) => setNumPages(total)}
              onLoadError={onDocumentLoadError}
              className="flex flex-col items-center gap-4 w-full"
            >
              {Array.from({ length: numPages }, (_, index) => (
                <div
                  key={`resume-page-${index + 1}`}
                  className="shadow-sm border border-border/60 rounded-sm overflow-hidden bg-white"
                >
                  <Page
                    pageNumber={index + 1}
                    className="flex justify-center"
                    renderTextLayer
                    renderAnnotationLayer
                    width={containerWidth}
                    scale={1}
                  />
                </div>
              ))}
            </Document>
          )}
        </div>
      </motion.div>

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all"
      >
        <FaDownload className="text-base" />
        Download Resume
      </motion.a>
    </section>
  )
}

export default ResumeSection

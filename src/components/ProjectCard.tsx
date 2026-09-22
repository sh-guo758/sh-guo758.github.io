import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../data/portfolio'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
      window.addEventListener('keydown', esc)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', esc)
      }
    }
  }, [open])

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => setOpen(true)}
        className="group cursor-pointer overflow-hidden rounded-2xl border border-line bg-bg-soft transition-colors duration-300 hover:border-accent/40"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30" />
          <span className="absolute left-3 top-3 rounded-full border border-line bg-bg/70 px-2.5 py-0.5 text-xs text-ink-dim backdrop-blur-sm">
            {project.category}
          </span>
          {project.video && (
            <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-line bg-bg/70 px-2.5 py-0.5 text-xs text-accent backdrop-blur-sm">
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              视频
            </span>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-dim">{project.note}</p>
        </div>

        <div className="h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-transparent transition-transform duration-500 group-hover:scale-x-100" />
      </motion.article>

      {/* 模态框：放大图片 / 播放视频 */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg-deep/90 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-bg-soft"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
                <h3 className="font-display text-base font-semibold text-ink sm:text-lg">{project.title}</h3>
                <button
                  aria-label="关闭"
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-ink-dim transition-colors hover:bg-accent-soft hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>

              <div className="flex min-h-0 flex-1 items-center justify-center bg-bg-deep/60 p-2">
                {project.video ? (
                  <video
                    src={project.video}
                    poster={project.image}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[70vh] w-full rounded-lg"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-[70vh] w-full rounded-lg object-contain"
                  />
                )}
              </div>

              <p className="border-t border-line px-5 py-3 text-sm text-ink-dim">{project.note}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

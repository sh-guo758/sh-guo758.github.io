import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories, projects } from '../data/portfolio'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'

const pageAnim = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

export default function Projects() {
  const [active, setActive] = useState<string>('全部')

  const filtered = useMemo(
    () => (active === '全部' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  return (
    <motion.main {...pageAnim} className="relative mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8">
      <div className="hero-glow opacity-70" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        className="relative"
      >
        <p className="mb-3 text-sm tracking-[0.3em] text-accent">SELECTED WORKS</p>
        <h1 className="font-display text-4xl font-black sm:text-5xl">作品集</h1>
        <p className="mt-4 max-w-2xl text-ink-dim">
          从三维建模到灯光设计、从手绘分镜到 AI 辅助创作——这里收藏我一路走来的每一道光。
        </p>
      </motion.div>

      {/* 分类筛选 */}
      <Reveal delay={0.15}>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-sm transition-all duration-300 ${
                active === c
                  ? 'bg-accent text-bg-deep shadow-glow'
                  : 'border border-line text-ink-dim hover:border-accent hover:text-accent'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      {/* 作品网格 */}
      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-ink-faint">该分类下暂无作品。</p>
      )}
    </motion.main>
  )
}

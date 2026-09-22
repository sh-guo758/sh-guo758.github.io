import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { profile, skills, experiences } from '../data/portfolio'
import Reveal from '../components/Reveal'

const pageAnim = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const letterDelay = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] as const } },
})

const roleWords = ['动画美术', '动画制片', '灯光设计', '三维美术']

export default function Home() {
  const name = profile.name.split('')

  return (
    <motion.main
      {...pageAnim}
      className="relative mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8"
    >
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden pb-20 pt-8">
        <div className="hero-glow" />
        <div className="relative">
          <motion.p
            {...letterDelay(0)}
            className="mb-5 text-sm tracking-[0.3em] text-accent"
          >
            PORTFOLIO · {profile.enName}
          </motion.p>

          <h1 className="font-display text-5xl font-black leading-tight sm:text-7xl">
            {name.map((ch, i) => (
              <motion.span
                key={i}
                {...letterDelay(i + 1)}
                className="inline-block"
                whileHover={{ color: '#E8A33D', y: -4 }}
              >
                {ch}
              </motion.span>
            ))}
          </h1>

          {/* 轮换定位词 */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xl text-ink-dim sm:text-2xl">
            <span>是</span>
            {roleWords.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.12, duration: 0.5 }}
                className="rounded-md bg-accent-soft px-2.5 py-1 font-display text-accent"
              >
                {w}
              </motion.span>
            ))}
          </div>

          <motion.p
            {...letterDelay(7)}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink-dim"
          >
            {profile.school} · 主修灯光方向，用光影塑造情绪，用三维构建世界。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg-deep transition-all hover:shadow-glow"
            >
              查看作品
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a
              href="mailto:daihaoniao_2024@qq.com"
              className="rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              联系我
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== 关于我 ===== */}
      <section className="py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-bold">关于我</h2>
          <div className="mt-2 h-px w-16 bg-accent" />
        </Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.1}>
            <p className="text-base leading-8 text-ink-dim">{profile.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['动画科班', '灯光方向', '概念到成稿', 'AI 辅助', '跨专业协作'].map((t) => (
                <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-ink-dim">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="card-line space-y-4 bg-bg-soft p-6">
              {[
                { k: '就读', v: '吉林动画学院 · 动画本科' },
                { k: '方向', v: '灯光渲染 / 场景美术' },
                { k: '目标', v: '动画美术 / 动画制片' },
              ].map((row) => (
                <div key={row.k} className="flex justify-between gap-4 border-b border-line pb-3 text-sm last:border-0 last:pb-0">
                  <span className="text-ink-faint">{row.k}</span>
                  <span className="text-right text-ink">{row.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== 技能 ===== */}
      <section className="py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-bold">技能</h2>
          <div className="mt-2 h-px w-16 bg-accent" />
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={0.1 + i * 0.08}>
              <div className="card-line group h-full bg-bg-soft p-6 transition-colors hover:border-accent/40">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-accent">
                  <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
                  {g.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-ink-dim">
                      <span className="text-accent/60">·</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== 经历 ===== */}
      <section className="py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-bold">经历</h2>
          <div className="mt-2 h-px w-16 bg-accent" />
        </Reveal>
        <div className="mt-8 space-y-5">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="card-line flex flex-col gap-2 bg-bg-soft p-6 transition-colors hover:border-accent/40 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-ink-dim">{e.desc}</p>
                </div>
                <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs text-accent">
                  {e.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== 联系方式 CTA ===== */}
      <section className="py-16">
        <Reveal>
          <div className="card-line relative overflow-hidden bg-bg-soft p-10 text-center sm:p-14">
            <div className="hero-glow opacity-60" />
            <h2 className="relative font-display text-3xl font-bold sm:text-4xl">让我们一起用光影讲故事</h2>
            <p className="relative mt-4 text-ink-dim">欢迎交流动画、美术与项目合作</p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${profile.phone}`}
                className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {profile.phone}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-line px-5 py-2.5 text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </motion.main>
  )
}

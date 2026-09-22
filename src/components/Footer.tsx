import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
        <div className="text-sm text-ink-dim">
          <span className="font-display text-ink">郭思航</span>
          <span className="mx-2 opacity-40">|</span>
          动画美术 / 动画制片
        </div>
        <div className="flex items-center gap-5 text-xs text-ink-faint">
          <Link to="/" className="transition-colors hover:text-accent">首页</Link>
          <Link to="/projects" className="transition-colors hover:text-accent">作品集</Link>
          <a href="mailto:daihaoniao_2024@qq.com" className="transition-colors hover:text-accent">联系我</a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-ink-faint">
        © {new Date().getFullYear()} 郭思航 · 用光影讲述故事
      </p>
    </footer>
  )
}

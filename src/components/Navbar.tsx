import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: '首页' },
  { to: '/projects', label: '作品集' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-bg-deep transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <circle cx="12" cy="12" r="8" opacity="0.35" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="12" cy="8" r="1.8" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-wide">
            郭思航<span className="ml-2 hidden text-xs font-normal text-ink-dim sm:inline">SIHANG · PORTFOLIO</span>
          </span>
        </Link>

        {/* 桌面端 */}
        <div className="hidden items-center gap-8 sm:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : 'text-ink-dim'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="mailto:daihaoniao_2024@qq.com"
            className="rounded-full border border-accent/50 px-4 py-1.5 text-sm text-accent transition-all hover:bg-accent hover:text-bg-deep hover:shadow-glow"
          >
            联系我
          </a>
        </div>

        {/* 移动端汉堡 */}
        <button
          aria-label="菜单"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-dim hover:text-accent sm:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* 移动端菜单 */}
      {open && (
        <div className="border-t border-line bg-bg/95 px-5 py-4 backdrop-blur-md sm:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base ${isActive ? 'text-accent' : 'text-ink-dim'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

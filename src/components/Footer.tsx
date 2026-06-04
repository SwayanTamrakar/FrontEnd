import type { ReactNode } from 'react'
import { Link } from 'react-router'

const linkClass = 'text-sm text-page/65 transition hover:text-page'

type PlaceholderLinkProps = {
  children: ReactNode
}

function PlaceholderLink({ children }: PlaceholderLinkProps) {
  return (
    <a href="#" className={linkClass} onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-page/70">
      <div
        className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_14px,rgba(255,255,255,0.04)_14px,rgba(255,255,255,0.04)_15px)] opacity-90"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="text-lg font-bold tracking-tight text-page">CV Insight</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-page/65">
              AI-powered resume screening platform for modern recruiting teams.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-page">Product</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link to="/features" className={linkClass}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="/workflow" className={linkClass}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className={linkClass}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/verification" className={linkClass}>
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-page">Company</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link to="/about" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <PlaceholderLink>Blog</PlaceholderLink>
              </li>
              <li>
                <PlaceholderLink>Careers</PlaceholderLink>
              </li>
              <li>
                <PlaceholderLink>Contact</PlaceholderLink>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-sm font-semibold text-page">Legal</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <PlaceholderLink>Privacy Policy</PlaceholderLink>
              </li>
              <li>
                <PlaceholderLink>Terms of Service</PlaceholderLink>
              </li>
              <li>
                <PlaceholderLink>Cookie Policy</PlaceholderLink>
              </li>
              <li>
                <PlaceholderLink>GDPR</PlaceholderLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-page/10 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-sm text-page/55">© 2026 CV Insight. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-page/65">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-page shadow-sm">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </span>
            <span>SOC 2 Type II Certified</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
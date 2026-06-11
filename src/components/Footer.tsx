import type { ReactNode } from 'react'
import { Link } from 'react-router'
import logo from '../assets/logo1.png'

const linkClass = 'text-sm font-medium text-navy transition hover:text-brand'

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
    <footer className="border-t border-navy/15 bg-brand/5 text-navy">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <img src={logo} alt="CV Insight" className="h-16 w-auto" />
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy/80">
              AI-powered resume screening platform for modern recruiting teams.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-navy">Product</h2>
            <ul className="mt-2 flex flex-col gap-1.5">
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
                <Link to="/benefits" className={linkClass}>
                  Benefits
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
            <h2 className="text-sm font-semibold text-navy">Company</h2>
            <ul className="mt-2 flex flex-col gap-1.5">
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
            <h2 className="text-sm font-semibold text-navy">Legal</h2>
            <ul className="mt-2 flex flex-col gap-1.5">
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

        <div className="mt-6 border-t border-navy/15 pt-4">
          <p className="text-sm text-navy/75">© 2026 CV Insight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

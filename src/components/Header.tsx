import { NavLink } from 'react-router'
import { useAuth } from '../context/AuthContext'
import ProfileAvatar from './ProfileAvatar'

const navClass = 'text-sm font-medium text-navy/70 transition hover:text-brand'

const Header = () => {
  const { isAuthenticated, userEmail, profileImage } = useAuth()

  return (
    <header className="sticky top-0 z-20 border-b border-navy/10 bg-page/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2.5">
          <span className="text-lg font-bold tracking-tight text-navy">CV Insight</span>
        </NavLink>

        <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center md:order-none md:w-auto md:justify-start lg:gap-x-8">
          <NavLink to="/features" className={navClass}>
            Features
          </NavLink>
          <NavLink to="/workflow" className={navClass}>
            How It Works
          </NavLink>
          <NavLink to="/benefits" className={navClass}>
            Benefits
          </NavLink>
          <NavLink to="/pricing" className={navClass}>
            Pricing
          </NavLink>
          {isAuthenticated && (
            <>
              <NavLink to="/screening" className={navClass}>
                Screening
              </NavLink>
              <NavLink to="/results" className={navClass}>
                Results
              </NavLink>
              <NavLink to="/verification" className={navClass}>
                Verification
              </NavLink>
            </>
          )}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {isAuthenticated ? (
            <NavLink
              to="/profile"
              className="inline-flex max-w-[12rem] items-center gap-2 rounded-full border border-navy/15 bg-brand/5 px-3 py-2 text-sm font-medium text-navy transition hover:border-brand/30 hover:bg-brand/10 sm:max-w-xs sm:px-4"
            >
              <ProfileAvatar email={userEmail} profileImage={profileImage} size="sm" className="ring-0" />
              <span className="truncate">{userEmail ?? 'Profile'}</span>
            </NavLink>
          ) : (
            <>
              <NavLink to="/login" className="text-sm font-medium text-navy/70 transition hover:text-brand">
                Sign In
              </NavLink>
              <NavLink
                to="/register"
                className="rounded-full bg-gradient-to-r from-brand to-navy px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/25 transition hover:brightness-105"
              >
                Get Started Free
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

import { NavLink } from 'react-router'
import { useAuth } from '../context/AuthContext'
import ProfileAvatar from './ProfileAvatar'
import { getEmailFromToken } from '../utils/jwt'
import { loadProfileImage } from '../utils/profileStorage'
import logo from '../assets/logo1.png'

const navClass = 'text-sm font-medium text-navy/70 transition hover:text-brand'

const Header = () => {
  const { token, userDTO } = useAuth()
  const email = userDTO?.email ?? (token ? getEmailFromToken(token) : null)
  const profileImage = email ? loadProfileImage(email) : null

  return (
    <header className="sticky top-0 z-20 border-b border-navy/10 bg-page/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="CV Insight" className="h-14 w-auto sm:h-16" />
        </NavLink>

        <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center md:order-none md:w-auto md:justify-start">
          <NavLink to="/features" className={navClass}>
            Features
          </NavLink>
          <NavLink to="/workflow" className={navClass}>
            How It Works
          </NavLink>
          <NavLink to="/about" className={navClass}>
            Benefits
          </NavLink>
          <NavLink to="/pricing" className={navClass}>
            Pricing
          </NavLink>
        </nav>

        {token ? (
          <div className="flex items-center gap-3 sm:gap-4">
            <NavLink
              to="/profile"
              aria-label="Profile"
              title="Profile"
              className="rounded-full transition hover:ring-2 hover:ring-brand/30"
            >
              <ProfileAvatar email={email} profileImage={profileImage} size="sm" />
            </NavLink>
          </div>
        ) : (
          <div className="flex items-center gap-3 sm:gap-4">
            <NavLink to="/login" className="text-sm font-medium text-navy/70 transition hover:text-brand">
              Sign In
            </NavLink>
            <NavLink
              to="/register"
              className="rounded-full bg-gradient-to-r from-brand to-navy px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/25 transition hover:brightness-105"
            >
              Get Started Free
            </NavLink>
          </div>
        )}

        
      </div>
    </header>
  )
}

export default Header

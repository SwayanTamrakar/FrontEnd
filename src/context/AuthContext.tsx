import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { loadProfileImage, saveProfileImage } from '../utils/profileStorage'
import { getEmailFromToken } from '../utils/jwt'

const TOKEN_KEY = 'token'
const EMAIL_KEY = 'userEmail'

type AuthContextType = {
  token: string | null
  userEmail: string | null
  profileImage: string | null
  isAuthenticated: boolean
  login: (jwtToken: string, email?: string) => void
  logout: () => void
  setProfileImage: (image: string | null) => void
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function readStoredEmail(token: string | null): string | null {
  const stored = localStorage.getItem(EMAIL_KEY)
  if (stored) return stored
  if (token) return getEmailFromToken(token)
  return null
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(TOKEN_KEY))
  const [userEmail, setUserEmail] = useState<string | null>(() =>
    readStoredEmail(localStorage.getItem(TOKEN_KEY))
  )
  const [profileImage, setProfileImageState] = useState<string | null>(() => {
    const email = readStoredEmail(localStorage.getItem(TOKEN_KEY))
    return email ? loadProfileImage(email) : null
  })
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => !!localStorage.getItem(TOKEN_KEY))

  const setProfileImage = useCallback(
    (image: string | null) => {
      setProfileImageState(image)
      if (userEmail) {
        saveProfileImage(userEmail, image)
      }
    },
    [userEmail]
  )

  useEffect(() => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token)
      setIsAuthenticated(true)
    } else {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(EMAIL_KEY)
      setUserEmail(null)
      setProfileImageState(null)
      setIsAuthenticated(false)
    }
  }, [token])

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(EMAIL_KEY, userEmail)
      setProfileImageState(loadProfileImage(userEmail))
    } else {
      localStorage.removeItem(EMAIL_KEY)
    }
  }, [userEmail])

  const login = (jwtToken: string, email?: string) => {
    const resolvedEmail = email ?? getEmailFromToken(jwtToken)
    setToken(jwtToken)
    setUserEmail(resolvedEmail)
    if (resolvedEmail) {
      setProfileImageState(loadProfileImage(resolvedEmail))
    }
  }

  const logout = () => {
    setToken(null)
    setUserEmail(null)
    setProfileImageState(null)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        userEmail,
        profileImage,
        isAuthenticated,
        login,
        logout,
        setProfileImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

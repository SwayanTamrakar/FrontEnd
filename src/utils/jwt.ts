type JwtPayload = {
  sub?: string
  iat?: number
  exp?: number
}

export function decodeJwtPayload(token: string): JwtPayload | null {
  try {
    const payload = token.split('.')[1]
    if (!payload) return null
    const json = atob(payload.replace(/-/g, '+').replace(/_/g, '/'))
    return JSON.parse(json) as JwtPayload
  } catch {
    return null
  }
}

export function getEmailFromToken(token: string): string | null {
  return decodeJwtPayload(token)?.sub ?? null
}

export function formatTokenDate(unixSeconds?: number): string | null {
  if (!unixSeconds) return null
  return new Date(unixSeconds * 1000).toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export function getDisplayNameFromEmail(email: string | null): string {
  if (!email) return 'User'
  const local = email.split('@')[0] ?? email
  return local
    .split(/[._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

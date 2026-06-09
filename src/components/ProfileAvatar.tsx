import { getDisplayNameFromEmail } from '../utils/jwt'

type ProfileAvatarProps = {
  email: string | null
  profileImage: string | null
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'h-8 w-8 rounded-full text-xs',
  md: 'h-20 w-20 text-2xl',
  lg: 'h-28 w-28 text-3xl',
}

export default function ProfileAvatar({
  email,
  profileImage,
  size = 'md',
  className = '',
}: ProfileAvatarProps) {
  const displayName = getDisplayNameFromEmail(email)
  const initials = displayName
    .split(' ')
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase()

  const baseClass = `flex shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-brand to-navy font-bold text-page ring-2 ring-page/25 ${size === 'sm' ? '' : 'rounded-2xl'} ${sizeClasses[size]} ${className}`

  if (profileImage) {
    return (
      <span className={baseClass}>
        <img src={profileImage} alt="" className="h-full w-full object-cover" />
      </span>
    )
  }

  return <span className={baseClass}>{initials}</span>
}

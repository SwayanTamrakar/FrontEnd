import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import ProfileAvatar from '../components/ProfileAvatar'
import { useAuth } from '../context/AuthContext'
import { getDisplayNameFromEmail } from '../utils/jwt'
import {
  loadProfileDetails,
  loadProfilePassword,
  saveProfileDetails,
  saveProfilePassword,
} from '../utils/profileStorage'

const inputClass =
  'mt-2 w-full rounded-xl border border-navy/15 bg-page px-4 py-3 text-sm text-navy outline-none focus:border-brand focus:ring-2 focus:ring-brand/20'

const passwordInputClass =
  'block w-full rounded-xl border border-navy/15 bg-page py-3 pl-4 pr-14 text-sm leading-normal text-navy outline-none focus:border-brand focus:ring-2 focus:ring-brand/20'

const buttonPrimary =
  'rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-page transition hover:bg-brand/90 disabled:opacity-60'

const buttonSecondary =
  'rounded-xl border border-navy/15 bg-page px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy/5 disabled:opacity-60'

type DetailRowProps = {
  label: string
  value: string
}

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <div className="flex flex-col gap-1 border-b border-navy/8 py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between">
      <dt className="text-sm font-medium text-navy/55">{label}</dt>
      <dd className="text-sm font-semibold text-navy sm:text-right">{value}</dd>
    </div>
  )
}

type PasswordFieldProps = {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  autoComplete?: string
  visible: boolean
  onToggleVisible: () => void
  minLength?: number
}

function PasswordField({
  id,
  label,
  value,
  onChange,
  autoComplete,
  visible,
  onToggleVisible,
  minLength,
}: PasswordFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy/70">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={passwordInputClass}
          required
          minLength={minLength}
        />
        <button
          type="button"
          onClick={onToggleVisible}
          aria-label={visible ? 'Hide password' : 'Show password'}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-navy/55 transition hover:bg-navy/5 hover:text-brand"
        >
          {visible ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

const emptyProfileForm = {
  username: '',
  contact: '',
  address: '',
}

export function ProfilePage() {
  const { userEmail, profileImage, setProfileImage, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [profileForm, setProfileForm] = useState(emptyProfileForm)
  const [storedPassword, setStoredPassword] = useState<string | null>(null)
  const [editingName, setEditingName] = useState(false)
  const [editingPassword, setEditingPassword] = useState(false)
  const [nameDraft, setNameDraft] = useState({ username: '', contact: '' })
  const [passwordDraft, setPasswordDraft] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [savingAvatar, setSavingAvatar] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (!userEmail) return
    const details = loadProfileDetails(userEmail)
    setProfileForm(details)
    setStoredPassword(loadProfilePassword(userEmail))
  }, [userEmail])

  if (!isAuthenticated) {
    return (
      <div className="mx-auto max-w-md px-4 py-16 text-center sm:px-6">
        <p className="text-navy/75">You are not signed in.</p>
        <Link to="/login" className="mt-4 inline-block font-medium text-brand hover:underline">
          Sign in
        </Link>
      </div>
    )
  }

  const email = userEmail
  const fullName = profileForm.username.trim() || getDisplayNameFromEmail(email)
  const phoneNumber = profileForm.contact.trim() || 'Not set'
  const passwordDisplay = storedPassword ? '#'.repeat(storedPassword.length) : '########'

  const showSuccess = (message: string) => {
    setStatusMessage(message)
    setErrorMessage(null)
    window.setTimeout(() => setStatusMessage(null), 4000)
  }

  const showError = (message: string) => {
    setErrorMessage(message)
    setStatusMessage(null)
  }

  const openChangeName = () => {
    setNameDraft({
      username: profileForm.username,
      contact: profileForm.contact,
    })
    setEditingName(true)
    setEditingPassword(false)
  }

  const openChangePassword = () => {
    setPasswordDraft({ currentPassword: '', newPassword: '', confirmPassword: '' })
    setShowCurrentPassword(false)
    setShowNewPassword(false)
    setShowConfirmPassword(false)
    setEditingPassword(true)
    setEditingName(false)
  }

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userEmail) return

    const updated = {
      ...profileForm,
      username: nameDraft.username.trim(),
      contact: nameDraft.contact.trim(),
    }
    saveProfileDetails(userEmail, updated)
    setProfileForm(updated)
    setEditingName(false)
    showSuccess('Name and phone updated.')
  }

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault()
    if (!userEmail) return

    if (!storedPassword) {
      showError('Sign in again to store your password on this device.')
      return
    }

    if (passwordDraft.currentPassword !== storedPassword) {
      showError('Current password is incorrect.')
      return
    }

    if (passwordDraft.newPassword.length < 6) {
      showError('New password must be at least 6 characters.')
      return
    }

    if (passwordDraft.newPassword !== passwordDraft.confirmPassword) {
      showError('New passwords do not match.')
      return
    }

    saveProfilePassword(userEmail, passwordDraft.newPassword)
    setStoredPassword(passwordDraft.newPassword)
    setPasswordDraft({ currentPassword: '', newPassword: '', confirmPassword: '' })
    setEditingPassword(false)
    showSuccess('Password updated on this device.')
  }

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      showError('Please choose an image file.')
      return
    }

    if (file.size > 2 * 1024 * 1024) {
      showError('Image must be 2 MB or smaller.')
      return
    }

    setSavingAvatar(true)
    try {
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = reject
        reader.readAsDataURL(file)
      })

      setProfileImage(dataUrl)
      showSuccess('Profile photo updated.')
    } catch {
      showError('Failed to read image file.')
    } finally {
      setSavingAvatar(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const handleRemovePhoto = () => {
    setProfileImage(null)
    showSuccess('Profile photo removed.')
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="bg-brand/[0.04] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {(statusMessage || errorMessage) && (
          <div
            className={`mb-6 rounded-xl border px-4 py-3 text-sm font-medium ${
              errorMessage
                ? 'border-red-200 bg-red-50 text-red-700'
                : 'border-emerald-200 bg-emerald-50 text-emerald-700'
            }`}
          >
            {errorMessage ?? statusMessage}
          </div>
        )}

        <div className="overflow-hidden rounded-2xl border border-navy/10 bg-page shadow-sm">
          <div className="bg-gradient-to-r from-brand to-navy px-6 py-8 sm:px-8">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <ProfileAvatar email={email} profileImage={profileImage} size="lg" />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageSelect}
              />
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-2xl font-bold text-page">{fullName}</h1>
                <p className="mt-1 text-sm text-page/85">{email}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
              <button
                type="button"
                disabled={savingAvatar}
                onClick={() => fileInputRef.current?.click()}
                className="rounded-lg bg-page px-4 py-2 text-sm font-semibold text-brand transition hover:bg-page/90 disabled:opacity-60"
              >
                {savingAvatar ? 'Saving…' : 'Change photo'}
              </button>
              {profileImage && (
                <button
                  type="button"
                  disabled={savingAvatar}
                  onClick={handleRemovePhoto}
                  className="rounded-lg border border-page/30 px-4 py-2 text-sm font-semibold text-page transition hover:bg-page/10 disabled:opacity-60"
                >
                  Remove photo
                </button>
              )}
            </div>
          </div>

          <section className="p-6 sm:p-8" aria-labelledby="account-info-heading">
            <h2 id="account-info-heading" className="text-lg font-bold text-navy">
              Account information
            </h2>
            <dl className="mt-4 rounded-xl border border-navy/10 bg-brand/[0.03] px-4">
              <DetailRow label="Full name" value={fullName} />
              <DetailRow label="Phone number" value={phoneNumber} />
              <DetailRow label="Password" value={passwordDisplay} />
              <DetailRow label="Email" value={email ?? ''} />
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={openChangeName} className={buttonPrimary}>
                Change name
              </button>
              <button type="button" onClick={openChangePassword} className={buttonSecondary}>
                Change password
              </button>
            </div>

            {editingName && (
              <form
                onSubmit={handleSaveName}
                className="mt-6 space-y-4 rounded-xl border border-brand/20 bg-brand/[0.04] p-5"
              >
                <h3 className="text-sm font-bold text-navy">Update name & phone</h3>
                <div>
                  <label htmlFor="edit-username" className="block text-sm font-medium text-navy/70">
                    Full name
                  </label>
                  <input
                    id="edit-username"
                    value={nameDraft.username}
                    onChange={(e) => setNameDraft({ ...nameDraft, username: e.target.value })}
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="edit-contact" className="block text-sm font-medium text-navy/70">
                    Phone number
                  </label>
                  <input
                    id="edit-contact"
                    value={nameDraft.contact}
                    onChange={(e) => setNameDraft({ ...nameDraft, contact: e.target.value })}
                    className={inputClass}
                    placeholder="98XXXXXXXX"
                    maxLength={10}
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <button type="submit" className={buttonPrimary}>
                    Save changes
                  </button>
                  <button type="button" onClick={() => setEditingName(false)} className={buttonSecondary}>
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {editingPassword && (
              <form
                onSubmit={handleSavePassword}
                className="mt-6 space-y-4 rounded-xl border border-brand/20 bg-brand/[0.04] p-5"
              >
                <h3 className="text-sm font-bold text-navy">Update password</h3>
                <p className="text-xs text-navy/60">
                  Saved on this device only. Your login password on the server is unchanged.
                </p>
                <PasswordField
                  id="current-password"
                  label="Current password"
                  autoComplete="current-password"
                  value={passwordDraft.currentPassword}
                  onChange={(value) =>
                    setPasswordDraft({ ...passwordDraft, currentPassword: value })
                  }
                  visible={showCurrentPassword}
                  onToggleVisible={() => setShowCurrentPassword((v) => !v)}
                />
                <PasswordField
                  id="new-password"
                  label="New password"
                  autoComplete="new-password"
                  value={passwordDraft.newPassword}
                  onChange={(value) => setPasswordDraft({ ...passwordDraft, newPassword: value })}
                  visible={showNewPassword}
                  onToggleVisible={() => setShowNewPassword((v) => !v)}
                  minLength={6}
                />
                <PasswordField
                  id="confirm-password"
                  label="Confirm new password"
                  autoComplete="new-password"
                  value={passwordDraft.confirmPassword}
                  onChange={(value) =>
                    setPasswordDraft({ ...passwordDraft, confirmPassword: value })
                  }
                  visible={showConfirmPassword}
                  onToggleVisible={() => setShowConfirmPassword((v) => !v)}
                  minLength={6}
                />
                <div className="flex flex-wrap gap-3">
                  <button type="submit" className={buttonPrimary}>
                    Save password
                  </button>
                  <button type="button" onClick={() => setEditingPassword(false)} className={buttonSecondary}>
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </section>

          <div className="flex flex-col gap-3 border-t border-navy/10 px-6 py-6 sm:flex-row sm:px-8">
            <button type="button" onClick={handleLogout} className={`${buttonSecondary} sm:flex-1`}>
              Log out
            </button>
            <Link
              to="/"
              className={`${buttonPrimary} text-center sm:flex-1`}
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

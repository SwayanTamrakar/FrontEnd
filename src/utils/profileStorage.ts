export type StoredProfileDetails = {
  username: string
  contact: string
  address: string
}

const emptyDetails: StoredProfileDetails = {
  username: '',
  contact: '',
  address: '',
}

function detailsKey(email: string) {
  return `profileDetails:${email}`
}

function avatarKey(email: string) {
  return `profileImage:${email}`
}

function passwordKey(email: string) {
  return `profilePassword:${email}`
}

export function loadProfileDetails(email: string): StoredProfileDetails {
  const raw = localStorage.getItem(detailsKey(email))
  if (!raw) return { ...emptyDetails }
  try {
    return JSON.parse(raw) as StoredProfileDetails
  } catch {
    return { ...emptyDetails }
  }
}

export function saveProfileDetails(email: string, details: StoredProfileDetails) {
  localStorage.setItem(detailsKey(email), JSON.stringify(details))
}

export function loadProfileImage(email: string): string | null {
  return localStorage.getItem(avatarKey(email))
}

export function saveProfileImage(email: string, image: string | null) {
  if (image) {
    localStorage.setItem(avatarKey(email), image)
  } else {
    localStorage.removeItem(avatarKey(email))
  }
}

export function loadProfilePassword(email: string): string | null {
  return localStorage.getItem(passwordKey(email))
}

export function saveProfilePassword(email: string, password: string) {
  localStorage.setItem(passwordKey(email), password)
}

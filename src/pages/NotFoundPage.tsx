import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-6xl font-bold text-button">404</p>
      <h1 className="mt-4 text-2xl font-bold text-foreground">Page not found</h1>
      <p className="mt-2 text-foreground/75">That route does not exist in CV Insight.</p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-button px-6 py-3 text-sm font-semibold text-page transition hover:brightness-95"
      >
        Go home
      </Link>
    </div>
  )
}

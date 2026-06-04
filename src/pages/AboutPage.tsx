import { Link } from 'react-router'

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium text-button">About</p>
      <h1 className="mt-2 text-3xl font-bold text-foreground">CV Insight</h1>
      <p className="mt-4 text-lg text-foreground/80">
        Final-year project: an AI-assisted resume screening and authenticity verification system. The goal is to help
        recruiters triage applicants faster while keeping humans in control of hiring decisions.
      </p>


      <h2 className="mt-8 text-xl font-semibold text-foreground">Pages in this app</h2>
      <ul className="mt-3 space-y-2 text-foreground/75">
        <li>
          <Link className="font-medium text-button hover:underline" to="/">
            Home
          </Link>{' '}
          — hero and highlights
        </li>
        <li>
          <Link className="font-medium text-button hover:underline" to="/features">
            Features
          </Link>{' '}
          — full capability list
        </li>
        <li>
          <Link className="font-medium text-button hover:underline" to="/workflow">
            Workflow
          </Link>{' '}
          — end-to-end pipeline steps
        </li>
        <li>
          <Link className="font-medium text-button hover:underline" to="/screening">
            Screening
          </Link>{' '}
          — upload and job description
        </li>
        <li>
          <Link className="font-medium text-button hover:underline" to="/results">
            Results
          </Link>{' '}
          — ranked table (demo data)
        </li>
        <li>
          <Link className="font-medium text-button hover:underline" to="/verification">
            Verification
          </Link>{' '}
          — authenticity-style checklist (demo)
        </li>
      </ul>

      <Link
        to="/"
        className="mt-10 inline-flex rounded-xl bg-button px-6 py-3 text-sm font-semibold text-page transition hover:brightness-95"
      >
        Return home
      </Link>
    </div>
  )
}

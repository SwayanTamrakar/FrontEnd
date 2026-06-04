import { Link } from 'react-router'

const checks = [
  { label: 'Employment timeline', result: 'No overlap detected (demo)', ok: true },
  { label: 'Education vs dates', result: 'Degree year aligns with institution (demo)', ok: true },
  { label: 'Skill claims vs tenure', result: 'Flag: skill listed before plausible exposure (demo)', ok: false },
]

export function VerificationPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium text-button">Authenticity</p>
      <h1 className="mt-2 text-3xl font-bold text-foreground">Verification summary</h1>
      <p className="mt-3 text-foreground/75">
        Static demo of integrity checks. Later, load a candidate ID from the API and render real findings here.
      </p>

      <ul className="mt-10 space-y-4">
        {checks.map((c) => (
          <li
            key={c.label}
            className="rounded-2xl border border-foreground/12 bg-page px-5 py-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-foreground">{c.label}</p>
                <p className="mt-1 text-sm text-foreground/75">{c.result}</p>
              </div>
              <span
                className={
                  c.ok
                    ? 'shrink-0 rounded-full bg-button/15 px-2.5 py-1 text-xs font-medium text-button'
                    : 'shrink-0 rounded-full bg-amber-500/15 px-2.5 py-1 text-xs font-medium text-amber-800'
                }
              >
                {c.ok ? 'Clear' : 'Review'}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          to="/results"
          className="rounded-xl border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-button hover:bg-button/5"
        >
          Back to results
        </Link>
        <Link
          to="/screening"
          className="rounded-xl bg-button px-6 py-3 text-sm font-semibold text-page transition hover:brightness-95"
        >
          New upload
        </Link>
      </div>
    </div>
  )
}

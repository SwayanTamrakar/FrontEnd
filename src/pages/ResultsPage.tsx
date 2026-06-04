import { Link } from 'react-router'

const demoRows = [
  { name: 'Alex Morgan', score: 87, flags: 'None', status: 'Shortlist' },
  { name: 'Jordan Lee', score: 72, flags: 'Gap in employment', status: 'Review' },
  { name: 'Sam Rivera', score: 64, flags: 'Skill mismatch', status: 'Hold' },
]

export function ResultsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium text-button">Results</p>
      <h1 className="mt-2 text-3xl font-bold text-foreground">Screening outcomes</h1>
      <p className="mt-3 max-w-2xl text-foreground/75">
        Fit scores and flags for each candidate. Populate this table from your Spring Boot API.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-foreground/12 bg-page shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-foreground/10 bg-button/5 text-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Candidate</th>
              <th className="px-4 py-3 font-semibold">Fit score</th>
              <th className="px-4 py-3 font-semibold">Flags</th>
              <th className="px-4 py-3 font-semibold">Suggested action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-foreground/10 text-foreground/90">
            {demoRows.map((row) => (
              <tr key={row.name} className="hover:bg-button/5">
                <td className="px-4 py-3 font-medium">{row.name}</td>
                <td className="px-4 py-3">{row.score}</td>
                <td className="px-4 py-3 text-foreground/75">{row.flags}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-button/15 px-2.5 py-0.5 text-xs font-medium text-button">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-foreground/60">
        <Link to="/verification" className="font-medium text-button hover:underline">
          Open authenticity view
        </Link>{' '}
        for timeline and credential checks on a selected candidate.
      </p>
    </div>
  )
}

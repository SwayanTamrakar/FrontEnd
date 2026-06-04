import type { ReactNode } from 'react'

type Feature = {
  title: string
  description: string
  bullets: string[]
  icon: ReactNode
}

const iconSpark = (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
)

const iconShield = (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Zm0 13.5a21.998 21.998 0 0 1-3-3.464M12 18.75a21.998 21.998 0 0 0 3-3.464M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125Z" />
  </svg>
)

const iconDoc = (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
)

const iconChart = (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
)

const iconSearch = (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
)

const iconStack = (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m15-3.128c.235.083.487.128.75.128m-15 0A2.25 2.25 0 0 1 4.5 9V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 24 18V9a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 4.5 9Z" />
  </svg>
)

const features: Feature[] = [
  {
    title: 'AI-assisted screening',
    description:
      'Turn unstructured resumes into comparable profiles and ranked shortlists aligned to your job description.',
    bullets: [
      'PDF and text ingestion with layout-aware parsing',
      'Skill and experience extraction into a stable schema',
      'Fit scoring with transparent factors (not a single unexplained number)',
      'Configurable weights for must-have vs nice-to-have skills',
    ],
    icon: iconSpark,
  },
  {
    title: 'Authenticity verification',
    description:
      'Surface inconsistencies in timelines, employers, and credentials so reviewers can investigate before an offer.',
    bullets: [
      'Employment date overlap and gap detection',
      'Cross-check of education claims against typical timelines',
      'Skill depth vs years of experience heuristics',
      'Flags routed to humans—no auto-reject on suspicion alone',
    ],
    icon: iconShield,
  },
  {
    title: 'Fair, auditable workflow',
    description:
      'Every decision can be traced back to inputs, model outputs, and reviewer actions for compliance and coursework demos.',
    bullets: [
      'Immutable event log for upload, score, and review events',
      'Versioned job descriptions tied to scoring runs',
      'Reviewer notes and disposition (shortlist, hold, reject)',
      'Exportable summaries for supervisors or viva documentation',
    ],
    icon: iconDoc,
  },
  {
    title: 'Job description matching',
    description:
      'Align candidates to the role you are hiring for using the same JD text your team already writes.',
    bullets: [
      'Keyword and semantic match against responsibilities',
      'Seniority and domain alignment hints',
      'Optional hard filters (location, degree, years)',
      'Re-run scoring when the JD is revised',
    ],
    icon: iconSearch,
  },
  {
    title: 'Ranking and triage views',
    description:
      'Sort and filter large applicant pools without losing context for borderline cases.',
    bullets: [
      'Sort by fit score, recency, or flag count',
      'Side-by-side resume and score breakdown',
      'Bulk actions for batch shortlist or export',
      'Keyboard-friendly table for fast review sessions',
    ],
    icon: iconChart,
  },
  {
    title: 'Structured candidate profile',
    description:
      'A normalized view of each applicant so screening is consistent across recruiters.',
    bullets: [
      'Employers, titles, and dates in a unified timeline',
      'Education block with institution and field of study',
      'Skill tags with confidence or frequency signals',
      'Attachments linked to the same candidate record',
    ],
    icon: iconStack,
  },
]

const BestSellers = () => {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Features</h2>
        <p className="mt-4 text-lg text-foreground/75">
          Full capability set for AI-assisted resume screening and authenticity checks—from ingestion to export—with
          humans in the loop at every sensitive step.
        </p>
      </div>
      <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <li
            key={f.title}
            className="group flex flex-col rounded-2xl border border-foreground/12 bg-page p-8 shadow-sm transition hover:border-button/40 hover:shadow-md"
          >
            <div className="mb-5 inline-flex rounded-xl bg-button/10 p-3 text-button transition group-hover:bg-button/15">
              {f.icon}
            </div>
            <h3 className="text-xl font-semibold text-foreground">{f.title}</h3>
            <p className="mt-3 leading-relaxed text-foreground/75">{f.description}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/70">
              {f.bullets.map((b) => (
                <li key={`${f.title}-${b}`}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BestSellers

type WorkflowStep = {
  step: string
  title: string
  body: string
  bullets: string[]
}

const steps: WorkflowStep[] = [
  {
    step: '1',
    title: 'Sign in and open a job',
    body: 'Authenticate, then select or create the role you are hiring for.',
    bullets: ['Secure session', 'Link screening runs to one job posting', 'Paste or upload the job description'],
  },
  {
    step: '2',
    title: 'Define criteria',
    body: 'Set must-have skills, seniority, and optional filters before resumes arrive.',
    bullets: ['Must-have vs weighted nice-to-have skills', 'Education and experience floors', 'Save criteria for repeat roles'],
  },
  {
    step: '3',
    title: 'Upload resumes',
    body: 'Bulk upload PDFs or accept text; each file becomes a candidate record.',
    bullets: ['Drag-and-drop or file picker', 'Duplicate detection by hash or email when available', 'Virus scan hook (backend)'],
  },
  {
    step: '4',
    title: 'Parse and structure',
    body: 'The pipeline extracts sections, employers, dates, education, and skills.',
    bullets: ['Layout-aware PDF parsing', 'Normalized employer names where possible', 'Structured JSON for downstream models'],
  },
  {
    step: '5',
    title: 'Score and rank',
    body: 'Fit scores combine JD match, depth signals, and policy weights you configure.',
    bullets: ['Explainable sub-scores per category', 'Ranked list with ties broken by rules you choose', 'Re-score when JD or weights change'],
  },
  {
    step: '6',
    title: 'Authenticity pass',
    body: 'Automated checks flag timeline oddities, credential gaps, or skill over-claims.',
    bullets: ['Overlap and gap analysis on employment', 'Education plausibility checks', 'Severity levels for reviewer triage'],
  },
  {
    step: '7',
    title: 'Human review',
    body: 'Recruiters open each profile with evidence, notes, and disposition.',
    bullets: ['Resume side-by-side with flags and scores', 'Comments visible to hiring manager', 'No auto-send without human confirm'],
  },
  {
    step: '8',
    title: 'Export and handoff',
    body: 'Shortlists and audit data leave the system for HRIS or committee use.',
    bullets: ['CSV or PDF summary export', 'Include reviewer and timestamp metadata', 'Archive run for compliance retention'],
  },
]

const Categories = () => {
  return (
    <section id="workflow" className="border-y border-foreground/10 bg-page py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Workflow</h2>
        <p className="mt-4 max-w-3xl text-lg text-foreground/75">
          End-to-end pipeline from job setup through structured parsing, scoring, authenticity checks, human review, and
          export. Steps map cleanly to backend services you can implement in Spring Boot.
        </p>
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="relative flex flex-col rounded-2xl border border-foreground/10 bg-button/5 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-button text-sm font-bold text-page">
                {s.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{s.body}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-foreground/65">
                {s.bullets.map((b) => (
                  <li key={`${s.step}-${b}`}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Categories

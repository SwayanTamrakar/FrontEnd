import type { ReactNode } from 'react'

type BenefitCard = {
  title: string
  description: string
  icon: ReactNode
}

const iconBenefitClock = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)

const iconBenefitShield = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Zm0 13.5a21.998 21.998 0 0 1-3-3.464M12 18.75a21.998 21.998 0 0 0 3-3.464M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125Z"
    />
  </svg>
)

const iconBenefitStar = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.385a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
)

const iconBenefitUsers = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.163 0M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.646-6.374-1.77l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
    />
  </svg>
)

const benefitCards: BenefitCard[] = [
  {
    title: '75% Faster Shortlisting',
    description: 'Cut screening time from days to seconds',
    icon: iconBenefitClock,
  },
  {
    title: 'Reduced Human Bias',
    description: 'Objective AI-driven candidate evaluation',
    icon: iconBenefitShield,
  },
  {
    title: '95% Match Accuracy',
    description: 'High-precision semantic skill matching',
    icon: iconBenefitStar,
  },
  {
    title: '10x Recruiter Efficiency',
    description: 'Handle more candidates with less effort',
    icon: iconBenefitUsers,
  },
]

export default function BenefitsSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand to-navy py-20 sm:py-24 lg:py-28"
      aria-labelledby="why-teams-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,255,255,0.18),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="why-teams-heading" className="text-3xl font-bold tracking-tight text-page sm:text-4xl">
            Why Teams Choose CV Insight
          </h1>
          <p className="mt-4 text-base leading-relaxed text-page/85 sm:text-lg">
            Measurable results from day one. Transform your recruitment process with proven AI technology.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {benefitCards.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center rounded-2xl border border-page/20 bg-page/10 p-6 text-center shadow-lg backdrop-blur-md sm:p-8"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/25 text-page ring-1 ring-page/20">
                {item.icon}
              </div>
              <h2 className="text-lg font-bold text-page">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-page/75">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

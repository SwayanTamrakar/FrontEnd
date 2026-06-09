import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext'

type FeatureCard = {
  title: string
  description: string
  iconWrap: string
  icon: ReactNode
}

const iconNlp = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
    <circle cx="6" cy="6" r="2.25" fill="currentColor" stroke="none" />
    <circle cx="18" cy="6" r="2.25" fill="currentColor" stroke="none" />
    <circle cx="12" cy="18" r="2.25" fill="currentColor" stroke="none" />
    <path strokeLinecap="round" d="M7.5 7.5h3M13.5 7.5h3M8.25 10.5l2.25 5.25M15.75 10.5l-2.25 5.25" />
  </svg>
)

const iconAts = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
)

const iconSemantic = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
    <circle cx="9" cy="9" r="2.5" />
    <circle cx="15" cy="9" r="2.5" />
    <circle cx="12" cy="15" r="2.5" />
    <path strokeLinecap="round" d="M11 10.5h2M10.25 12.25l1.5 1.5M13.75 12.25l-1.5 1.5" />
  </svg>
)

const iconBias = (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Zm0 13.5a21.998 21.998 0 0 1-3-3.464M12 18.75a21.998 21.998 0 0 0 3-3.464M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125V4.875c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125Z" />
  </svg>
)

const featureCards: FeatureCard[] = [
  {
    title: 'NLP-Based Resume Parsing',
    description:
      'Advanced natural language processing extracts structured data from any resume format with 98% accuracy.',
    iconWrap: 'bg-brand/15 text-brand',
    icon: iconNlp,
  },
  {
    title: 'ATS Score Calculation',
    description:
      'Real-time scoring engine compares resumes against job descriptions and generates detailed ATS compatibility scores.',
    iconWrap: 'bg-navy/10 text-navy',
    icon: iconAts,
  },
  {
    title: 'Semantic Skill Matching',
    description:
      'Goes beyond keyword matching to understand context, synonyms, and skill relationships using ML models.',
    iconWrap: 'bg-brand/12 text-navy',
    icon: iconSemantic,
  },
  {
    title: 'Bias-Free Evaluation',
    description:
      'Anonymized screening removes demographic identifiers to ensure fair, objective candidate evaluation.',
    iconWrap: 'bg-navy/8 text-brand',
    icon: iconBias,
  },
]

const iconStepDoc = (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
  </svg>
)

const iconStepBrain = (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
    />
  </svg>
)

const iconStepChart = (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    />
  </svg>
)

type WorkflowStep = {
  badge: string
  indexLabel: string
  title: string
  description: string
  icon: ReactNode
}

const workflowSteps: WorkflowStep[] = [
  {
    badge: '1',
    indexLabel: '01',
    title: 'Upload Resume & Job Description',
    description:
      'Drag & drop PDF or DOCX files, then paste or upload the job description for analysis.',
    icon: iconStepDoc,
  },
  {
    badge: '2',
    indexLabel: '02',
    title: 'AI Analysis & Keyword Matching',
    description:
      'Our NLP engine parses both documents and performs deep semantic matching across all skill dimensions.',
    icon: iconStepBrain,
  },
  {
    badge: '3',
    indexLabel: '03',
    title: 'Get ATS Score & Recommendations',
    description:
      'Receive a detailed score breakdown with actionable improvement recommendations instantly.',
    icon: iconStepChart,
  },
]

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

type Testimonial = {
  quote: string
  name: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'We reduced our screening time by 80% and improved quality of hires significantly.',
    name: 'Sarah Johnson',
    title: 'HR Director, TechCorp',
  },
  {
    quote: 'The ATS score recommendations helped our candidates get noticed by top companies.',
    name: 'Marcus Chen',
    title: 'Talent Lead, StartupXYZ',
  },
  {
    quote: 'Game changing tool. The bias free evaluation has transformed our hiring process.',
    name: 'Priya Sharma',
    title: 'Recruiter, Fortune 500',
  },
]

const StarRating = () => (
  <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} className="h-5 w-5 shrink-0 text-brand" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const HomeLandingSections = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <section className="border-t border-navy/10 bg-page py-20 sm:py-24 lg:py-28" aria-labelledby="hire-smarter-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="hire-smarter-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Everything You Need to Hire Smarter
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
              Our AI-powered platform combines cutting-edge NLP with machine learning to deliver unprecedented accuracy
              in resume screening.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
            {featureCards.map((card) => (
              <li
                key={card.title}
                className="flex flex-col rounded-2xl border border-navy/10 bg-page p-6 shadow-sm ring-1 ring-brand/5 transition hover:border-brand/20 hover:shadow-md"
              >
                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${card.iconWrap}`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">{card.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-page py-20 sm:py-24 lg:py-28" aria-labelledby="how-it-works-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="how-it-works-heading" className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70 sm:text-lg">
              Get from resume to decision in under 60 seconds with our streamlined AI pipeline.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-6xl lg:mt-20">
            <div
              className="pointer-events-none absolute left-[8%] right-[8%] top-8 z-0 hidden h-0.5 bg-gradient-to-r from-brand/25 via-brand/40 to-brand/25 lg:block"
              aria-hidden
            />
            <ul className="relative z-10 grid gap-14 sm:gap-16 lg:grid-cols-3 lg:gap-10">
              {workflowSteps.map((step) => (
                <li key={step.indexLabel} className="flex flex-col items-center text-center">
                  <div className="relative shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-navy text-page shadow-lg shadow-brand/30">
                      {step.icon}
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-page px-1.5 text-xs font-bold text-brand shadow-md ring-2 ring-page">
                      {step.badge}
                    </span>
                  </div>
                  <p className="mt-6 text-5xl font-extrabold leading-none tracking-tight text-brand/25 sm:text-6xl">
                    {step.indexLabel}
                  </p>
                  <h3 className="mt-4 text-lg font-bold text-navy sm:text-xl">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy/70 sm:max-w-xs sm:text-base">
                    {step.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-gradient-to-br from-brand to-navy py-20 sm:py-24 lg:py-28"
        aria-labelledby="why-teams-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,255,255,0.18),transparent)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="why-teams-heading" className="text-3xl font-bold tracking-tight text-page sm:text-4xl">
              Why Teams Choose CV Insight
            </h2>
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
                <h3 className="text-lg font-bold text-page">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-page/75">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-brand/[0.06] py-20 sm:py-24 lg:py-28" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="testimonials-heading" className="text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Trusted by HR Leaders
          </h2>
          <ul className="mt-12 grid gap-6 sm:mt-14 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((t) => (
              <li
                key={t.name}
                className="flex flex-col rounded-xl border border-navy/10 bg-page p-6 shadow-sm sm:p-8"
              >
                <StarRating />
                <blockquote className="mt-4 flex-1">
                  <p className="text-base italic leading-relaxed text-navy/75">&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <footer className="mt-6">
                  <p className="font-bold text-navy">{t.name}</p>
                  <p className="mt-0.5 text-sm text-navy/55">{t.title}</p>
                </footer>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {!isAuthenticated && (
      <section className="bg-page py-16 sm:py-20 lg:py-24" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-navy px-6 py-14 text-center shadow-2xl shadow-brand/25 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div
              className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-page/15 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-page/10 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col items-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-page/15 text-page ring-1 ring-page/25 backdrop-blur-sm">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </div>
              <h2 id="cta-heading" className="mt-8 max-w-2xl text-3xl font-bold tracking-tight text-page sm:text-4xl">
                Ready to Transform Your Hiring?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-page/90 sm:text-lg">
                Join thousands of HR professionals using CV Insight to hire better, faster, and fairer.
              </p>
              <div className="mt-10 flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:justify-center sm:gap-5">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-page px-8 py-3.5 text-base font-semibold text-brand shadow-lg transition hover:bg-page/95"
                >
                  Start Free Trial
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  to="/workflow"
                  className="inline-flex items-center justify-center rounded-full border-2 border-page bg-transparent px-8 py-3.5 text-base font-semibold text-page transition hover:bg-page/10"
                >
                  View Demo Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  )
}

export default HomeLandingSections

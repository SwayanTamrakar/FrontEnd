import { Link } from 'react-router'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-page pb-16 pt-6 sm:pb-20 lg:pb-28 lg:pt-10">
      <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] translate-x-1/4 rounded-full bg-brand/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/4 rounded-full bg-navy/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            <span className="text-navy">AI-Powered </span>
            <span className="text-brand">Resume</span>{' '}
            <span className="bg-gradient-to-r from-brand to-navy bg-clip-text text-transparent">Screening</span>
            <span className="text-navy"> & ATS Score Analysis</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/70 sm:text-lg">
            Automate candidate shortlisting with NLP and Machine Learning. Get instant ATS scores, identify skill gaps,
            and make data-driven hiring decisions at scale.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/screening"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-navy px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30 transition hover:brightness-105"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              Upload Resume
            </Link>
            <Link
              to="/workflow"
              className="inline-flex items-center gap-1 rounded-full border border-navy/15 bg-page px-8 py-4 text-base font-semibold text-navy shadow-sm transition hover:border-brand/30 hover:bg-brand/5"
            >
              Try Demo
              <svg className="h-4 w-4 text-navy/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-navy/10 pt-10 sm:gap-10">
            <div>
              <p className="text-2xl font-bold text-navy sm:text-3xl">500K+</p>
              <p className="mt-1 text-xs font-medium text-navy/55 sm:text-sm">Resumes Analyzed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy sm:text-3xl">98.5%</p>
              <p className="mt-1 text-xs font-medium text-navy/55 sm:text-sm">Accuracy Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-navy sm:text-3xl">2,400+</p>
              <p className="mt-1 text-xs font-medium text-navy/55 sm:text-sm">Companies Trust Us</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

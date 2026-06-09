const testimonials = [
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

export default function TestimonialsSection() {
  return (
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
  )
}

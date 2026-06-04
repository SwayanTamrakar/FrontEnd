const highlights = [
  { title: 'Structured extraction', body: 'Skills, employers, and dates parsed into a consistent schema for scoring.' },
  { title: 'Human-in-the-loop', body: 'Models suggest; recruiters decide with visible evidence and audit trails.' },
  { title: 'API-ready', body: 'Designed to plug into your Spring Boot CV-Insight service when endpoints are live.' },
]

const ProductHighlights = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">Why teams use CV Insight</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-foreground/75">
        Cross-cutting themes behind the full feature set and pipeline on the Features and Workflow pages.
      </p>
      <ul className="mt-12 grid gap-6 sm:grid-cols-3">
        {highlights.map((h) => (
          <li key={h.title} className="rounded-2xl border border-foreground/10 bg-button/5 px-6 py-8 text-center">
            <h3 className="text-lg font-semibold text-foreground">{h.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/75">{h.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductHighlights

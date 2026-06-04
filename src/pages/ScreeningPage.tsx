import { Link } from 'react-router'

export function ScreeningPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm font-medium text-button">Screening</p>
      <h1 className="mt-2 text-3xl font-bold text-foreground">Resume intake</h1>
      <p className="mt-3 text-foreground/75">
        Upload one or more PDF resumes and an optional job description.
      </p>

      <form
        className="mt-10 space-y-6"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div>
          <label htmlFor="job-desc" className="block text-sm font-medium text-foreground">
            Job description (optional)
          </label>
          <textarea
            id="job-desc"
            name="jobDescription"
            rows={5}
            className="mt-2 w-full rounded-xl border border-foreground/15 bg-page px-4 py-3 text-foreground shadow-sm outline-none transition focus:border-button focus:ring-2 focus:ring-button/30"
          />
        </div>

        <div>
          <label htmlFor="files" className="block text-sm font-medium text-foreground">
            Resume files (PDF)
          </label>
          <input
            id="files"
            name="files"
            type="file"
            accept=".pdf,application/pdf"
            multiple
            className="mt-2 block w-full text-sm text-foreground/80 file:mr-4 file:rounded-lg file:border-0 file:bg-button file:px-4 file:py-2 file:text-sm file:font-semibold file:text-page hover:file:brightness-95"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="rounded-xl bg-button px-6 py-3 text-sm font-semibold text-page shadow-md transition hover:brightness-95"
          >
            Run screening
          </button>
          <Link
            to="/results"
            className="rounded-xl border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-button hover:bg-button/5"
          >
            Skip to results demo
          </Link>
        </div>
      </form>
    </div>
  )
}

import { Link } from 'react-router'

const Shopnow = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="overflow-hidden rounded-3xl bg-header px-8 py-14 text-center sm:px-12">
        <h2 className="text-2xl font-bold text-page sm:text-3xl">Connect the Spring Boot API when you are ready</h2>
        <p className="mx-auto mt-4 max-w-xl text-page/85">
          Connect upload and results routes from your CV-Insight backend when you are ready.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/screening"
            className="inline-flex rounded-xl bg-button px-6 py-3 text-sm font-semibold text-page transition hover:brightness-95"
          >
            Go to screening
          </Link>
          <Link
            to="/results"
            className="inline-flex rounded-xl border border-page/40 bg-transparent px-6 py-3 text-sm font-semibold text-page transition hover:bg-page/10"
          >
            View results UI
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Shopnow

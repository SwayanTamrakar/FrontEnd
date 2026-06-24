import { Link } from 'react-router'

export function PaymentFailurePage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
        ×
      </div>
      <h1 className="mt-6 text-2xl font-bold text-foreground">Payment cancelled</h1>
      <p className="mt-3 text-navy/70">
        Your payment was not completed. No charges were made to your account.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/pricing"
          className="rounded-full bg-button px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-105"
        >
          Back to pricing
        </Link>
        <Link
          to="/"
          className="rounded-full border border-navy/15 px-6 py-2.5 text-sm font-semibold text-foreground transition hover:border-navy/30"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}

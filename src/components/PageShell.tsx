import type { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type PageShellProps = {
  children: ReactNode
}

const PageShell = ({ children }: PageShellProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-page text-foreground antialiased">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export default PageShell

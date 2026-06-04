import { Outlet } from 'react-router'
import PageShell from '../components/PageShell'

export function AppLayout() {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  )
}

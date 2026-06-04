import { BrowserRouter, Route, Routes } from 'react-router'
import { AppLayout } from './layouts/AppLayout'
import { AboutPage } from './pages/AboutPage'
import { FeaturesPage } from './pages/FeaturesPage'
import Homepage from './pages/Homepage'
import { WorkflowPage } from './pages/WorkflowPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { PricingPage } from './pages/PricingPage'
import { ResultsPage } from './pages/ResultsPage'
import { ScreeningPage } from './pages/ScreeningPage'
import { VerificationPage } from './pages/VerificationPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="workflow" element={<WorkflowPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="screening" element={<ScreeningPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="verification" element={<VerificationPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

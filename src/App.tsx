import { BrowserRouter, Route, Routes } from 'react-router'
import { AppLayout } from './layouts/AppLayout'
import { AboutPage } from './pages/AboutPage'
import { FeaturesPage } from './pages/FeaturesPage'
import Homepage from './pages/Homepage'
import { WorkflowPage } from './pages/WorkflowPage'
import { BenefitsPage } from './pages/BenefitsPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { PricingPage } from './pages/PricingPage'
import { PaymentPage } from './pages/PaymentPage'
import { PaymentSuccessPage } from './pages/PaymentSuccessPage'
import { PaymentFailurePage } from './pages/PaymentFailurePage'
import { ResultsPage } from './pages/ResultsPage'
import { ScreeningPage } from './pages/ScreeningPage'
import { VerificationPage } from './pages/VerificationPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProfilePage } from './pages/ProfilePage'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import OAuthSuccess from './pages/OAuthSuccess'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="workflow" element={<WorkflowPage />} />
          <Route path="benefits" element={<BenefitsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="screening" element={<ProtectedRoute><ScreeningPage /></ProtectedRoute>} />
          <Route path="results" element={<ProtectedRoute><ResultsPage /></ProtectedRoute>} />
          <Route path="verification" element={<ProtectedRoute><VerificationPage /></ProtectedRoute>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="payment" element={<ProtectedRoute><PaymentPage /></ProtectedRoute>} />
          <Route path="payment/success" element={<ProtectedRoute><PaymentSuccessPage /></ProtectedRoute>} />
          <Route path="payment/failure" element={<PaymentFailurePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/oauth-success" element={<OAuthSuccess />} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

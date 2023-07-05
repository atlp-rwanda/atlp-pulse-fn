import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormProvider from './components/Payment-steps/contexts/StepperContex';
import ScrollToTop from './components/ScrollToTop';
import Skeleton from './components/Skeleton';
import TicketsProvider from './hook/ticketsContext';
import './index.css';

const DashRoutes = React.lazy(() => import('./containers/DashRoutes'));
const MainRoutes = React.lazy(() => import('./containers/Routes'));
const LandingPage = React.lazy(() => import('./pages/Home'));
function App() {
  return (
    <div className="flex flex-col h-screen">
      <TicketsProvider>
        <FormProvider>
          <Router>
            <ScrollToTop>
              <Suspense fallback={<Skeleton />}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/dashboard/*" element={<DashRoutes />} />
                  <Route path="/*" element={<MainRoutes />} />
                </Routes>
              </Suspense>
            </ScrollToTop>
          </Router>
        </FormProvider>
      </TicketsProvider>
    </div>
  );
}

export default App;

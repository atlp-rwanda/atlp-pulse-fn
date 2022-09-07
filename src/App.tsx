import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormProvider from './components/Payment-steps/contexts/StepperContex';
import ScrollToTop from './components/ScrollToTop';
import Skeleton from './components/Skeleton';
import './index.css';

const DashRoutes = React.lazy(() => import('./containers/DashRoutes'));
const MainRoutes = React.lazy(() => import('./containers/Routes'));
const LandingPage = React.lazy(() => import('./pages/Home'));
function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <FormProvider>
        <Router>
          <ScrollToTop>
            <Suspense fallback={<Skeleton />}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/*" element={<DashRoutes />} />
                <Route path="/*" element={<MainRoutes />} />
              </Routes>
            </Suspense>
          </ScrollToTop>
        </Router>
      </FormProvider>
    </div>
  );
}

export default App;

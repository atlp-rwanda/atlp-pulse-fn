import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormProvider from './components/Payment-steps/contexts/StepperContex';
import ScrollToTop from './components/ScrollToTop';
import Skeleton from './components/Skeleton';
import TicketsProvider from './hook/ticketsContext';
import './index.css';

import DashRoutes from './containers/DashRoutes';
import MainRoutes from './containers/Routes';
import LandingPage from './pages/Home';

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

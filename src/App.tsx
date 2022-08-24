import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import ScrollToTop from './components/ScrollToTop';
import Skeleton from './components/Skeleton';

const DashRoutes = React.lazy(() => import('./containers/DashRoutes'));
const MainRoutes = React.lazy(() => import('./containers/Routes'));
const LandingPage = React.lazy(() => import('./pages/Home'));
function App() {
  return (
    <div className="flex flex-col min-h-screen ">
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
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import TicketsProvider from './hook/ticketsContext';
import './index.css';

import MainRoutes from './containers/Routes';
import LandingPage from './pages/Home';
import { TraineesProvider } from './hook/useTraineesData';

function App() {
  return (
    <div className="min-h-screen">
      <TicketsProvider>
          <TraineesProvider>
            <Router>
              <ScrollToTop>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/*" element={<MainRoutes />} />
                </Routes>
              </ScrollToTop>
            </Router>
          </TraineesProvider>
      </TicketsProvider>
    </div>
  );
}

export default App;

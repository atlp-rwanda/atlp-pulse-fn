import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainRoutes from './containers/Routes';
import DashRoutes from './containers/DashRoutes';
import './index.css';
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/Home';


const App = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard/*" element={<DashRoutes />} />
            <Route path="/*" element={<MainRoutes />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

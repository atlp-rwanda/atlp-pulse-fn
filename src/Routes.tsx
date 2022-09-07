import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrgRegister from './pages/OrgRegister';
import Header from './components/Header';
import Footer from './components/Footer';
import Orglogin from './pages/Organization/Orglogin';
import Pricing from './pages/Pricing';
import AdminLogin from './pages/Organization/AdminLogin';
import Perfomancetraineetable from './components/TraineePerformance';
import Error from './pages/Error';
import Pay from './components/Payment';
import ProtectedRoutes from './ProtectedRoute';

function MainRoutes() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/register-organization" element={<OrgRegister />} />
          <Route
            path="/org-login"
            element={(
              <ProtectedRoutes>
                <Orglogin />
              </ProtectedRoutes>
            )}
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing-form" element={<Pay />} />
          <Route path="/pricing-form" element={<Pay />} />
          <Route
            path="/login"
            element={(
              <ProtectedRoutes>
                <AdminLogin />
              </ProtectedRoutes>
            )}
          />
          <Route path="/" element={<Perfomancetraineetable />} />
          <Route path="/register-organization" element={<OrgRegister />} />
          <Route path="/org-login" element={<Orglogin />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default MainRoutes;

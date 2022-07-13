import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrgRegister from './pages/OrgRegister';
import Header from './components/Header';
import Footer from './components/Footer';
import Orglogin from './pages/Organization/Orglogin';
import Pricing from './pages/Pricing';
import PricingForm from './components/PricingForm';
import AdminLogin from './pages/Organization/AdminLogin';
// import Orggooglelogin from './pages/Organization/Orggooglelogin';
import Calendar from './components/Calendar';

function MainRoutes() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/register-organization" element={<OrgRegister />} />
          <Route path="/org-login" element={<Orglogin />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing-form" element={<PricingForm />} />
          <Route path="/login-admin" element={<AdminLogin />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default MainRoutes;

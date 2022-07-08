import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrgRegister from './pages/OrgRegister';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Orglogin from './pages/Organization/Orglogin';
import Pricing from './pages/Pricing';
import PricingForm from './components/PricingForm';
import AdminLogin from './pages/Organization/AdminLogin';

function MainRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-organization" element={<OrgRegister />} />
          <Route path="/org-login" element={<Orglogin />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing-form" element={<PricingForm />} />
          <Route path="/login-admin" element={<AdminLogin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default MainRoutes;

/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrgRegister from '../pages/OrgRegister';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Orglogin from '../pages/Organization/Orglogin';
import Adminlogin from '../pages/Organization/AdminLogin';
import NotFound from '../pages/NotFound';
import PricingForm from '../components/PricingForm';
import Pricing from '../pages/Pricing';
import NoRedirect from '../pages/Noredirect';
import PaymentForm from '../components/PaymentForm';

function MainRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-organization" element={<OrgRegister />} />
        <Route path="/org-login" element={<Orglogin />} />
        <Route path="/login-admin" element={<Adminlogin />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/pricing-form" element={<PricingForm />} />
        <Route path="/redirect-info" element={<NoRedirect />} />
        <Route path="/payment-form" element={<PaymentForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default MainRoutes;

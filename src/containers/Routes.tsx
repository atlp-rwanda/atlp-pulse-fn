/* eslint-disable */
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Error from './../pages/Error';
import Skeleton from '../components/Skeleton';
const OrgRegister = React.lazy(() => import('../pages/OrgRegister'));
const Orglogin = React.lazy(() => import('../pages/Organization/Orglogin'));
const Adminlogin = React.lazy(() => import('../pages/Organization/AdminLogin'));
const Pricing = React.lazy(() => import('../pages/Pricing'));
const Pay = React.lazy(() => import('../components/Payment'));
import ProtectedRoutes from '../ProtectedRoute';

function MainRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-organization" element={<OrgRegister />} />
          <Route
            path="/organization-login"
            element={
              <ProtectedRoutes>
                <Orglogin />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoutes>
                <Adminlogin />
              </ProtectedRoutes>
            }
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing-form" element={<Pay />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default MainRoutes;

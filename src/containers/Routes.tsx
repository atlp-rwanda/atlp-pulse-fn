/* eslint-disable */
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Error from './../pages/Error';
import Skeleton from '../components/Skeleton';
import UserRegister from '../pages/Organization/UserRegister';
import Message from '../pages/Organization/Message';
const OrgRegister = React.lazy(() => import('../pages/OrgRegister'));
const Orglogin = React.lazy(() => import('../pages/Organization/Orglogin'));
const Adminlogin = React.lazy(() => import('../pages/Organization/AdminLogin'));
const Pricing = React.lazy(() => import('../pages/Pricing'));
const Product = React.lazy(() => import('../pages/Comingsoon'));
const Pay = React.lazy(() => import('../components/Payment'));
import Noredirect from '../pages/Noredirect';
import ProtectedRoutes from '../ProtectedRoute';

function MainRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/register-successful" element={<Message />} />
          <Route path="/signup/org" element={<OrgRegister />} />
          <Route
            path="/login/org"
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
          <Route path="/product" element={<Product />} />
          <Route path="/noredirect" element={<Noredirect />} />
          <Route path="/pricing-form" element={<Pay />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default MainRoutes;

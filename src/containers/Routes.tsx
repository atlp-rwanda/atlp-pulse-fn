/* eslint-disable */
import React, { Suspense } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Error from './../pages/Error';
import Skeleton from '../components/Skeleton';
import UserRegister from '../pages/Organization/UserRegister';
import Message from '../pages/Organization/Message';
/* istanbul ignore next */
const OrgRegister = React.lazy(() => import('../pages/OrgRegister'));
/* istanbul ignore next */
const Orglogin = React.lazy(() => import('../pages/Organization/Orglogin'));
/* istanbul ignore next */
const ResetPassword = React.lazy(() => import('../pages/ResetPassword'));
/* istanbul ignore next */
const ForgotPassword = React.lazy(() => import('../pages/ForgotPassword'));
/* istanbul ignore next */
const Adminlogin = React.lazy(() => import('../pages/Organization/AdminLogin'));
/* istanbul ignore next */
const Pricing = React.lazy(() => import('../pages/Pricing'));
/* istanbul ignore next */
const About = React.lazy(() => import('../pages/Comingsoon'));
/* istanbul ignore next */
const Product = React.lazy(() => import('../pages/Comingsoon'));
/* istanbul ignore next */
const SignupOrgDocs = React.lazy(
  () => import('../components/Docs/SignupOrgDocs'),
);
/* istanbul ignore next */
const SigninOrgDocs = React.lazy(
  () => import('../components/Docs/SigninOrgDocs'),
);
/* istanbul ignore next */
import Noredirect from '../pages/Noredirect';
import ProtectedRoutes from '../ProtectedRoute';
import RemoveTokenPage from '../utils/RemoveTokenPage';
import DashRoutes from '../containers/DashRoutes';

function MainRoutes() {
  return (
    <div className="min-h-screen page-layout">
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/*" element={<DashRoutes />} />     
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="page-main bg-light-bg dark:bg-dark-frame-bg">
                  <Outlet />
                </main>
                <Footer />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route path="/register/:token" element={<UserRegister />} />
            <Route path="/register-successful" element={<Message />} />
            <Route path="/signup/org" element={<OrgRegister />} />
            <Route path="/signup/org/:token" element={<RemoveTokenPage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/forgot-password/:token"
              element={<ForgotPassword />}
            />
            <Route
              path="/login/org"
              element={
                <ProtectedRoutes>
                  <Orglogin />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/users/login"
              element={
                <ProtectedRoutes>
                  <Adminlogin />
                </ProtectedRoutes>
              }
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About title={'About Page'} />} />
            <Route
              path="/product"
              element={<Product title={'Productpage'} />}
            />
            <Route path="/docs/org-signup" element={<SignupOrgDocs />} />
            <Route path="/docs/org-signin" element={<SigninOrgDocs />} />
            <Route path="/noredirect" element={<Noredirect />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MainRoutes;

/* eslint-disable */
import React, { Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Skeleton from '../components/Skeleton';
import Home from '../pages/Home';
import Message from '../pages/Organization/Message';
import UserRegister from '../pages/Organization/UserRegister';
import Error from './../pages/Error';
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
const UsersDocs = React.lazy(() => import('../components/Docs/users'));
/* istanbul ignore next */
import DashRoutes from '../containers/DashRoutes';
import Noredirect from '../pages/Noredirect';
import RedirectHandler from '../pages/RedirectHandler';
import ProtectedRoutes from '../ProtectedRoute';
import RemoveTokenPage from '../utils/RemoveTokenPage';

function MainRoutes() {
  return (
    <div className="min-h-screen page-layout">
      <Suspense>
        <Routes>
          <Route path="/*" element={<DashRoutes />} />
          <Route
            path="/"
            element={
              <>
                <Suspense fallback={<Skeleton />}>
                  <Header />
                  <main className="page-main bg-light-bg dark:bg-dark-frame-bg">
                    <Outlet />
                  </main>
                  <Footer />
                </Suspense>
              </>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<Skeleton />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/register/:token"
              element={
                <Suspense fallback={<Skeleton />}>
                  <UserRegister />
                </Suspense>
              }
            />
            <Route path="/register-successful" element={<Message />} />
            <Route
              path="/signup/org"
              element={
                <Suspense fallback={<Skeleton />}>
                  <OrgRegister />
                </Suspense>
              }
            />
            <Route
              path="/signup/org/:token"
              element={
                <Suspense fallback={<Skeleton />}>
                  <RemoveTokenPage />
                </Suspense>
              }
            />
            <Route
              path="/reset-password"
              element={
                <Suspense fallback={<Skeleton />}>
                  <ResetPassword />
                </Suspense>
              }
            />
            <Route
              path="/forgot-password/:token"
              element={<ForgotPassword />}
            />
            <Route
              path="/login/org"
              element={
                <ProtectedRoutes>
                  <Suspense fallback={<Skeleton />}>
                    <Orglogin />
                  </Suspense>
                </ProtectedRoutes>
              }
            />
            <Route
              path="/users/login"
              element={
                <ProtectedRoutes>
                  <Suspense fallback={<Skeleton />}>
                    <Adminlogin />
                  </Suspense>
                </ProtectedRoutes>
              }
            />
            <Route
              path="/pricing"
              element={
                <Suspense fallback={<Skeleton />}>
                  <Pricing />{' '}
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<Skeleton />}>
                  <About title={'About Page'} />
                </Suspense>
              }
            />
            <Route
              path="/product"
              element={
                <Suspense fallback={<Skeleton />}>
                  <Product title={'Productpage'} />
                </Suspense>
              }
            />
            <Route path="/docs/org-signup" element={<SignupOrgDocs />} />
            <Route path="/docs/org-signin" element={<SigninOrgDocs />} />
            <Route
              path="/docs/getting-started"
              element={
                <Suspense fallback={<Skeleton />}>
                  <UsersDocs />
                </Suspense>
              }
            />
            <Route path="/noredirect" element={<Noredirect />} />
            <Route path="/redirect" element={<RedirectHandler />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MainRoutes;

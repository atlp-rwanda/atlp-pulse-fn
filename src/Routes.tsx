import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrgRegister from './pages/OrgRegister';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/AdminLogin';

function MainRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-organization" element={<OrgRegister />} />
          <Route path="/adminLogin" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default MainRoutes;

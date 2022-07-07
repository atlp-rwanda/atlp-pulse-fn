import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrgRegister from './pages/OrgRegister';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function MainRoutes() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-organization" element={<OrgRegister />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default MainRoutes;

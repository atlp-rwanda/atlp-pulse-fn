/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashHeader from '../components/DashHeader';
import Sidebar from '../components/Sidebar';
import SupAdDashboard from '../pages/SupAdDashboard';
import Settings from '../pages/Settings';

function DashRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashHeader />
      <Sidebar style="hidden lg:flex" />
      <Routes>
        <Route path="/super-admin" element={<SupAdDashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default DashRoutes;

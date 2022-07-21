/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashHeader from '../components/DashHeader';
import Sidebar from '../components/Sidebar';
import SupAdDashboard from '../pages/SupAdDashboard';
import Settings from '../pages/Settings';
import PerformanceDetails from '../containers/Trainee/PerformanceDetails';
import TraineePerfomance from '../components/TraineePerformance';
import TraineeDashboard from"../pages/TraineeDashboard";
import TraineeAttendance from "../components/TraineeAttendance";
import AttendanceDetails from "../containers/Trainee/AttendanceDetails";

function DashRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashHeader />
      <Sidebar style="hidden lg:flex" />
      <Routes>
        <Route path="/super-admin" element={<SupAdDashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/trainee-dashboard" element={<TraineeDashboard />} />
        <Route path="/trainee/performance" element={<TraineePerfomance />} />
        <Route path="/trainee/performance-details" element={<PerformanceDetails />} />
        <Route path="/trainee/performance-details" element={<PerformanceDetails />} />
        <Route path="/trainee/attendance" element={<TraineeAttendance/>}/>
        <Route path="/trainee/attendance-details" element={<AttendanceDetails/>}/>
      </Routes>
    </div>
  );
}

export default DashRoutes;

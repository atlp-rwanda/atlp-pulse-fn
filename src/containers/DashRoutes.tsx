/* eslint-disable */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashHeader from '../components/DashHeader';
import Sidebar from '../components/Sidebar';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';
import PerformanceDetails from '../containers/Trainee/PerformanceDetails';
import TraineePerfomance from '../components/TraineePerformance';
import TraineeAttendance from '../components/TraineeAttendance';
import AttendanceDetails from '../containers/Trainee/AttendanceDetails';
import AdminCohorts from './admin-dashBoard/Cohorts';
import AdminSession from './admin-dashBoard/Sessions';
import AdminManageRoles from './admin-dashBoard/ManagerRoles';
import Error from '../pages/Error';
import PrivateRoute from '../utils/PrivateRoute';
import AdminTraineeDashboard from '../pages/AdminTraineeDashboard';
import TraineeRatingDashboard from '../pages/TraineeRatingDashboard';
import UpdatedRatingDashboard from '../pages/UpdatedRatingDashboard';
import SupAdDashboard from '../pages/SupAdDashboard';
import TraineeDashboard from '../pages/TraineeDashboard';
import Calendar from '../components/Calendar';
import GradingSystem from '../pages/GradingSystem';
import Profile from '../pages/Profile';
import EditProfile from '../pages/ProfileEdit';

function DashRoutes() {
  return (
    <PrivateRoute>
      <div className="flex flex-col min-h-screen">
        <DashHeader />
        <Sidebar style="hidden lg:flex" />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/trainees" element={<AdminTraineeDashboard />} />
          <Route path="/ratings" element={<TraineeRatingDashboard />} />
          <Route path="/updated-ratings" element={<UpdatedRatingDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/performance" element={<TraineePerfomance />} />
          <Route path="/attendance" element={<TraineeAttendance />} />
          <Route path="/attendance-details" element={<AttendanceDetails />} />
          <Route path="/cohorts" element={<AdminCohorts />} />
          <Route path="/sessions" element={<AdminSession />} />
          <Route path="/manage" element={<AdminManageRoles />} />
          <Route path="/grading" element={<GradingSystem />} />
          <Route path="/performance-details" element={<PerformanceDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="*" element={<Error />} />
          <Route path="/super-admin" element={<SupAdDashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </PrivateRoute>
  );
}

export default DashRoutes;

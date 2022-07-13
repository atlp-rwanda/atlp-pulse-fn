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
import NotFound from '../pages/NotFoundDashboard';
import PrivateRoute from '../utils/PrivateRoute';
import AdminTraineeDashboard from '../pages/AdminTraineeDashboard';
import TraineeRatingDashboard from '../pages/TraineeRatingDashboard'
import UpdatedRatingDashboard from '../pages/UpdatedRatingDashboard'
import SupAdDashboard from '../pages/SupAdDashboard';
import TraineeDashboard from '../pages/TraineeDashboard';

function DashRoutes() {
  return (
    <PrivateRoute>
      <div className="flex flex-col min-h-screen">
        <DashHeader />
        <Sidebar style="hidden lg:flex" />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/super-admin" element={<SupAdDashboard />} />
          <Route path="/trainee-dashboard" element={<TraineeDashboard />} />
          <Route path="/trainee/performance" element={<TraineePerfomance />} />
          <Route path="/trainee/performance-details" element={<PerformanceDetails />} />
          <Route path="/trainee/attendance" element={<TraineeAttendance/>}/>
          <Route path="/trainee/attendance-details" element={<AttendanceDetails/>}/>
          <Route path="/admin/cohorts" element={<AdminCohorts />} />
          <Route path="/admin/session" element={<AdminSession/>} />
          <Route path="/admin/manage" element={<AdminManageRoles/>} />
          <Route path="/trainee" element={<AdminTraineeDashboard />} />
          <Route path="/trainee/rating" element={<TraineeRatingDashboard />} />
          <Route path="/trainee/updated-rating" element={<UpdatedRatingDashboard />} />
        </Routes>
      </div>
    </PrivateRoute>

  );
}

export default DashRoutes;


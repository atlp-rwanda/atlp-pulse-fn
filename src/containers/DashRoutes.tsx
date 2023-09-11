/* istanbul ignore file */
import React, { Suspense, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashHeader from '../components/DashHeader';
import Sidebar from '../components/Sidebar';
import PrivateRoute from '../utils/PrivateRoute';
import Square from '../Skeletons/Square';
import MenuProvider, { MenuContext } from '../hook/menuProvider';

const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Settings = React.lazy(() => import('../pages/Settings'));
const PerformanceDetails = React.lazy(
  () => import('../containers/Trainee/PerformanceDetails'),
);
const TraineePerfomance = React.lazy(
  () => import('../components/TraineePerformance'),
);
const Attendance = React.lazy(() => import('../pages/Attendance'));
const AttendanceDetails = React.lazy(
  () => import('../containers/Trainee/AttendanceDetails'),
);
const LoginActivitiesTable = React.lazy(
  () => import('../components/LoginActivitiesTable'),
);
const AdminTeams = React.lazy(() => import('./admin-dashBoard/Teams'));
const AdminCohorts = React.lazy(() => import('./admin-dashBoard/Cohorts'));
const AdminPrograms = React.lazy(() => import('./admin-dashBoard/Programs'));
const AdminSession = React.lazy(() => import('./admin-dashBoard/Sessions'));
const AdminPhases = React.lazy(() => import('./admin-dashBoard/Phases'));
const AdminManageRoles = React.lazy(
  () => import('./admin-dashBoard/ManagerRoles'),
);
const AdminTraineeDashboard = React.lazy(
  () => import('../pages/AdminTraineeDashboard'),
);
const TtlTraineeDashboard = React.lazy(
  () => import('../pages/ttlTraineeDashboard'),
);
const ViewTraineeRatings = React.lazy(
  () => import('../pages/ratings/ViewTraineeRatings'),
);
const TraineeRatingDashboard = React.lazy(
  () => import('../pages/TraineeRatingDashboard'),
);
const AdminRatings = React.lazy(() => import('../pages/AdminRatings'));
const UpdatedRatingDashboard = React.lazy(
  () => import('../pages/UpdatedRatingDashboard'),
);
const SupAdDashboard = React.lazy(() => import('../pages/SupAdDashboard'));
const Calendar = React.lazy(() => import('../components/Calendar'));
const CoordinatorsPage = React.lazy(
  () => import('../containers/admin-dashBoard/CoordinatorModal'),
);
const TtlsPage = React.lazy(
  () => import('../containers/admin-dashBoard/TtlsModal'),
);

const GradingSystem = React.lazy(() => import('../pages/GradingSystem'));
const Profile = React.lazy(() => import('../pages/Profile'));
const EditProfile = React.lazy(() => import('../pages/ProfileEdit'));
const Organizations = React.lazy(() => import('../components/Organizations'));
const AdminDocs = React.lazy(() => import('../components/Docs/AdminDocs'));
const CoordinatorDocs = React.lazy(
  () => import('../components/Docs/CoordinatorDocs'),
);
const TraineeDocs = React.lazy(() => import('../components/Docs/TraineeDocs'));
const OthersDocs = React.lazy(() => import('../components/Docs/OthersDocs'));
const HelpPage = React.lazy(() => import('../pages/HelpPage'));
const Tickets = React.lazy(() => import('../pages/Tickets'));
const Ticket = React.lazy(() => import('../pages/Ticket'));
const AllTickets = React.lazy(() => import('../pages/AllTickets'));
const ManagersCards = React.lazy(() => import('../components/ManagerCard'));
const CoordinatorCards = React.lazy(
  () => import('../components/CoordinatorCard'),
);

function DashRoutes() {
  const { toggleNav } = useContext(MenuContext);

  return (
    <PrivateRoute>
      <MenuProvider>
        <DashHeader />
        <Sidebar toggle={toggleNav} style="" />
      </MenuProvider>
      <main className="page-main px-3 md:px-8 py-8 max-w-[100%] bg-light-bg dark:bg-dark-frame-bg">
        <Suspense fallback={<Square />}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trainees" element={<AdminTraineeDashboard />} />
            <Route path="/trainees/:userId" element={<ViewTraineeRatings />} />
            <Route path="/ratings" element={<TraineeRatingDashboard />} />
            <Route path="/admin/ratings" element={<AdminRatings />} />
            <Route
              path="/updated-ratings"
              element={<UpdatedRatingDashboard />}
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/performance" element={<TraineePerfomance />} />
            {/* <Route path="/attendance" element={<TraineeAttendance />} /> */}
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/attendance-details" element={<AttendanceDetails />} />
            <Route path="/teams" element={<AdminTeams />} />
            <Route path="/cohorts" element={<AdminCohorts />} />
            <Route path="/phases" element={<AdminPhases />} />
            <Route path="/programs" element={<AdminPrograms />} />
            <Route path="/sessions" element={<AdminSession />} />
            <Route path="/manage" element={<AdminManageRoles />} />
            <Route path="/grading" element={<GradingSystem />} />
            <Route
              path="/performance-details"
              element={<PerformanceDetails />}
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            {/* <Route path="*" element={<Error />} /> */}
            <Route path="/super-admin" element={<SupAdDashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/coordinators" element={<CoordinatorsPage />} />
            <Route path="/docs/admin" element={<AdminDocs />} />
            <Route path="/ttls" element={<TtlsPage />} />
            <Route path="/coordinatorDocs" element={<CoordinatorDocs />} />
            <Route path="/docs/trainee" element={<TraineeDocs />} />
            <Route path="/docs" element={<OthersDocs />} />
            <Route path="/support" element={<HelpPage />} />
            <Route path="/tickets" element={<Tickets />}>
              <Route index element={<AllTickets />} />
              <Route path=":ticketId" element={<Ticket />} />
            </Route>
            <Route path="/loginActivities" element={<LoginActivitiesTable />} />
            <Route path="/team-cards" element={<ManagersCards />} />
            <Route path="/cards" element={<CoordinatorCards />} />
            <Route path="/ttl-trainees" element={<TtlTraineeDashboard />} />
          </Routes>
        </Suspense>
      </main>
    </PrivateRoute>
  );
}

export default DashRoutes;

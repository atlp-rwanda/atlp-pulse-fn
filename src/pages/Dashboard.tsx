import React from 'react';
import CheckRole from '../utils/CheckRoles';
import SupAdDashboard from './SupAdDashboard';
import AdminDashboard from './AdminDashboard';
import TraineeDashboard from './TraineeDashboard';
import ManagerCard from '../components/ManagerCard';

export function Dashboard() {
  return (
    <>
      <CheckRole roles={['superAdmin']}>
        <SupAdDashboard />
      </CheckRole>
      <CheckRole roles={['admin']}>
        <AdminDashboard />
      </CheckRole>
      <CheckRole roles={['trainee']}>
        <TraineeDashboard />
      </CheckRole>
      <CheckRole roles={['user']}>
        <TraineeDashboard />
      </CheckRole>
      <CheckRole roles={['coordinator']}>
        <AdminDashboard />
      </CheckRole>
      <CheckRole roles={['manager']}>
        <ManagerCard />
      </CheckRole>
    </>
  );
}

export default Dashboard;

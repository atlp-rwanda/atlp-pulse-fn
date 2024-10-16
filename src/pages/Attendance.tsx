import React from 'react';
import CheckRole from '../utils/CheckRoles';

const TraineeAttendanceTracker = React.lazy(
  () => import('../pages/TraineeAttendanceTracker'),
);
const TraineeAttendance = React.lazy(
  () => import('../components/TraineeAttendance'),
);
function Attendance() {
  return (
    <>
      <CheckRole roles={['coordinator', 'ttl']}>
        <TraineeAttendanceTracker />
      </CheckRole>
      <CheckRole roles={['trainee']}>
        <TraineeAttendance />
      </CheckRole>
    </>
  );
}
export default Attendance;

import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import TeamChart from '../Chart/TeamChart';
import ProgressBar from '../Chart/ProgressBar';
import UsersChart from '../Chart/usersChart';

interface TeamData {
  ttlName?: string;
  teams?: string;
  organization?: string;
  program?: string;
  phase?: string;
  cohort?: string;
  activeUsers?: number;
  droppedUsers?: number;
  rating?: number;
}

interface TeamDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedteam: TeamData | null;
  Teams?: any;
}

// Add this near the top of your TeamDetailsModal component
const loginStats = {
  daily: {
    passed: 60,
    failed: 40,
    total: '200k',
  },
  weekly: {
    passed: 75,
    failed: 25,
    total: '1.2M',
  },
  monthly: {
    passed: 85,
    failed: 15,
    total: '5M',
  },
};

function TeamDetailsModal({
  isOpen,
  onClose,
  selectedteam,
  Teams,
}: TeamDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'logins'>('overview');
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>(
    'daily',
  );
  const [showAttendanceSummary, setShowAttendanceSummary] = useState(false);

  const handleAttendanceSummaryEnter = () => setShowAttendanceSummary(true);
  const handleAttendanceSummaryLeave = () => setShowAttendanceSummary(false);

  if (!isOpen) return null;

  const CurrentTeam = Teams?.filter(
    (items: any) => items?.name === selectedteam?.teams,
  );

  const average =
    (parseInt(CurrentTeam[0]?.avgRatings?.quality, 2) +
      parseInt(CurrentTeam[0]?.avgRatings?.quantity, 2) +
      parseInt(CurrentTeam[0]?.avgRatings?.professional_Skills, 2)) /
    3;

  const activeMembers = CurrentTeam[0]?.members.filter(
    (item: any) => item.status.status !== 'suspended',
  );
  const droppedMembers = CurrentTeam[0]?.members.filter(
    (item: any) => item.status.status === 'suspended',
  );
  function mapLoginsByDate(team: any) {
    if (!team || !Array.isArray(team[0].members)) {
      throw new Error('Invalid team object');
    }
    const loginCounts: any = {};
    team[0].members.forEach((member: any) => {
      const activities = member.profile?.activity;

      if (Array.isArray(activities)) {
        activities.forEach((activity) => {
          const rawDate = activity.date;
          const timestamp = parseInt(rawDate, 10);
          if (!Number.isNaN(timestamp)) {
            const loginDate = new Date(timestamp).toISOString().split('T')[0];
            if (!loginCounts[loginDate]) {
              loginCounts[loginDate] = { success: 0, failed: 0 };
            }
            if (activity.failed === 1) {
              loginCounts[loginDate].failed += 1;
            } else {
              loginCounts[loginDate].success += 1;
            }
          }
        });
      }
    });
    return loginCounts;
  }
  const loginsbyDate = mapLoginsByDate(CurrentTeam);
  const orgName = localStorage.getItem('orgName');

  function calculateLoginPercentages(data: any) {
    let totalSuccess = 0;
    let totalFailed = 0;

    // Sum up all successes and failures
    Object.values(data).forEach(({ success, failed }: any) => {
      totalSuccess += success;
      totalFailed += failed;
    });

    // Calculate percentages
    const total = totalSuccess + totalFailed;
    const successPercentage = total > 0 ? (totalSuccess / total) * 100 : 0;
    const failedPercentage = total > 0 ? (totalFailed / total) * 100 : 0;

    return {
      successPercentage: successPercentage.toFixed(2),
      failedPercentage: failedPercentage.toFixed(2),
      totalLogins: total,
    };
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600"
        style={{ scrollbarWidth: 'thin' }}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex gap-10">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`text-xl font-semibold ${
                activeTab === 'overview'
                  ? 'text-primary'
                  : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('logins')}
              className={`text-xl font-semibold ${
                activeTab === 'logins'
                  ? 'text-primary'
                  : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              Logins
            </button>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Close
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['TTL Name', CurrentTeam[0]?.ttl?.profile?.name || 'Sostene'],
                  ['Team Name', selectedteam?.teams || 'Team Name'],
                  ['Organization', selectedteam?.organization || orgName],
                  [
                    'Program',
                    CurrentTeam[0]?.cohort?.program?.name || 'Program Name',
                  ],
                  [
                    'Phase',
                    CurrentTeam[0]?.cohort?.phase?.name || 'Current Phase',
                  ],
                  ['Cohort', CurrentTeam[0]?.cohort.name || 'Current Cohort'],
                ].map(([label, value], idx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={idx} className="space-y-2">
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {label}
                    </label>
                    <p className="text-gray-800 dark:text-gray-200">{value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mt-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Users
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Active Members
                      </p>
                      <p className="text-xl font-semibold text-green-600 dark:text-green-400">
                        {activeMembers?.length || '0'}
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Dropped Members
                      </p>
                      <p className="text-xl font-semibold text-red-600 dark:text-red-400">
                        {droppedMembers?.length || '0'}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="space-y-2 relative"
                  onMouseEnter={handleAttendanceSummaryEnter}
                  onMouseLeave={handleAttendanceSummaryLeave}
                >
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Attendance Summary
                    <FaAngleDown
                      className={`ml-2 inline-block transition-transform ${
                        showAttendanceSummary ? 'rotate-180' : ''
                      }`}
                    />
                  </label>
                  {showAttendanceSummary && (
                    <div className="absolute z-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-[200px] border border-gray-200 dark:border-gray-700">
                      <p className="text-gray-800 dark:text-gray-200">
                        Quality: {CurrentTeam[0]?.avgRatings?.quality || 0}
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        Quantity: {CurrentTeam[0]?.avgRatings?.quality || 0}
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        Professionalism:{' '}
                        {CurrentTeam[0]?.avgRatings?.professional_Skills || 0}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Rating Summary
                  </label>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {average || '0'} / 5.0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'logins' && (
            <div className="flex flex-col items-center w-full">
              <div className="w-[24rem] py-2 flex justify-center items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => setTimeframe('daily')}
                  className={`w-[7rem] px-4 py-1 border border-gray-600 rounded-full transition-colors ${
                    timeframe === 'daily'
                      ? 'bg-primary text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Daily
                </button>
                <button
                  type="button"
                  onClick={() => setTimeframe('weekly')}
                  className={`w-[7rem] px-4 py-1 border border-gray-600 rounded-full transition-colors ${
                    timeframe === 'weekly'
                      ? 'bg-primary text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Weekly
                </button>
                <button
                  type="button"
                  onClick={() => setTimeframe('monthly')}
                  className={`w-[7rem] px-4 py-1 border border-gray-600 rounded-full transition-colors ${
                    timeframe === 'monthly'
                      ? 'bg-primary text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Monthly
                </button>
              </div>
              <div className="mt-6 w-full px-4 flex flex-col justify-center">
                <div className="flex w-full justify-center gap-5">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Logins Attempt Status
                  </h3>
                  <ProgressBar
                    passedPercentage={parseInt(
                      calculateLoginPercentages(loginsbyDate).successPercentage,
                      10,
                    )}
                    failedPercentage={parseInt(
                      calculateLoginPercentages(loginsbyDate).failedPercentage,
                      10,
                    )}
                  />
                </div>
                <p className="mt-4 ml-[12%]">
                  Total Logins:{' '}
                  <span className="font-bold text-primary">
                    {' '}
                    {calculateLoginPercentages(loginsbyDate).totalLogins}
                  </span>
                </p>
              </div>

              <TeamChart
                timeframe={timeframe}
                CurrentTeam={CurrentTeam}
                loginsbyDate={loginsbyDate}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamDetailsModal;

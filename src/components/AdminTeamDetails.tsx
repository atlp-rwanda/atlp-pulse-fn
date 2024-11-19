import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import TeamChart from '../Chart/TeamChart';
import ProgressBar from '../Chart/ProgressBar';

interface TeamData {
  ttlName?: string;
  team?: string;
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
  teamData: TeamData | null;
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
  teamData,
}: TeamDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'logins'>('overview');
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>(
    'daily',
  );
  const [showAttendanceSummary, setShowAttendanceSummary] = useState(false);

  const handleAttendanceSummaryEnter = () => setShowAttendanceSummary(true);
  const handleAttendanceSummaryLeave = () => setShowAttendanceSummary(false);

  if (!isOpen) return null;

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
                  ['TTL Name', teamData?.ttlName || 'Sostene'],
                  ['Team Name', teamData?.team || 'Team Name'],
                  [
                    'Organization',
                    teamData?.organization || 'Organization Name',
                  ],
                  ['Program', teamData?.program || 'Program Name'],
                  ['Phase', teamData?.phase || 'Current Phase'],
                  ['Cohort', teamData?.cohort || 'Current Cohort'],
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
                        {teamData?.activeUsers || '0'}
                      </p>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Dropped Members
                      </p>
                      <p className="text-xl font-semibold text-red-600 dark:text-red-400">
                        {teamData?.droppedUsers || '0'}
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
                        Quality: 1.5
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        Quantity: 2.3
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        Professionalism: 3.1
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
                      {teamData?.rating || '4.5'} / 5.0
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
                    passedPercentage={loginStats[timeframe].passed}
                    failedPercentage={loginStats[timeframe].failed}
                  />
                </div>
                <p className="mt-4 ml-[12%]">
                  Total Logins:{' '}
                  <span className="font-bold text-primary">
                    {' '}
                    {loginStats[timeframe].total}
                  </span>
                </p>
              </div>

              <TeamChart timeframe={timeframe} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamDetailsModal;

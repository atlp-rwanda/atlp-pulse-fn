import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import UsersChart from '../Chart/usersChart';
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

function TeamDetailsModal({
  isOpen,
  onClose,
  teamData,
}: TeamDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'logins'>('overview');
  const [showAttendanceSummary, setShowAttendanceSummary] = useState(false);

  const handleAttendanceSummaryEnter = () => setShowAttendanceSummary(true);
  const handleAttendanceSummaryLeave = () => setShowAttendanceSummary(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div
        className="w-full  max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600"
        style={{ scrollbarWidth: 'thin' }}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          {/* Tabs for switching */}
          <div className="flex gap-10">
            <button
              onClick={() => setActiveTab('overview')}
              className={`text-xl font-semibold ${
                activeTab === 'overview'
                  ? 'text-blue-600'
                  : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('logins')}
              className={`text-xl font-semibold ${
                activeTab === 'logins'
                  ? 'text-blue-600'
                  : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              Logins
            </button>
          </div>
          <button
            type="button"
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
              {/* Overview Content */}
              <div className="grid grid-cols-2 gap-4">
                {/* Display team details */}
                {[
                  ['TTL Name', teamData?.ttlName || 'Sostene'],
                  ['Team Name', teamData?.team || 'Team Name'],
                  ['Organization', teamData?.organization || 'Organization Name'],
                  ['Program', teamData?.program || 'Program Name'],
                  ['Phase', teamData?.phase || 'Current Phase'],
                  ['Cohort', teamData?.cohort || 'Current Cohort'],
                ].map(([label, value], idx) => (
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
                      className={`ml-2 inline-block ${
                        showAttendanceSummary ? 'rotate-180' : ''
                      }`}
                    />
                  </label>
                  {showAttendanceSummary && (
                    <div className="absolute z-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-[200px]">
                      <p>Quality: 1.5</p>
                      <p>Quantity: 2.3</p>
                      <p>Professionalism: 3.1</p>
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
  <div className="flex border border-gray-200 dark:border-gray-700 flex-col items-center w-full">
    {/* Logins Content */}
    <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
      Logins
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      Daily login statistics.
    </p>
    {/* Include the chart */}
    <UsersChart />
  </div>
)}


        </div>
      </div>
    </div>
  );
}

export default TeamDetailsModal;

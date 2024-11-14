import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import TeamDetailsModal from './AdminTeamDetails';

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
  logins: string;
  users: number;
}

const DashboardTableDesign: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dummyData: TeamData[] = [
    { 
      team: 'Nova', 
      logins: '2.4k', 
      users: 45,
      ttlName: 'Sostene',
      organization: 'Tech Corp',
      program: 'Atlp1',
      phase: 'Phase 2',
      cohort: 'Cohort 3',
      activeUsers: 42,
      droppedUsers: 3,
      rating: 4.8
    },
    { 
      team: 'Fighters', 
      logins: '1.8k', 
      users: 32,
      ttlName: 'Sostene',
      organization: 'Andela',
      program: 'Atlp1',
      phase: 'Phase 1',
      cohort: 'Cohort 2',
      activeUsers: 30,
      droppedUsers: 2,
      rating: 4.5
    },
    { 
      team: 'Bitcrafters', 
      logins: '1.2k', 
      users: 28,
      ttlName: 'Jacqueline',
      organization: 'Irembo',
      program: 'Data Science',
      phase: 'Phase 3',
      cohort: 'Cohort 1',
      activeUsers: 25,
      droppedUsers: 3,
      rating: 4.6
    },
    { 
      team: 'Team1', 
      logins: '3.1k', 
      users: 52,
      ttlName: 'Alice',
      organization: 'Tech Corp',
      program: 'Cloud Computing',
      phase: 'Phase 2',
      cohort: 'Cohort 4',
      activeUsers: 48,
      droppedUsers: 4,
      rating: 4.7
    },
    { 
      team: 'Team2', 
      logins: '0.9k', 
      users: 19,
      ttlName: 'Bob',
      organization: 'Tech',
      program: 'DevOps',
      phase: 'Phase 1',
      cohort: 'Cohort 2',
      activeUsers: 17,
      droppedUsers: 2,
      rating: 4.4
    }
  ];

  const handleViewClick = (team: TeamData) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Team Analytics</h2>
        <div className="flex gap-3">
          <input
            type="search"
            placeholder="Search teams..."
            className="px-4 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <th className="w-[30%] px-6 py-4 text-left">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Team Name
                  </div>
                </th>
                <th className="w-[25%] px-6 py-4 text-left">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Logins
                  </div>
                </th>
                <th className="w-[25%] px-6 py-4 text-left">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Users
                  </div>
                </th>
                <th className="w-[20%] px-10 py-4 text-left">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Actions
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((row, index) => (
                <tr 
                  key={index}
                  className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{row.team}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-600 dark:text-gray-300">{row.logins}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                      {row.users}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      onClick={() => handleViewClick(row)}
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 rounded-full hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
                    >
                      <FaEye className="text-xs" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing 5 of 12 teams
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Previous
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      <TeamDetailsModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        teamData={selectedTeam}
      />
    </div>
  );
};

export default DashboardTableDesign;
/* eslint-disable */
/* istanbul ignore file */

import React, { useState, useEffect } from 'react';
import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client';
import { IoIosAddCircleOutline, IoIosSearch } from 'react-icons/io';
import { FaCheck, FaFilter } from 'react-icons/fa';
import { LuHourglass } from 'react-icons/lu';
import { BsPersonFillX } from 'react-icons/bs';
import { toast } from 'react-toastify';
import InvitationCard from '../components/InvitationCard';
import DataTableStats from '../components/InvitationTable';
import InvitationModal from './invitationModalComponet';
import { GET_INVITATIONS_STATISTICS_QUERY } from '../Mutations/invitationStats';
import InvitationCardSkeleton from '../Skeletons/InvitationCardSkeleton';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import {
  CANCEL_INVITATION,
  DELETE_INVITATION,
  UPDATE_INVITATION,
} from '../Mutations/invitationMutation';
import Button from '../components/Buttons';
import {
  GET_ALL_INVITATIONS,
  GET_INVITATIONS,
  GET_ROLES_AND_STATUSES,
} from '../queries/invitation.queries';
import { isValid } from 'date-fns';

interface Invitee {
  email: string;
  role: string;
}

interface Invitationn {
  invitees: Invitee[];
  status: string;
  id: string;
}

function Invitation() {
  const [invitationStats, setInvitationStats] = useState<any>(null);
  const [invitations, setInvitations] = useState<Invitationn[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [totalInvitations, setTotalInvitations] = useState<number>(0);
  const [cancelInviteeModel, setCancelInviteeModel] = useState(false);
  const [cancelInvitation, setCancelInvitation] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterLoading, setFilterLoading] = useState<boolean>(true);
  const [filterRange, setFilterRange] = useState<string>('Last 7 days');
  const [customRange, setCustomRange] = useState({
    startDate: '',
    endDate: '',
  });
  const { t }: any = useTranslation();
  const removeInviteeMod = () => {
    const newState = !removeInviteeModel;
    setRemoveInviteeModel(newState);
  };

  const cancelInviteeMod = () => {
    const newState = !cancelInviteeModel;
    setCancelInviteeModel(newState);
  };

  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [removeInviteeModel, setRemoveInviteeModel] = useState(false);
  const [deleteInvitation, setDeleteInvitation] = useState('');
  const [updateInviteeModel, setUpdateInviteeModel] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [selectedInvitationId, setSelectedInvitationId] = useState('');
  const [filterVariables, setFilterVariables] = useState({
    role: '',
    status: '',
  });

  const organizationToken = localStorage.getItem('orgToken');
  
  const parseRange = (range: string) => {
    switch (range) {
      case 'Last 7 days':
        return 7;
      case 'Last 30 days':
        return 30;
      case 'Last 90 days':
        return 90;
      default:
        return null;
    }
  };

  // Fetch invitation statistics
  const {
    loading: isLoading,
    data: queryData,
    refetch: refreshData,
  } = useQuery(GET_INVITATIONS_STATISTICS_QUERY, {
    variables: {
      orgToken: organizationToken,
      daysRange:
        filterRange !== 'Custom range' ? parseRange(filterRange) : null,
      startDate: filterRange === 'Custom range' ? customRange.startDate : null,
      endDate: filterRange === 'Custom range' ? customRange.endDate : null,
    },
    skip: !organizationToken,
    fetchPolicy: 'network-only',
    onError: (error) => toast.error('Error fetching data'),
  });

  // Fetch all invitations
  const {
    data,
    loading: queryLoading,
    error: queryError,
    refetch,
  } = useQuery(GET_ALL_INVITATIONS, {
    variables:{
      orgToken: organizationToken,
    },
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (invitationStats) {
      setSelectedStatus(invitationStats); // Set the fetched status as the default value
    }
  }, [invitationStats]);

  // Set email and role when modal opens
  useEffect(() => {
    if (data && data.getAllInvitations) {
      const invitation = data.getAllInvitations.invitations.find(
        (inv: Invitationn) => inv.id === selectedInvitationId,
      );

      if (invitation && invitation.invitees.length > 0) {
        setEmail(invitation.invitees[0].email);
        setRole(invitation.invitees[0].role);
      }
    }
  }, [data, selectedInvitationId]);

  useEffect(() => {
    if (isLoading) {
      setFilterLoading(true);
    } else {
      setFilterLoading(false);
    }
    if (queryData) {
      refreshData();
      setInvitationStats(queryData.getInvitationStatistics);
    }
  }, [queryData, refreshData, isLoading]);

  // Handle the range change
  const handleRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRange(e.target.value);
  };

  // Handle custom date range
  const handleCustomRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomRange((prev) => ({ ...prev, [name]: value }));
  };

  if (!organizationToken) {
    return <p>Organization token not found. Please log in.</p>;
  }

  const updateInviteeMod = () => {
    const newState = !updateInviteeModel;
    setUpdateInviteeModel(newState);
  };

  const [
    fetchInvitations,
    { data: searchData, loading: searchLoading, error: searchError },
  ] = useLazyQuery(GET_INVITATIONS, {
    variables: {
       query: searchQuery,
       orgToken: organizationToken,
       },
    fetchPolicy: 'network-only',
  });

  const [
    filterInvitations,
    { data: filterData, loading: filterLoad, error: filterError },
  ] = useLazyQuery(GET_ROLES_AND_STATUSES, {
    variables:filterVariables,
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (filterVariables.role || filterVariables.status) {
      filterInvitations();
    }
  }, [filterVariables, filterInvitations]);

  // Consolidated effect to handle query and search data
  useEffect(() => {
    if (queryLoading || searchLoading || filterLoad) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    if (queryError) {
      setError(queryError.message);
    } else if (searchError) {
      setError(searchError.message);
    } else if (filterError) {
      setError(filterError.message);
    } else if (
      searchData &&
      Array.isArray(searchData.getInvitations.invitations)
    ) {
      setInvitations(searchData.getInvitations.invitations);
    } else if (filterData && filterData.filterInvitations) {
      setInvitations(filterData.filterInvitations.invitations);
      setTotalInvitations(filterData.filterInvitations.totalInvitations);
    } else if (data && data.getAllInvitations) {
      setInvitations(data.getAllInvitations.invitations);
      setTotalInvitations(data.getAllInvitations.totalInvitations);
    }
  }, [
    data,
    searchData,
    queryLoading,
    searchLoading,
    queryError,
    searchError,
    filterData,
    filterLoad,
    filterError,
  ]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setError('Search query cannot be empty');
      return;
    }

    setInvitations([]);
    setError(null);
    setLoading(false);

    fetchInvitations({ variables: { query: searchQuery } });
  };

  const handleFilter = () => {
    if (!selectedRole && !selectedStatus) {
      toast.info('Please select role or status.');
      return;
    }

    setInvitations([]);
    setError(null);
    setLoading(false);

    setFilterVariables({ role: selectedRole, status: selectedStatus });
  };

  const toggleOptions = (row: string) => {
    setSelectedRow(selectedRow === row ? null : row);
  };

  const disabledSearch = !searchQuery.trim();

  interface EmailInputProps {
    email: string;
    setEmail: (email: string) => void;
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail); // Update validation state
    return isValidEmail;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail); // Validate on change
  };

  // Defining invitation table
  let content;
  const capitalizeStrings = (str: string): string => {
    if (!str) return '';
    if (str === 'ttl') {
      return 'TTL';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const columns = [
    { Header: t('email'), accessor: 'email' },
    { Header: t('role'), accessor: 'role' },
    {
      Header: t('Status'),
      accessor: 'status',
      Cell: ({ row }: any) => {
        return (
          <div
            className={
              'font-serif items-center' +
              (invitations?.length > 0 ? ' flex' : ' hidden')
            }
          >
            {row.original.Status}
          </div>
        );
      },
    },
    {
      Header: t('action'),
      accessor: '',
      Cell: ({ row }: any) => (
        <div className="static">
          <div className="static inline-block">
            <Icon
              icon="entypo:dots-three-vertical"
              width="25"
              cursor="pointer"
              color="#9e85f5"
              onClick={() => toggleOptions(row.id)}
            />
            {selectedRow === row.id && (
              <div className="dropdown absolute right-4 mt-2 w-64 bg-light-bg max-h-30 dark:bg-dark-bg border border-gray-300 shadow-md z-50 p-4 rounded-lg overflow-hidden">
                <>
                  <div className="mb-4"></div>
                  <div className="mb-4">
                    <div
                      className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        updateInviteeMod();
                        setSelectedInvitationId(row.original.id);
                        toggleOptions(row.original.email);
                      }}
                    >
                      <Icon
                        icon="el:file-edit-alt"
                        className="mr-2"
                        width="38"
                        height="38"
                        cursor="pointer"
                        color="#9e85f5"
                      />
                      <div>
                        <span className="font-bold">Update</span>
                        <br />
                        Update invitation
                      </div>
                    </div>
                  </div>

                  {/* Conditionally render Cancel button */}
                  {row.original.Status === 'Pending' && (
                    <div className="mb-4">
                      <div
                        className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer"
                        onClick={() => {
                          cancelInviteeMod();
                          setCancelInvitation(row.original.id);
                        }}
                      >
                        <Icon
                          icon="mdi:cancel"
                          width="40"
                          height="40"
                          cursor="pointer"
                          color="#9e85f5"
                        />
                        <div>
                          <span className="font-bold">Cancel</span>
                          <br />
                          Cancel invitation
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <div
                      className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer"
                      onClick={() => {
                        removeInviteeMod();
                        setDeleteInvitation(row.original.id);
                        toggleOptions(row.original.email);
                      }}
                    >
                      <Icon
                        icon="mdi:close-circle-outline"
                        width="40"
                        height="40"
                        cursor="pointer"
                        color="#9e85f5"
                      />
                      <div>
                        <span className="font-bold">Delete</span>
                        <br />
                        Delete invitation
                      </div>
                    </div>
                  </div>

                  {row.original.Status === 'Pending' && (
                    <div className="mb-4">
                      <div className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md cursor-pointer">
                        <Icon
                          icon="mdi:arrow-up-circle"
                          width="40"
                          height="40"
                          cursor="pointer"
                          color="#9e85f5"
                        />
                        <div>
                          <span className="font-bold">Resend</span>
                          <br />
                          Resend invitation
                        </div>
                      </div>
                    </div>
                  )}
                  <div></div>
                </>
              </div>
            )}
          </div>
        </div>
      ),
    },
  ];

  const datum: any = [];
  if (invitations && invitations.length > 0) {
    invitations.forEach((invitation) => {
      invitation.invitees?.forEach((data: any) => {
        let entry: any = {};
        entry.email = data.email;
        entry.role = capitalizeStrings(data.role);
        entry.Status = capitalizeStrings(invitation.status);
        entry.id = invitation.id;
        datum.push(entry);
      });
    });
  }
  if (loading || searchLoading || filterLoad) {
    content = (
      <DataTableStats
        data={invitations?.length > 0 ? datum : []}
        columns={columns}
        loading={loading}
        error={error}
      />
    );
  } else if (error || searchError || filterError) {
    content = (
      <DataTableStats
        data={invitations?.length > 0 ? datum : []}
        columns={columns}
        loading={loading}
        error={error}
      />
    );
  } else {
    content = (
      <>
        <DataTableStats
          data={invitations?.length > 0 ? datum : []}
          columns={columns}
          loading={loading}
          error={error}
        />
      </>
    );
  }

  const [DeleteInvitation] = useMutation(DELETE_INVITATION, {
    variables: {
      invitationId: deleteInvitation,
    },
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success(data.deleteInvitation.message);
        refetch();
        removeInviteeMod();
      }, 1000);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 500);
    },
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    refetch();
    refreshData();
  };
  const [UpdateInvitation] = useMutation(UPDATE_INVITATION, {
    variables: {
      invitationId: selectedInvitationId,
      orgToken: organizationToken,
      newEmail: email || undefined,
      newRole: role || undefined,
      newStatus: selectedStatus || undefined,
    },
    onCompleted: () => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success('Invitation updated successfully!');
        refetch();
        updateInviteeMod();
      }, 1000);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(`Failed to update invitation`);
      }, 500);
    },
  });

  const [CancelInvitation] = useMutation(CANCEL_INVITATION, {
    variables: {
      id: cancelInvitation,
      orgToken: organizationToken,
    },
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success(
          data.cancelInvitation.message || 'Invitation canceled successfully.',
        );
        refetch();
        cancelInviteeMod();
      }, 1000);
    },
    onError: (err) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.error(err.message);
      }, 500);
    },
  });
  return (
    <div className="w-full">
      {/* Header and Invite Button */}
      <div className="flex flex-row sm:flex-rowmd:flex-row md:justify-between items-center md:gap-4 mb-8 ">
        <div className="flex w-full items-center justify-between">
          <h1 className="font-bold lg:text-xl sm:text-lg xm:text-lg w-full">
            Invitation Stats
          </h1>
          <div className="flex flex-col  w-full p-3 items-start">
            <div className="flex w-full items-center rounded-md shadow-sm bg-white dark:bg-[#020917] border-2 border-black dark:border-white h-8  md:hidden ">
              <FaFilter className="text-[#9e85f5] ml-1" />
              {/* Select Dropdown for Small Screens */}
              <select
                value={filterRange}
                onChange={handleRangeChange}
                className="bg-transparent dark:bg-[#020917] text-gray-700 dark:text-white outline-none text-sm py-1"
              >
                <option value="Select range">Select range</option>
                <option value="Last 7 days">Last 7 days</option>
                <option value="Last 30 days">Last 30 days</option>
                <option value="Last 90 days">Last 90 days</option>
                <option value="Custom range">Custom range</option>
              </select>
            </div>
            {filterRange === 'Custom range' && (
              <div className="flex  flex-col items-start gap-1 mt-2 md:hidden">
                {/* <label htmlFor="from">From:</label> */}
                <input
                  type="date"
                  name="startDate"
                  value={customRange.startDate}
                  onChange={handleCustomRangeChange}
                  className="border border-gray-300 rounded-md px-3 py-1 h-10 dark:bg-dark-bg dark:text:text-white"
                />
                {/* <label htmlFor="to">To:</label> */}
                <input
                  type="date"
                  name="endDate"
                  value={customRange.endDate}
                  onChange={handleCustomRangeChange}
                  className="border border-gray-300 rounded-md px-3 py-1 h-10 dark:bg-dark-bg dark:text:text-white"
                />
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={handleOpenModal}
            className="lg:bg-[#9e85f5] bg-none lg:text-white text-[#9e85f5] text-lg lg:text-lg rounded-md h-10 flex items-center justify-center w-[27%]"
          >
            <IoIosAddCircleOutline className="w-6 h-6 md:w-8 md:h-8 md:mr-2 xm:w-8 xm:h-8 sm:w-10 sm:h-10" />
            <span className="hidden lg:block">Invite User</span>
          </button>
        </div>
      </div>
      <InvitationModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {/* Container for Select and Cards */}
      <div className="flex flex-col border-blue-500 md:flex-row gap-4 md:gap-5 mb-10">
        {/* Invitation Cards */}

        <div className="grid grid-row-2 gap-4 sm:gap-4 mb-4 w-full lg:flex sm:grid grid-cols-2">
          {filterLoading ? (
            <>
              <InvitationCardSkeleton />
              <InvitationCardSkeleton />
              <InvitationCardSkeleton />
            </>
          ) : (
            <>
              <InvitationCard
                icon={
                  <FaCheck className="text-[#9e85f5] w-8 h-8 md:w-12 md:h-12 " />
                }
                status="ACCEPTED"
                time={filterRange}
                staticNumber={invitationStats?.acceptedInvitationsCount || 0}
                percentage={
                  `${invitationStats?.getAcceptedInvitationsPercentsCount?.toFixed(
                    1,
                  )}%` || '0'
                }
              />
              <InvitationCard
                icon={
                  <LuHourglass className="text-[#9e85f5] w-8 h-8 md:w-12 md:h-12" />
                }
                status="PENDING"
                time={filterRange}
                staticNumber={invitationStats?.pendingInvitationsCount || 0}
                percentage={
                  `${invitationStats?.getPendingInvitationsPercentsCount?.toFixed(
                    1,
                  )}%` || '0'
                }
              />
              <InvitationCard
                icon={
                  <LuHourglass className="text-[#9e85f5] w-8 h-8 md:w-12 md:h-12" />
                }
                status="CANCELLED"
                time={filterRange}
                staticNumber={invitationStats?.cancelledInvitationsCount || 0}
                percentage={
                  `${invitationStats?.getCancelledInvitationsPercentsCount?.toFixed(
                    1,
                  )}%` || '0'
                }
              />
              <InvitationCard
                icon=""
                status="INVITATIONS"
                time={filterRange}
                staticNumber={invitationStats?.totalInvitations || 0}
                percentage={
                  invitationStats?.totalInvitations === 0 ? '0%' : '100%'
                }
              />
            </>
          )}
        </div>

        <div className="flex flex-col  w-fit p-3 items-start">
          {/* Select Dropdown for Desktop */}
          <div className=".flex  items-center rounded-md shadow-sm px-3 py-2 bg-white dark:bg-[#020917] border-2 border-black dark:border-white space-x-2 h-8 hidden md:flex ">
            <FaFilter className="text-[#9e85f5]" />
            <select
              value={filterRange}
              onChange={handleRangeChange}
              className="bg-transparent dark:bg-[#020917] text-gray-700 dark:text-white outline-none "
            >
              <option value="Select range">Select range</option>
              <option value="Last 7 days">Last 7 days</option>
              <option value="Last 30 days">Last 30 days</option>
              <option value="Last 90 days">Last 90 days</option>
              <option value="Custom range">Custom range</option>
            </select>
          </div>
          {filterRange === 'Custom range' && (
            <div className="md:flex  flex-col items-start gap-1 hidden ">
              <label htmlFor="from">From:</label>
              <input
                type="date"
                name="startDate"
                value={customRange.startDate}
                onChange={handleCustomRangeChange}
                className="border border-gray-300 rounded-md px-3 py-2 h-10 dark:bg-dark-bg dark:text:text-white"
              />
              <label htmlFor="to">To:</label>
              <input
                type="date"
                name="endDate"
                value={customRange.endDate}
                onChange={handleCustomRangeChange}
                className="border border-gray-300 rounded-md px-3 py-2 h-10 dark:bg-dark-bg dark:text:text-white"
              />
            </div>
          )}
        </div>
      </div>
      {/* Search Section */}
      <div>
        <h1 className="font-bold text-xl md:text-2xl mb-4">
          Search for Invitation Status
        </h1>
        <p className="mb-6 text-sm md:text-base">
          The “Search bar” below enables you to effortlessly check the status of
          sent invitations.
          <br />
          Simply type in the email or name of the invitee in the search bar to
          instantly retrieve real-time updates.
        </p>

        {/* Search form */}
        <div className="flex flex-row md:flex-row gap-12 md:gap-8 md:w-[80%]  ">
          <div className="relative flex-1 text-black ">
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by email, role or status of the invitation."
              className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full dark:text:text-black hover:border-[#7258ce] h-10  "
            />
            <IoIosSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
          <button
            type="button"
            disabled={disabledSearch}
            onClick={handleSearch}
            className="bg-[#9e85f5] text-white text-lg md:text-xl rounded-md h-10 flex items-center justify-center  md:w-[10%] p-0 sm:p-5 xm:p-5"
          >
            Search
          </button>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex flex-wrap items-center space-x-4 space-y-2 md:space-y-0">
          <p className="w-full md:w-auto">
            Or filter by{' '}
            <span>
              <b>ROLE: </b>
            </span>
          </p>
          <span className="w-full md:w-auto">
            <select
              className="w-full max-w-xs md:w-auto dark:text-white dark:text:text-white bg-transparent text-gray-700 outline-none border border-gray-300 rounded px-2 py-1"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">-</option>
              <option value="trainee">trainee</option>
              <option value="ttl">ttl</option>
              <option value="coordinator">coordinator</option>
              <option value="manager">manager</option>
              <option value="admin">admin</option>
            </select>
          </span>
          <span className="w-full md:w-auto">
            {' '}
            or <b>STATUS: </b>
          </span>
          <span className="w-full md:w-auto">
            <select
              className="w-full max-w-xs md:w-auto dark:text-white bg-transparent text-gray-700 outline-none border border-gray-300 rounded px-2 py-1"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="">-</option>
              <option value="pending">pending</option>
              <option value="accepted">accepted</option>
              <option value="denied">denied</option>
              <option value="cancelled">cancelled</option>
            </select>
          </span>
          <button
            type="button"
            // disabled={disabled}
            onClick={handleFilter}
            className="w-full max-w-xs md:w-auto bg-[#9e85f5] text-white text-lg md:text-xl rounded-md h-10 flex items-center justify-center px-4 py-2"
          >
            Filter
          </button>
        </div>
        {/* Table view */}
        {content}
      </div>
      {/* =========================== Start::  DeleteInvitee Model =============================== */}
      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4 ${
          removeInviteeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {t('Delete Invitation')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  {t('Are you sure you want to Delete this invitation?')}
                </h3>
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeModel2"
                  variant="info"
                  size="sm"
                  style="w-[40%] md:w-1/4 text-sm font-sans"
                  onClick={() => removeInviteeMod()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  data-testid="removeMemberFromCohort"
                  style="w-[40%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);
                    if (deleteInvitation) {
                      DeleteInvitation();
                    } else {
                      toast.error('Please select the trainee again ');
                    }
                  }}
                  loading={buttonLoading}
                >
                  {t('Proceed')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== Start::  CancelInvitee Model =============================== */}
      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4 ${
          cancelInviteeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {t('Cancel Invitation')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  {t('Are you sure you want to Cancel this invitation?')}
                </h3>
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeModel2"
                  variant="info"
                  size="sm"
                  style="w-[40%] md:w-1/4 text-sm font-sans"
                  onClick={() => cancelInviteeMod()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  data-testid="removeMemberFromCohort"
                  style="w-[40%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);
                    if (cancelInvitation) {
                      CancelInvitation();
                    } else {
                      toast.error('Please select the trainee again ');
                    }
                  }}
                  loading={buttonLoading}
                >
                  {t('Proceed')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== Start::  UpdateInvitee Model =============================== */}{' '}
      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
          updateInviteeModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white">
              {t('Update Invitation')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3">
              {/* Email Input Field */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold dark:text-white mb-2"
                  htmlFor="email"
                >
                  {t('Email')}
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-3 py-2 border rounded-md ${
                    !isValid ? 'border-red-500' : 'dark:bg-dark-input'
                  } dark:text-black`}
                  value={email || ''} // Ensure email is not undefined
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!isValid && (
                  <p className="text-red-500 text-xs mt-1">
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              {/* Role Input Field */}
              <div className="mb-4">
                <label
                  className="block text-sm font-bold dark:text-white mb-2"
                  htmlFor="role"
                >
                  {t('Role')}
                </label>
                <select
                  id="role"
                  className="w-full px-3 py-2 border rounded-md dark:text-black"
                  value={role} // Pre-populate the select field with the current role value
                  onChange={(e) => setRole(e.target.value)} // Update the role state on change
                >
                  <option value="trainee">{t('Trainee')}</option>
                  <option value="ttl">{t('TTL')}</option>
                  <option value="admin">{t('Admin')}</option>
                  <option value="coordinator">{t('Coordinator')}</option>
                </select>
              </div>
              {/* Buttons */}
              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeModel2"
                  variant="info"
                  size="sm"
                  style="w-[40%] md:w-1/4 text-sm font-sans"
                  onClick={() => setUpdateInviteeModel(false)}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  data-testid="updateInvitation"
                  style="w-[40%] md:w-1/4 text-sm font-sans"
                  onClick={() => {
                    setButtonLoading(true);
                    if (email || role || selectedStatus) {
                      UpdateInvitation(); // Call the mutation to update invitation
                    } else {
                      toast.error('Please provide email, role, or status');
                      setButtonLoading(false);
                    }
                  }}
                  loading={buttonLoading}
                >
                  {t('Update')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invitation;

function setIsValid(isValidEmail: boolean) {
  throw new Error('Function not implemented.');
}

/* eslint-disable */
/* istanbul ignore file */

import React, { useState, useEffect, useRef } from 'react';
import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client';
import { IoIosAddCircleOutline, IoIosSearch } from 'react-icons/io';
import { FaCheck, FaFilter } from 'react-icons/fa';
import { LuHourglass } from 'react-icons/lu';
import { BsPersonFillX } from 'react-icons/bs';
import { toast } from 'react-toastify';
import InvitationCard from '../components/InvitationCard';
import InvitationModal from './invitationModalComponet';
import { GET_INVITATIONS_STATISTICS_QUERY } from '../queries/invitationStats.queries';
import InvitationCardSkeleton from '../Skeletons/InvitationCardSkeleton';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import {
  CANCEL_INVITATION,
  DELETE_INVITATION,
  UPDATE_INVITATION,
  RESEND_INVITATION
} from '../Mutations/invitationMutation';
import Button from '../components/Buttons';
import {
  GET_ALL_INVITATIONS,
  GET_INVITATIONS,
  GET_ROLES_AND_STATUSES,
} from '../queries/invitation.queries';
import { isValid } from 'date-fns';
import InvitationTable from '../components/InvitationTable'
import usePagination from '../hook/UsePagination'

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
  const [sortBy,setSortBy]=useState<number>(-1)
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
  const [resendInvitationModel,setResendInvatationModel]= useState(false)
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
  const[invitationToResend,setInvitationToResend]=useState('')
  const [updateInviteeModel, setUpdateInviteeModel] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedSort,setSelectedSort] = useState<string>('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [selectedInvitationId, setSelectedInvitationId] = useState('');
  const [filterVariables, setFilterVariables] = useState({
    role: '',
    status: '',
  });


  const [isFiltering, setIsFiltering] = useState(false);
  const { limit, skip, pagination, onPaginationChange } = usePagination(3);

  const[filterDisabled,setFilterDisabled]=useState<boolean>(true)
  const modalRef = useRef<any>(null);
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
      sortBy:sortBy,
      limit,
      offset: skip
    },
    fetchPolicy: 'network-only',
    skip: isFiltering
  });

  const [
    fetchInvitations,
    { data: searchData, loading: searchLoading, error: searchError },
  ] = useLazyQuery(GET_INVITATIONS, {
    variables: {
     query: searchQuery,
     orgToken: organizationToken,
     limit,
     offset: skip,
     sortBy:sortBy
    },
    fetchPolicy: 'network-only',
  });

  const [
    filterInvitations,
    { data: filterData, loading: filterLoad, error: filterError, refetch: refetchFiltered },
  ] = useLazyQuery(GET_ROLES_AND_STATUSES, {
    variables:{
      ...filterVariables,
      limit,
      offset: skip,
    },
    fetchPolicy: 'network-only',
  });

  const isSearching = searchQuery && searchQuery.trim() !== "";

// Refetch data on pagination change and filter clearing
useEffect(() => {
  if (isSearching) {
    fetchInvitations({
      variables: {
        query: searchQuery,
        orgToken: organizationToken,
        sortBy: sortBy,
        limit,
        offset: skip,
      },
    });
  } else if (isFiltering) {
    refetchFiltered({
      ...filterVariables,
      limit,
      offset: skip,
    });
  } else {
    refetch({
      orgToken: organizationToken,
      sortBy: sortBy,
      limit,
      offset: skip,
    });
  }
}, [limit, skip, refetch, refetchFiltered, fetchInvitations, isFiltering, filterVariables, searchQuery, isSearching]);

 
  useEffect(() => {
    if (invitationStats) {
      setSelectedStatus(''); // Set the fetched status as the default value
    }
  }, [invitationStats]);

  // Set email and role when modal opens
  useEffect(() => {
    let invitation;
  
    if (isSearching && searchData?.getInvitations) {
      invitation = searchData.getInvitations.invitations.find(
        (inv) => inv.id === selectedInvitationId
      );
    } else if (isFiltering && filterData?.filterInvitations) {
      invitation = filterData.filterInvitations.invitations.find(
        (inv) => inv.id === selectedInvitationId
      );
    } else if (data && data.getAllInvitations) {
      invitation = data.getAllInvitations.invitations.find(
        (inv) => inv.id === selectedInvitationId
      );
    }
  
    if (invitation && invitation.invitees.length > 0) {
      setEmail(invitation.invitees[0].email);
      setRole(invitation.invitees[0].role);
    }
  }, [data, searchData, filterData, selectedInvitationId, isSearching, isFiltering]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedRow(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);

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
    }
  }, [
    queryLoading,
    searchLoading,
    queryError,
    searchError,
    filterLoad,
    filterError,
  ]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      if (data && data.getAllInvitations) {
        setInvitations(data.getAllInvitations.invitations);
        setTotalInvitations(data.getAllInvitations.totalInvitations);
      }
    }

    setInvitations([]);
    setError(null);
    setLoading(false);

    onPaginationChange({ pageSize: pagination.pageSize, pageIndex: 0 });

    fetchInvitations({ variables: { query: searchQuery } });
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);


  useEffect(() => {
    if (selectedRole || selectedStatus) {
      setFilterDisabled(false);
    } else {
      setFilterDisabled(true);
    }
  }, [selectedRole, selectedStatus]);

const handleRoleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
  const role=e.target.value
  setSelectedRole(role);
}

const handleStatusChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
  const status=e.target.value
    setSelectedStatus(status)
}

// Handle filter application
const handleFilter = () => {
  if (!selectedRole && !selectedStatus) {
    toast.info('Please select role or status.');
    return;
  }

  onPaginationChange({ pageSize: pagination.pageSize, pageIndex: 0 });

  setIsFiltering(true);

  setFilterVariables({
    role: selectedRole,
    status: typeof selectedStatus === 'string' ? selectedStatus : '',
  });

  filterInvitations({
    variables: {
      role: selectedRole || "",
      status: selectedStatus || "",
      orgToken: organizationToken,
      limit,
      offset: skip,
    },
  });
};


useEffect(() => {
  if (selectedRole || selectedStatus) {
    setFilterDisabled(false);
  } else {
    setFilterDisabled(true);
  }
}, [selectedRole, selectedStatus]);

  const toggleOptions = (row: string) => {
    setSelectedRow(selectedRow === row ? null : row);
  };

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
    {
      id: "email",
      header: t('email'),
      accessor: (row) => row.email,
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      id: "role",
      header: t('role'),
      accessor: (row) => row.role,
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      id: "Status",
      header: t('Status'),
      accessor: (row) => row.Status,
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      id: "Action",
      header: t('Action'),
      cell: ({ row }: any) => (
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
              <div 
              ref={modalRef}
              className= 'absolute z-50 w-64 p-4 mt-2 transform -translate-y-[80%] overflow-hidden border border-gray-300 rounded-lg shadow-md dropdown right-4 bg-light-bg max-h-30 dark:bg-dark-bg'>
              
              <>
                  <div className="mb-4"></div>

                  { row.original.Status === 'Pending' &&<div className="mb-4">
                    <div
                      className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
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
                    }

                  {/* Conditionally render Cancel button */}
                  {row.original.Status === 'Pending' && (
                    <div className="mb-4">
                      <div
                        className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
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
                      className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
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
                      <div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => {
                        setResendInvatationModel(true);
                        setInvitationToResend(row.original.id);
                        toggleOptions(row.original.email);
                      }}>
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

const currentInvitations = isSearching && searchData?.getInvitations
  ? searchData.getInvitations.invitations
  : isFiltering && filterData?.filterInvitations
  ? filterData.filterInvitations.invitations
  : data?.getAllInvitations?.invitations;

const currentInvitationsTotal = isSearching && searchData?.getInvitations
  ? searchData.getInvitations.totalInvitations
  : isFiltering && filterData?.filterInvitations
  ? filterData.filterInvitations.totalInvitations
  : data?.getAllInvitations?.totalInvitations;

if (currentInvitations && currentInvitations.length > 0) {
  currentInvitations.forEach((invitation) => {
    invitation.invitees?.forEach((invitee: any) => {
      let entry: any = {};
      entry.email = invitee.email;
      entry.role = capitalizeStrings(invitee.role);
      entry.Status = capitalizeStrings(invitation.status);
      entry.id = invitation.id;
      datum.push(entry);
    });
  });
}

  if (loading || searchLoading || filterLoad) {
    content = (
      <InvitationTable
        data={datum.length > 0 ? datum : []}
        cols={columns}
        loading={loading || searchLoading}
        rowCount={currentInvitationsTotal}
        onPaginationChange={onPaginationChange}
        pagination={pagination}
      />
    );
  } else if (error || searchError || filterError) {
    content = (
      <InvitationTable
        data={datum.length > 0 ? datum : []}
        cols={columns}
        loading={loading || searchLoading}
        rowCount={currentInvitationsTotal}
        onPaginationChange={onPaginationChange}
        pagination={pagination}
      />
    );
  } else {
    content = (
      <>
        <InvitationTable
          data={datum.length > 0 ? datum : []}
          cols={columns}
          loading={loading || searchLoading}
          rowCount={currentInvitationsTotal}
          onPaginationChange={onPaginationChange}
          pagination={pagination}
        />
      </>
    );
  }

  const [ResendInvitation]=useMutation(RESEND_INVITATION,{
    variables:{
      invitationId:invitationToResend,
      orgToken:organizationToken 
    },
      onCompleted:(data)=>{
        setTimeout(()=>{
          setButtonLoading(false);
          toast.success(data.resendInvitation.message);
          refetch();
          refreshData();
          setResendInvatationModel(false)
        })
      }
      ,onError:(error)=>{
        setTimeout(() => {
          setButtonLoading(false);
          toast.error(error.message);
        }, 500);
      }

  })

  const [DeleteInvitation] = useMutation(DELETE_INVITATION, {
    variables: {
      invitationId: deleteInvitation,
    },
    onCompleted: (data) => {
      setTimeout(() => {
        setButtonLoading(false);
        toast.success(data.deleteInvitation.message);
        refetch();
        refreshData();
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
        refreshData();
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


  useEffect(()=>{
      refetch()
   
  },[sortBy])
const  changeSortQuery=(e:React.ChangeEvent<HTMLSelectElement>)=>{
let sortBy=parseInt(e.target.value)
setSortBy(sortBy)

}

  return (
    <div className="w-full ">
      {/* Header and Invite Button */}
      <div className="flex flex-row items-center mb-8 sm:flex-rowmd:flex-row md:justify-between md:gap-4 ">
        <div className="flex items-center justify-between w-full">
          <h1 className="w-full font-bold lg:text-xl sm:text-lg xm:text-lg">
            Invitation Stats
          </h1>
          <div className="flex flex-col items-start w-full p-3">
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
              <div className="flex flex-col items-start gap-1 mt-2 md:hidden">
                {/* <label htmlFor="from">From:</label> */}
                <input
                  type="date"
                  name="startDate"
                  value={customRange.startDate}
                  onChange={handleCustomRangeChange}
                  className="h-10 px-3 py-1 border border-gray-300 rounded-md dark:bg-dark-bg dark:text:text-white"
                />
                {/* <label htmlFor="to">To:</label> */}
                <input
                  type="date"
                  name="endDate"
                  value={customRange.endDate}
                  onChange={handleCustomRangeChange}
                  className="h-10 px-3 py-1 border border-gray-300 rounded-md dark:bg-dark-bg dark:text:text-white"
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
            <span className="hidden lg:block text-sm">Invite User</span>
          </button>
        </div>
      </div>
      <InvitationModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {/* Container for Select and Cards */}
      <div className="flex flex-col gap-4 mb-10 border-blue-500 md:flex-row md:gap-5">
        {/* Invitation Cards */}

        <div className="grid w-full grid-cols-2 gap-4 mb-4 grid-row-2 sm:gap-4 lg:flex sm:grid">
          {filterLoading ? (
            <>
              <InvitationCardSkeleton />
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

        <div className="flex flex-col items-start p-3 w-fit">
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
            <div className="flex-col items-start hidden gap-1 md:flex ">
              <label htmlFor="from">From:</label>
              <input
                type="date"
                name="startDate"
                value={customRange.startDate}
                onChange={handleCustomRangeChange}
                className="h-10 px-3 py-2 border border-gray-300 rounded-md dark:bg-dark-bg dark:text:text-white"
              />
              <label htmlFor="to">To:</label>
              <input
                type="date"
                name="endDate"
                value={customRange.endDate}
                onChange={handleCustomRangeChange}
                className="h-10 px-3 py-2 border border-gray-300 rounded-md dark:bg-dark-bg dark:text:text-white"
              />
            </div>
          )}
        </div>
      </div>
      {/* Search Section */}
      <div>
        <h1 className="mb-4 text-xl font-bold md:text-2xl">
          Search for Invitation Status
        </h1>
        <p className="mb-6 text-sm md:text-base">
          The “Search bar” below enables you to effortlessly check the status of
          sent invitations.
          <br />
          Simply type in the email, or role of the invitee or status of the invitation in the search bar to
          instantly retrieve real-time updates.
        </p>

        {/* Search form */}
        <div className='block lg:flex justify-between items-center'>
            <div className="flex flex-row md:flex-row gap-2 md:gap-2 md:w-[50%] w-full">
              <div className="relative flex-1 text-black">
                <input
                  type="text"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by email, role or status of the invitation."
                  className="border border-gray-300 outline-none bg-transparent rounded-md pl-10 pr-4 py-1 w-full dark:text-white hover:border-[#7258ce] dark:text:text-white sm:text-normal text-md dark:bg-[#04122F]"
                />
                <IoIosSearch
                  className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2"
                  size={20}
                />
              </div>
              <div>
                <select
                    className="w-full max-w-xs sm:px-2 px-0 py-1 text-gray-700 bg-transparent border border-gray-300 rounded outline-none md:w-auto dark:text-white dark:text:text-white dark:bg-[#04122F]"
                    value={sortBy}
                    onChange={changeSortQuery}
                  >
                    <option value="">Sort by</option>
                    <option value="-1">Newest</option>
                    <option value="1">Oldest</option>
                </select>
              </div>
            </div>
         
          <div className="">
          <div className="flex items-center sm:space-x-4 space-x-2 mt-3 lg:mt-0">
              <span className="w-full md:w-auto">
                <select
                  className="w-full max-w-xs px-2 py-1 text-gray-700 bg-transparent border border-gray-300 rounded outline-none md:w-auto dark:text-white dark:text:text-white dark:bg-[#04122F]"
                  value={selectedRole}
                  onChange={handleRoleChange}
                >
                  <option value="">Role</option>
                  <option value="trainee">trainee</option>
                  <option value="ttl">ttl</option>
                  <option value="coordinator">coordinator</option>
                  <option value="manager">manager</option>
                  <option value="admin">admin</option>
                </select>
              </span>
              <span className="w-full md:w-auto">
                <select
                  className="w-full max-w-xs px-2 py-1 text-gray-700 bg-transparent border border-gray-300 rounded outline-none md:w-auto dark:text-white dark:bg-[#04122F]"
                  value={selectedStatus}
                  onChange={ handleStatusChange}
                >
                  <option value="">Status</option>
                  <option value="pending">pending</option>
                  <option value="accepted">accepted</option>
                  <option value="cancelled">cancelled</option>
                </select>
              </span> 
              <button
                      type="button"
                      disabled={filterDisabled}
                      onClick={handleFilter}
                      className={`w-full max-w-xs md:w-auto bg-[#9e85f5] text-white text-lg md:text-xl rounded-md flex items-center justify-center sm:px-4 px-0 py-1 
                        ${filterDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                    >
                      Filter
              </button>
              </div>
            </div>
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
                  className="block mb-2 text-sm font-bold dark:text-white"
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
                  <p className="mt-1 text-xs text-red-500">
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              {/* Role Input Field */}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold dark:text-white"
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
      {/* resend invitation modal */}

      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center  px-4 ${
          resendInvitationModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {t('Resend Invitation')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
                  {t('Are you sure you want to Resend this invitation?')}
                </h3>
              </div>

              <div className="flex justify-between w-full">
                <Button
                  data-testid="removeModel2"
                  variant="info"
                  size="sm"
                  style="w-[40%] md:w-1/4 text-sm font-sans"
                  onClick={() => setResendInvatationModel(false)}
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
                    if (invitationToResend) {
                      ResendInvitation();
                    } else {
                      toast.error('No invitation selected');
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
    </div>
  );
}

export default Invitation;

function setIsValid(isValidEmail: boolean) {
  throw new Error('Function not implemented.');
}

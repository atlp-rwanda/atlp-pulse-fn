import React, { useState, useEffect } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { IoIosAddCircleOutline, IoIosSearch } from 'react-icons/io';
import { FaCheck, FaFilter } from 'react-icons/fa';
import { LuHourglass } from 'react-icons/lu';
import { BsPersonFillX } from 'react-icons/bs';
import { toast } from 'react-toastify';
import InvitationCard from '../components/InvitationCard';
import InvitationTable from '../components/InvitationTable';
import InvitationModal from './invitationModalComponet';
import { GET_INVITATIONS_STATISTICS_QUERY } from '../Mutations/invitationStats';
import InvitationCardSkeleton from '../Skeletons/InvitationCardSkeleton';

const GET_ALL_INVITATIONS = gql`
  query AllInvitations($limit: Int, $offset: Int) {
    getAllInvitations(limit: $limit, offset: $offset) {
      invitations {
        invitees {
          email
          role
        }
        id
        status
      }
      totalInvitations
    }
  }
`;

const GET_INVITATIONS = gql`
  query GetInvitations($query: String!, $limit: Int, $offset: Int) {
    getInvitations(query: $query, limit: $limit, offset: $offset) {
      invitations {
        invitees {
          email
          role
        }
        id
        status
      }
    }
  }
`;

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
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterLoading, setFilterLoading] = useState<boolean>(true);
  const [filterRange, setFilterRange] = useState<string>('Last 7 days');
  const [customRange, setCustomRange] = useState({
    startDate: '',
    endDate: '',
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
    onError: (error) => {
      toast.error('testtes111');
    },
  });
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
  }, [queryData, refreshData]);

  const handleRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterRange(e.target.value);
  };

  const handleCustomRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomRange((prev) => ({ ...prev, [name]: value }));
  };
  if (!organizationToken) {
    return <p>Organization token not found. Please log in.</p>;
  }

  const {
    data,
    loading: queryLoading,
    error: queryError,
    refetch,
  } = useQuery(GET_ALL_INVITATIONS, {
    variables: { limit: pageSize, offset: pageIndex * pageSize },
  });

  const [
    fetchInvitations,
    { data: searchData, loading: searchLoading, error: searchError },
  ] = useLazyQuery(GET_INVITATIONS, {
    variables: { limit: pageSize, offset: pageIndex * pageSize },
  });

  useEffect(() => {
    if (queryLoading || searchLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }

    if (queryError) {
      setError(queryError.message);
    } else if (searchError) {
      setError(searchError.message);
    } else if (
      searchData &&
      Array.isArray(searchData.getInvitations.invitations)
    ) {
      setInvitations(searchData.getInvitations.invitations);
    } else if (data && data.getAllInvitations) {
      setInvitations(data.getAllInvitations.invitations);
      setTotalInvitations(data.getAllInvitations.totalInvitations);
    }
  }, [data, searchData, queryLoading, searchLoading, queryError, searchError]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setError('Search query cannot be empty');
      return;
    }

    setInvitations([]);
    setError(null);
    setLoading(false);

    fetchInvitations({
      variables: {
        query: searchQuery,
        limit: pageSize,
        offset: pageIndex * pageSize,
      },
    });
  };

  const gotoPage = (pageNumber: number) => {
    setPageIndex(pageNumber);
  };

  const nextPage = () => {
    if (pageIndex < Math.floor(totalInvitations / pageSize)) {
      setPageIndex(pageIndex + 1);
    }
  };

  const previousPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const canNextPage = pageIndex < Math.floor(totalInvitations / pageSize);
  const canPreviousPage = pageIndex > 0;
  const pageOptions = Array.from(
    { length: Math.ceil(totalInvitations / pageSize) },
    (_, i) => i + 1,
  );

  // Defining invitation table
  let content;

  if (loading || searchLoading) {
    content = <p>Loading...</p>;
  } else if (error || searchError) {
    content = <p>Error occurred &quot;{error || searchError?.message}&quot;</p>;
  } else if (invitations.length === 0) {
    content = <p>No invitation found.</p>;
  } else {
    content = (
      <>
        <InvitationTable
          invitations={invitations}
          pageIndex={pageIndex}
          pageSize={pageSize}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          pageOptions={pageOptions}
          setPageSize={setPageSize}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </>
    );
  }

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
                time="Last 7 days"
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
                time="Last 7 days"
                staticNumber={invitationStats?.pendingInvitationsCount || 0}
                percentage={
                  `${invitationStats?.getPendingInvitationsPercentsCount?.toFixed(
                    1,
                  )}%` || '0'
                }
              />

              <InvitationCard
                icon=""
                status="INVITATIONS"
                time="Last 7 days"
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
      <div className="px-4">
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
          <div className="relative flex-1 ">
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
            onClick={handleSearch}
            className="bg-[#9e85f5] text-white text-lg md:text-xl rounded-md h-10 flex items-center justify-center  md:w-[10%] p-0 sm:p-5 xm:p-5"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table view */}
      {content}
    </div>
  );
}

export default Invitation;

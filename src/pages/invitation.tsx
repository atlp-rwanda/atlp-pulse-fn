import React, { useState, useEffect } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { IoIosAddCircleOutline, IoIosSearch } from 'react-icons/io';
import { FaCheck, FaFilter } from 'react-icons/fa';
import { LuHourglass } from 'react-icons/lu';
import { BsPersonFillX } from 'react-icons/bs';
import InvitationCard from '../components/InvitationCard';
import InvitationTable from '../components/InvitationTable';
import InvitationModal from './invitationModalComponet';
import { GET_INVITATIONS_STATISTICS_QUERY } from '../Mutations/invitationStats';
import { toast } from 'react-toastify';

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
  const organizationToken = localStorage.getItem('orgToken');
  
      const { loading: isLoading, data: queryData, refetch: refreshData } = useQuery(
        GET_INVITATIONS_STATISTICS_QUERY,
        {
          variables: {
            orgToken: organizationToken
          },
          skip: !organizationToken,
          fetchPolicy: 'network-only',
          onError: (error) => {
            toast.error("testtes111");
          },
        },
      );
      useEffect(() => {
        if (queryData) {
            refreshData();
          setInvitationStats(queryData.getInvitationStatistics);
        }
      }, [queryData, refreshData]);
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
    <div className="sm:w-screen bg-red lg:w-full">
      {/* Header and Invite Button */}
      <div className="flex flex-row md:flex-row md:justify-between items-center gap-36 md:gap-4 mb-8 ">
        <h1 className="font-bold text-xl md:text-xl">Invitation Stats</h1>
        <button
          type="button"
          onClick={handleOpenModal}
          className="bg-[#9e85f5] text-white text-lg md:text-lg rounded-md h-10 flex items-center justify-center w-[15%]"
        >
          <IoIosAddCircleOutline className="w-6 h-6 md:w-8 md:h-8 md:mr-2" />
          <span className="hidden md:block">Invite User</span>
        </button>
      </div>

      <InvitationModal isOpen={isModalOpen} onClose={handleCloseModal} />
      {/* Container for Select and Cards */}
      <div className="flex flex-col border-blue-500 md:flex-row gap-4 md:gap-5 mb-10">
        {/* Select Dropdown for Small Screens */}
        <div className="flex items-center rounded-md shadow-sm px-3 py-2 bg-white border-2 border-black space-x-2 h-8 mb-4 md:hidden w-[90%] ">
          <FaFilter className="text-[#9e85f5]" />
          <select className="bg-transparent text-gray-700 outline-none ">
            <option value="Select range">Select range</option>
            <option value="Last 7 days">Last 7 days</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last 90 days">Last 90 days</option>
            <option value="Custom range">Custom range</option>
          </select>
        </div>

        {/* Invitation Cards */}
        <div className="flex flex-wrap gap-4 md:gap-16 mb-4 md:mb-0 w-full">
          <InvitationCard
            icon={
              <FaCheck className="text-[#9e85f5] w-8 h-8 md:w-12 md:h-12 " />
            }
            status="ACCEPTED"
            time="Last 7 days"
            staticNumber={invitationStats?.acceptedInvitationsCount || 0}
            percentage={
                invitationStats?.getAcceptedInvitationsPercentsCount?.toFixed(
                    1,
                 ) + '%' || '0'
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
                invitationStats?.getPendingInvitationsPercentsCount?.toFixed(
                     1,
                ) + '%' || '0' 
                        }
          />
         
          <InvitationCard
            icon=""
            status="INVITATIONS"
            time="Last 7 days"
            staticNumber={invitationStats?.totalInvitations || 0}
            percentage="100%"
          />
        </div>

        {/* Select Dropdown for Desktop */}
        <div className=".flex  items-center rounded-md shadow-sm px-3 py-2 bg-white border-2 border-black space-x-2 h-8 hidden md:flex md:ml-8 ">
          <FaFilter className="text-[#9e85f5]" />
          <select className="bg-transparent text-gray-700 outline-none ">
            <option value="Select range">Select range</option>
            <option value="Last 7 days">Last 7 days</option>
            <option value="Last 30 days">Last 30 days</option>
            <option value="Last 90 days">Last 90 days</option>
            <option value="Custom range">Custom range</option>
          </select>
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
            className="bg-[#9e85f5] text-white text-lg md:text-xl rounded-md h-10 flex items-center justify-center  md:w-[10%]"
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


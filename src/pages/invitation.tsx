import React from 'react';
import { IoIosAddCircleOutline, IoIosSearch } from 'react-icons/io';
import { FaCheck, FaFilter } from 'react-icons/fa';
import { LuHourglass } from 'react-icons/lu';
import { BsPersonFillX } from 'react-icons/bs';
import InvitationCard from '../components/InvitationCard';

function Invitation() {
  return (
    <div className=" sm:w-screen bg-red lg:w-full">
      {/* Header and Invite Button */}
      <div className="flex flex-row md:flex-row md:justify-between items-center gap-36 md:gap-4 mb-8 ">
        <h1 className="font-bold text-xl md:text-2xl">Invitation Stats</h1>
        <button
          type="button"
          className="bg-[#9e85f5] text-white text-lg md:text-xl rounded-md h-10 flex items-center justify-center w-[15%]"
        >
          <IoIosAddCircleOutline className="w-6 h-6 md:w-8 md:h-8 md:mr-2" />
          <span className="hidden md:block">Invite User</span>
        </button>
      </div>

      {/* Container for Select and Cards */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 mb-10">
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
        <div className="grid grid-cols-2 gap-4 md:gap-4 mb-4 w-full md:grid md:grid-cols-4 ">
          <InvitationCard
            icon={
              <FaCheck className="text-[#9e85f5] w-8 h-8 md:w-12 md:h-12 " />
            }
            status="ACCEPTED"
            time="Last 7 days"
            staticNumber="75"
            percentage="60%"
          />
          <InvitationCard
            icon={
              <LuHourglass className="text-[#9e85f5] w-8 h-8 md:w-12 md:h-12" />
            }
            status="PENDING"
            time="Last 7 days"
            staticNumber="10"
            percentage="30%"
          />
          <InvitationCard
            icon={
              <BsPersonFillX className="text-[#9e85f5] w-8 h-8 md:w-12 md:h-12" />
            }
            status="DENIED"
            time="Last 7 days"
            staticNumber="44"
            percentage="30%"
          />
          <InvitationCard
            icon=""
            status="INVITATIONS"
            time="Last 7 days"
            staticNumber="129"
            percentage="30%"
          />
        </div>

        {/* Select Dropdown for Desktop */}
        <div className="flex items-center rounded-md shadow-sm px-3 py-2 bg-white border-2 border-black space-x-2 h-8 hidden md:flex md:ml-8 ">
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
              placeholder="Search by email or name of the invitee"
              className="border border-gray-300 rounded-3xl pl-10 pr-4 py-2 w-full hover:border-[#7258ce] h-10  "
            />
            <IoIosSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
          <button
            type="button"
            className="bg-[#9e85f5] text-white text-lg md:text-xl rounded-md h-10 flex items-center justify-center lg:w-[10%] p-2"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Invitation;

import React from 'react';
import InvitationCard from '../components/InvitationCard';
import { IoIosAddCircleOutline, IoIosSearch } from "react-icons/io";
import { FaCheck, FaFilter } from "react-icons/fa";
import { LuHourglass } from "react-icons/lu";
import { BsPersonFillX } from "react-icons/bs";

// Function declaration for the component
function Invitation() {
    return (
        <>
            {/* Header and Invite Button */}
            <div className='flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-8 mb-8'>
                <h1 className="font-bold text-xl md:text-2xl">
                    Invitation Stats
                </h1>
                <button
                    type="button"
                    className="bg-[#7258ce] text-white text-lg md:text-xl rounded-md h-12 px-4 flex items-center justify-center"
                >
                    <IoIosAddCircleOutline className='w-6 h-6 md:w-8 md:h-8 md:mr-2' />
                    <span className='hidden md:block'>Invite User</span>
                </button>
            </div>

            {/* Invitation Cards and Select */}
            <div className='flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mb-10'>
                {/* Mobile view: Select dropdown */}
                <div className="md:hidden flex items-center rounded-md shadow-sm px-3 py-2 bg-white border-2 border-black space-x-2 mb-4">
                    <FaFilter className="text-[#7258ce]" />
                    <select
                        className="bg-transparent text-gray-700 outline-none w-full"
                    >
                        <option value="Select range">Select range</option>
                        <option value="Last 7 days">Last 7 days</option>
                        <option value="Last 30 days">Last 30 days</option>
                        <option value="Last 90 days">Last 90 days</option>
                        <option value="Custom range">Custom range</option>
                    </select>
                </div>

                {/* Cards */}
                <div className='flex flex-wrap gap-4 md:gap-8 w-full md:w-4/5 mb-4 md:mb-0'>
                    <InvitationCard icon={<FaCheck className='text-[#7258ce] w-8 h-8 md:w-12 md:h-12' />} status="ACCEPTED" time="Last 7 days" staticNumber="75" percentage="60" />
                    <InvitationCard icon={<LuHourglass className='text-[#7258ce] w-8 h-8 md:w-12 md:h-12' />} status="PENDING" time="Last 7 days" staticNumber="10" percentage="30" />
                    <InvitationCard icon={<BsPersonFillX className='text-[#7258ce] w-8 h-8 md:w-12 md:h-12' />} status="DENIED" time="Last 7 days" staticNumber="44" percentage="30" />
                    <InvitationCard icon="" status="INVITATIONS" time="Last 7 days" staticNumber="129" percentage="30" />
                </div>

                {/* Desktop view: Select dropdown */}
                <div className="hidden md:flex items-center rounded-md shadow-sm px-3 py-2 bg-white border-2 border-black space-x-2 w-full md:w-1/5">
                    <FaFilter className="text-[#7258ce]" />
                    <select
                        className="bg-transparent text-gray-700 outline-none w-full"
                    >
                        <option value="Select range">Select range</option>
                        <option value="Last 7 days">Last 7 days</option>
                        <option value="Last 30 days">Last 30 days</option>
                        <option value="Last 90 days">Last 90 days</option>
                        <option value="Custom range">Custom range</option>
                    </select>
                </div>
            </div>

            {/* Search Section */}
            <div>
                <h1 className="font-bold text-xl md:text-2xl mb-4">
                    Search for Invitation Status
                </h1>
                <p className="mb-6 text-sm md:text-base">
                    The “Search bar” below enables you to effortlessly check the status of sent invitations.<br />
                    Simply type in the email or name of the invitee in the search bar to instantly retrieve real-time updates.
                </p>

                {/* Search form */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            id="search"
                            placeholder="Search by email or name of the invitee"
                            className="border border-gray-300 rounded-3xl pl-10 pr-4 py-2 w-full hover:border-[#7258ce]"
                        />
                        <IoIosSearch
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            size={20}
                        />
                    </div>
                    <button
                        type="button"
                        className="bg-[#7258ce] text-white text-lg md:text-xl rounded-md h-12 px-4 flex items-center justify-center"
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    );
}

export default Invitation;





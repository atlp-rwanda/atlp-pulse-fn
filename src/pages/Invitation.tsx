import React from 'react';
import InvitationCard from '../components/InvitationCard';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { LuHourglass } from "react-icons/lu";
import { BsPersonFillX } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Invitation = () => {
    return (
        <>
            {/* Header and Invite Button */}
            <div className='flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-8 mb-8'>
                <h1 className="font-bold text-xl">
                    Invitation Stats
                </h1>
                <button
                    type="button"
                    className="bg-[#7258ce] text-white text-xl rounded-md h-12 px-4 md:w-44 flex items-center justify-center"
                >
                    <IoIosAddCircleOutline className='w-8 h-8 md:mr-2' />
                    <span className='hidden md:block'>Invite User</span>
                </button>
            </div>

            {/* Invitation Cards and Select */}
            <div className='inline-flex gap-5' >
                <div className='flex flex-wrap gap-16 mb-10'>
                    <InvitationCard icon={<FaCheck className='text-[#7258ce] w-12 h-12' />} status="ACCEPTED" time="Last 7 days" staticNumber="75" percentage="60" />
                    <InvitationCard icon={<LuHourglass className='text-[#7258ce] w-12 h-12' />} status="PENDING" time="Last 7 days" staticNumber="10" percentage="30" />
                    <InvitationCard icon={<BsPersonFillX className='text-[#7258ce] w-12 h-12' />} status="DENIED" time="Last 7 days" staticNumber="44" percentage="30" />
                    <InvitationCard icon="" status="INVITATIONS" time="Last 7 days" staticNumber="129" percentage="30" />
                </div>
                <div className="inline-flex items-center rounded-md shadow-sm px-3 py-2 bg-white space-x-2 h-8 ml-8 ">
                    <FaFilter className="text-[#7258ce]" />
                    <select

                        className=" bg-transparent text-gray-700 cursor-pointer"
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
                <h1 className="font-bold text-xl mb-4">
                    Search for Invitation Status
                </h1>
                <p className="mb-6 w-1.7/3">
                    The “Search bar” below enables you to effortlessly check the status of sent invitations.<br />
                    Simply type in the email or name of the invitee in the search bar to instantly retrieve real-time updates.
                </p>

                {/* Search form */}


                <div className="flex flex-col md:flex-row gap-4 w-[80%] gap-16">
                    <div className="relative flex-1 m-auto">
                        <input
                            type="text"
                            id="search"
                            placeholder="Search by email or name of the invitee"
                            className="border border-gray-300 rounded-3xl pl-10 pr-4 py-2 w-full hover:border-[#7258ce]"
                        />
                        <IoIosSearch
                            className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-500"
                            size={20} 
                        />
                    </div>
                    <button
                        type="button"
                        className="bg-[#7258ce] text-white text-xl rounded-md h-12 px-4 md:w-44 flex items-center justify-center"
                    >
                        Search
                    </button>
                </div>

            </div>
        </>
    );
};

export default Invitation;


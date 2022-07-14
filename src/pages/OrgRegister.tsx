import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function OrgRegister() {
  return (
    <>
      <div className="bg-light-bg dark:bg-[#262E3D] h-screen flex flex-col">
        <div className="container w-[95%] lg:w-[60%] mx-auto mt-16 flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white dark:bg-[#1F2A37] px-10 py-16 md:px-16 md:py-12 rounded text-black w-full">
            <h1 className="mb-8 text-2xl sm:text-4xl text-center dark:text-white">
              Register an organization
            </h1>

            <label className="tracking-wide text-gray-700 dark:text-white font-bold text-xs mb-2">
              E-mail
            </label>
            <input
              type="text"
              className="border text-[13px] border-primary w-full p-3 dark:border-white dark:bg-[#1F2A37] rounded mb-4"
              name="email"
              placeholder="Enter the Email of the your Organization"
            />

            <label className="tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2">
              Name of your Organization
            </label>
            <input
              type="text"
              className="border border-primary text-[13px] w-full p-3 rounded mb-4 dark:border-white dark:bg-[#1F2A37]"
              name="name"
              placeholder="Enter the name of your organization"
            />

            <label className="tracking-wide text-gray-700 dark:text-white text-xs font-bold mb-2">
              Organization Description
            </label>
            <textarea
              className="border border-primary text-[13px] w-full p-3 rounded mb-4 dark:border-white dark:bg-[#1F2A37]"
              name="Describe"
              placeholder="Describe your organization"
            ></textarea>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

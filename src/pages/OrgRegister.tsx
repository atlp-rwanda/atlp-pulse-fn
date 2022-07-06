import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import Footer from '../components/Footer'
import Header from '../components/Header'


export default function ContactForm() {

    return (
        <>
            <Header />
            <div className="bg-zinc-200 h-screen flex flex-col">
                <div className="container w-[95%] lg:w-[60%] mx-auto mt-16 flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-10 py-16 md:px-16 md:py-12 rounded text-black w-full">
                        <h1 className="mb-8 text-2xl sm:text-4xl text-center">Register organization</h1>

                        <label
                            className="tracking-wide text-gray-700 font-bold text-xs mb-2">
                            E-mail
                        </label>
                        <input
                            type="text"
                            className="border border-[#148FB6] w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Enter the Email of the your Organization" />

                        <label
                            className="tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Name of your Organization
                        </label>
                        <input
                            type="text"
                            className="border border-[#148FB6] w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Enter the name of your organization" />

                        <label
                            className="tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Organization Description
                        </label>
                        <textarea
                            className="border border-[#148FB6] w-full p-3 rounded mb-4"
                            name="Describe"
                            placeholder="Describe your organization">
                        </textarea>

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-[#148FB6] text-white hover:bg-green-dark focus:outline-none my-1">
                            Register
                        </button>

                        {/* <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div> */}
                    </div>

                    {/* <div className="text-grey-dark mt-6">
                    Already have an account?
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div> */}
                </div>
            </div>
            <Footer />
        </>
    )
}
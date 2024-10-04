import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify"
import moment from "moment";
import { Link } from "react-router-dom";
import { RESPOND_TO_EVENT_INVITATION } from "../Mutations/event";

function CalendarConfirmation() {
    const { t } = useTranslation()
    const [respondToEventInvitation, { data, loading, error }] = useMutation(RESPOND_TO_EVENT_INVITATION)
    const params = new URLSearchParams(window.location.search)
    const respond = async () => {
        try {
            await respondToEventInvitation({
                variables: {
                    eventToken: params.get('eventToken') || 'missing_token',
                    authToken: localStorage.getItem('auth_token'),
                },
            })
            toast.success("Successfully responded to invitation")
        } catch (err: any) {
            toast.error(err.message)
        }
    }
    useEffect(() => {
        respond()
    }, [])
    return (
        <div className="flex items-center justify-center">
            <div className="bg-indigo-100 dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8 my-2">
                <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
                    <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
                        {t('Event Response')}
                    </h3>
                    <hr className=" bg-primary border-gray-300 my-3 w-full" />
                </div>
                {
                    loading ?
                        <div className="my-6 text-center">
                            <p className="text-sm dark:text-white">..Loading</p>
                        </div>
                        : ''
                }
                {
                    error ?
                        <div className="my-6 text-center">
                            <p className="text-sm dark:text-white">An Error Occured!</p>
                        </div>
                        : ''
                }
                {
                    data ?
                        <div className="my-6">
                            <ul className="">
                                <li className="text-sm dark:text-white w-11/12 mb-2">
                                    <span className="font-bold">Title:</span> {data?.respondToEventInvitation.title}
                                </li>
                                <li className="text-sm dark:text-white w-11/12 mb-2">
                                    <span className="font-bold">Hostname:</span> {data?.respondToEventInvitation.hostName}
                                </li>
                                <li className="text-sm dark:text-white w-11/12 mb-2">
                                    <span className="font-bold">When:</span> {moment(data?.respondToEventInvitation.start).format("YYYY-MM-DD")} to {moment(data?.respondToEventInvitation.end).format("YYYY-MM-DD")}
                                </li>
                                <li className="text-sm dark:text-white w-11/12 mb-2">
                                    <span className="font-bold">Time:</span> {data?.respondToEventInvitation.timeToStart} to {data?.respondToEventInvitation.timeToEnd}
                                </li>
                                <li className="text-sm dark:text-white flex gap-x-2 w-11/12 mb-2">
                                    <span className="font-bold">Guests:</span>
                                    <ul>
                                        {data?.respondToEventInvitation.invitees?.map((invitee: any) => (
                                            <li key={invitee.email}>{invitee.email} {invitee.status}</li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        : ''
                }
                <Link to="/calendar" className="text-white py-2 px-4 w-1/2 md:w-1/3 bg-primary rounded">Go to calendar</Link>
            </div>
        </div>

    )
}

export default CalendarConfirmation
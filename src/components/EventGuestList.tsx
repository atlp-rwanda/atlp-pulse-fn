import React from "react";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { GET_ALL_USERS_QUERY } from "../queries/manageStudent.queries";

export const getRoleColor = (role: string) => {
  switch (role) {
    case 'admin':
      return 'bg-red-500';
    case 'ttl':
      return 'bg-yellow-500';
    case 'trainee':
      return 'bg-green-500';
    case 'coordinator':
      return 'bg-blue-500';
    case 'manager':
      return 'bg-violet-500';
    default:
      return 'bg-gray-500';
  }
};

export const getRoleTitle = (role: string) => {
  switch (role) {
    case 'admin':
      return 'Admins';
    case 'ttl':
      return 'TTLs';
    case 'trainee':
      return 'Trainees';
    case 'coordinator':
      return 'Coordinators';
    case 'manager':
      return 'Managers';
    default:
      return 'Others';
  }
}

function EventGuestList({ selectedGuests, handleAddGuest }: { selectedGuests: string[], handleAddGuest: any }) {
  const { loading: guestDataLoading, data: guestData } = useQuery(
    GET_ALL_USERS_QUERY,
    {
      variables: {
        orgToken: localStorage.getItem('orgToken'),
      },
      fetchPolicy: 'network-only',
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );

  const roles = ["admin", "trainee", "ttl", "coordinator","manager"]
  const authUser = JSON.parse(localStorage.getItem('auth')!)

  return (
    <div className="dark:bg-dark-tertiary dark:text-white mt-2 p-2 border border-primary rounded-md h-40 overflow-y-auto">
      {guestDataLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {roles.map((role: string, index: number) => (
            <div key={role}>
              <h2 className=" mb-2">{getRoleTitle(role)}</h2>
              {guestData?.getAllUsers
                .filter((user: any) => user.role === role)
                .map((guest: any) => (
                  <div
                    key={guest.email}
                    className="flex items-center mb-2"
                  >
                    <input
                      type="checkbox"
                      id={`input-${guest.id}`}
                      data-testid={`input-${guest.id}`}
                      checked={selectedGuests.includes(guest.email) || guest.email === authUser?.email}
                      onChange={() => handleAddGuest(guest.email)}
                      disabled={guest.email === authUser?.email}
                      className="mr-2"
                    />
                    <label
                      htmlFor={`input-${guest.id}`}
                      className="flex items-center"
                    >
                      <span
                        id={`span-${guest.id}`}
                        className={`w-2 h-2 rounded-full ${getRoleColor(
                          guest.role,
                        )} mr-2`}
                       />
                      {guest.profile.firstName}{' '}
                      {guest.profile.lastName} ({guest.role})
                    </label>
                  </div>
                ))}
              {index === roles.length-1 ? ' ': <hr className="border-t border-gray-300 my-4" />}
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default EventGuestList
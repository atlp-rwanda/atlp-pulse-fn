import "@testing-library/jest-dom"
import { fireEvent, screen, render, waitFor, cleanup } from '@testing-library/react';
import React from 'react';
import { MockedProvider } from "@apollo/client/testing";
import { toast } from "react-toastify";
import { GET_ALL_USERS_QUERY } from "../../src/queries/manageStudent.queries";
import EventGuestList, { getRoleColor, getRoleTitle } from "../../src/components/EventGuestList";

const getAllUsersMock = [{
    request: {
        query: GET_ALL_USERS_QUERY,
    },
    variableMatcher: () => true,
    result: {
        data: {
            getAllUsers: [
                {
                    id: "1",
                    email: "testing@gmail.com",
                    role: "trainee",
                    profile: {
                        firstName: "Jack",
                        lastName: "Mukundwa"
                    }
                }
            ]
        }
    },
}]

const getAllUsersErrorMock = [{
    request: {
        query: GET_ALL_USERS_QUERY,
        variables: {
            orgToken: "mocked_org_token"
        }
    },
    error: new Error("An error occured")
}]

jest.mock('react-toastify',()=>({
    toast: {
      success: jest.fn(),
      error: jest.fn(),
    }
}))
  
beforeEach(()=>{
    localStorage.setItem('auth_token','mocked_auth_token')
    localStorage.setItem('orgToken','mocked_org_token')
    localStorage.setItem('auth', JSON.stringify({
      auth: true,
      email: "testing@gmail.com",
      firstName: "Jack",
      role: "admin",
      userId: "1"
    }))
  })
  
afterEach(()=>{
    localStorage.clear()
    cleanup()
})

describe("EventGuestList Tests", () => {
    it("renders event guest list", () => {
        const selectedGuestsMock: string[] = []
        const handleAddGuestMock = jest.fn()

        render(
        <MockedProvider mocks={getAllUsersMock} addTypename={false}>
            <EventGuestList
                selectedGuests={selectedGuestsMock}
                handleAddGuest={handleAddGuestMock} 
            />
        </MockedProvider>
        )
        waitFor(()=>{
            expect(screen.getByText("Trainees")).toBeInTheDocument()
            expect(screen.getByText("Jack")).toBeInTheDocument()
            expect(screen.getByText("Mukundwa")).toBeInTheDocument()
        })
    })
    it("should select invitees", () => {
        const selectedGuestsMock: string[] = []
        const handleAddGuestMock = jest.fn()

        render(
        <MockedProvider mocks={getAllUsersMock} addTypename={false}>
            <EventGuestList
                selectedGuests={selectedGuestsMock}
                handleAddGuest={handleAddGuestMock} 
            />
        </MockedProvider>
        )
        waitFor(()=>{
            const input1 = screen.getByTestId("input-1")
            const span1 = screen.getByTestId("span-1")
            fireEvent.click(input1)
            expect(handleAddGuestMock).toHaveBeenCalledWith("testing@gmail.com")
            expect(span1).toHaveClass("bg-green-500")
        })
    })
    it("should display errors", () => {
        const selectedGuestsMock: string[] = []
        const handleAddGuestMock = jest.fn()

        render(
        <MockedProvider mocks={getAllUsersErrorMock} addTypename={false}>
            <EventGuestList
                selectedGuests={selectedGuestsMock}
                handleAddGuest={handleAddGuestMock} 
            />
        </MockedProvider>
        )
        waitFor(()=>{
            expect(toast.error).toHaveBeenCalledWith("An error occured")
        })
    })

    it("should return the correct tailwind background class",()=>{
        expect(getRoleColor("admin")).toEqual('bg-red-500')
        expect(getRoleColor("ttl")).toEqual('bg-yellow-500')
        expect(getRoleColor("trainee")).toEqual('bg-green-500')
        expect(getRoleColor("coordinator")).toEqual('bg-blue-500')
        expect(getRoleColor("manager")).toEqual('bg-violet-500')
        expect(getRoleColor("hello")).toEqual('bg-gray-500')
    })

    it("should return the correct role title",()=>{
        expect(getRoleTitle("admin")).toEqual('Admins')
        expect(getRoleTitle("ttl")).toEqual('TTLs')
        expect(getRoleTitle("trainee")).toEqual('Trainees')
        expect(getRoleTitle("coordinator")).toEqual('Coordinators')
        expect(getRoleTitle("manager")).toEqual('Managers')
        expect(getRoleTitle("hello")).toEqual('Others')
    })
})
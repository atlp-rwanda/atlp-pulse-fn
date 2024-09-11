import "@testing-library/jest-dom"
import { screen, render, waitFor, cleanup } from '@testing-library/react';
import React from 'react';
import { MockedProvider } from "@apollo/client/testing";
import { toast } from "react-toastify";
import CalendarConfirmation from "../../src/components/CalendarConfirmation";
import { RESPOND_TO_EVENT_INVITATION } from "../../src/Mutations/event";
import { MemoryRouter } from "react-router";

const acceptedEventInvitationMock = [
    {
        request: {
            query: RESPOND_TO_EVENT_INVITATION,
            variables: {
                eventToken: "mocked_event_token",
                authToken: "mocked_auth_token",
            }
        },
        result: {
            data: {
                respondToEventInvitation: {
                    end: "2024-09-12T00:00:00.000Z",
                    hostName: "Jack",
                    start: "2024-09-12T00:00:00.000Z",
                    timeToEnd: "09:30",
                    title: "Mock Event",
                    timeToStart: "08:30",
                    invitees: [
                        {
                            email: "testing@gmail.com",
                            status: "accepted"
                        }
                    ]
                }
            }
        }
    }
]

const declinedEventInvitationMock = [
    {
        request: {
            query: RESPOND_TO_EVENT_INVITATION,
            variables: {
                eventToken: "mocked_event_token",
                authToken: "mocked_auth_token",
            }
        },
        result: {
            data: {
                respondToEventInvitation: {
                    end: "2024-09-12T00:00:00.000Z",
                    hostName: "Jack",
                    start: "2024-09-12T00:00:00.000Z",
                    timeToEnd: "09:30",
                    title: "Mock Event",
                    timeToStart: "08:30",
                    invitees: [
                        {
                            email: "testing@gmail.com",
                            status: "declined"
                        }
                    ]
                }
            }
        }
    }
]

const eventInvitationResponseErrorMock = [
    {
        request: {
            query: RESPOND_TO_EVENT_INVITATION,
            variables: {
                eventToken: "mocked_event_token",
                authToken: "mocked_auth_token",
            }
        },
        error: new Error("An error occured")
    }
]

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

describe("CalendarConfirmation Tests", () => {

    it("should render accepted event invitation", () => {
        window.location.search = "?eventToken=mocked_event_token"
        render(
            <MockedProvider mocks={acceptedEventInvitationMock}>
                <MemoryRouter>
                    <CalendarConfirmation />
                </MemoryRouter>
            </MockedProvider>
        )
        waitFor(()=>{
            expect(toast.success).toHaveBeenCalledWith("Successfully responded to invitation")
            expect(screen.getByText("Mock Event")).toBeInTheDocument()
            expect(screen.getByText("testing@gmail.com")).toBeInTheDocument()
            expect(screen.getByText("accepted")).toBeInTheDocument()
        })
    })

    it("should render declined event invitation", () => {
        window.location.search = "?eventToken=mocked_event_token"
        render(
            <MockedProvider mocks={declinedEventInvitationMock}>
                <MemoryRouter>
                    <CalendarConfirmation />
                </MemoryRouter>
            </MockedProvider>
        )
        waitFor(()=>{
            expect(toast.success).toHaveBeenCalledWith("Successfully responded to invitation")
            expect(screen.getByText("Mock Event")).toBeInTheDocument()
            expect(screen.getByText("testing@gmail.com")).toBeInTheDocument()
            expect(screen.getByText("declined")).toBeInTheDocument()
        })
    })

    it("should render error when mutation returns an error", () => {
        window.location.search = "?eventToken=mocked_event_token"
        render(
            <MockedProvider mocks={eventInvitationResponseErrorMock}>
                <MemoryRouter>
                    <CalendarConfirmation />
                </MemoryRouter>
            </MockedProvider>
        )
        waitFor(()=>{
            expect(toast.error).toHaveBeenCalledWith("An error occured")
        })
    })


})
import "@testing-library/jest-dom"
import { fireEvent, screen, render, waitFor, cleanup} from '@testing-library/react';
import React from 'react';
import Calendar from "../../src/components/Calendar";
import { MockedProvider, MockedResponse } from "@apollo/client/testing";
import { toast } from "react-toastify";
import { GET_EVENTS, ADD_EVENT, EDIT_EVENT, CANCEL_EVENT } from "../../src/Mutations/event";

const getEventsMock: MockedResponse = {
  request: {
    query: GET_EVENTS,
    variables: {
      authToken: 'mocked_auth_token'
    }
  },
  result:{
    data:{
      getEvents:[
      {
        id: "1",
        user: "1",
        end: "2024-10-02T00:00:00.000Z",
        hostName: "Jack",
        start: "2024-10-02T00:00:00.000Z",
        timeToEnd: "03:00",
        timeToStart: "04:00",
        title: "Mocked Event",
        invitees: [{email: "testing@gmail.com"},{email: "testing2@gmail.com"}]
      },
      {
        id: "2",
        user: "1",
        end: "2024-10-02T00:00:00.000Z",
        hostName: "Jones",
        start: "2024-10-02T00:00:00.000Z",
        timeToEnd: "03:00",
        timeToStart: "04:00",
        title: "Another Mocked Event",
        invitees: [{email: "testing@gmail.com"},{email: "testing2@gmail.com"}]
      },
    ]}
  }
}

const addEventMock: MockedResponse = {
  request: {
    query: ADD_EVENT,
  },
  variableMatcher: () => true,
  result: {
    data: {
      createEvent: {
        end: "2024-09-12T00:00:00.000Z",
        hostName: "Morales",
        start: "2024-09-12T00:00:00.000Z",
        timeToEnd: "08:00",
        timeToStart: "09:00",
        title: "Another Event",
      }
    }
  }
}

const addEventErrorMock: MockedResponse = {
  request: {
    query: ADD_EVENT,
  },
  variableMatcher: () => true,
  error: new Error("An error occured")
}

const editEventMock = {
  request: {
    query: EDIT_EVENT
  },
  variableMatcher: () => true,
  result: {
    data: {
      editEvent: {
        end: "2024-09-12T00:00:00.000Z",
        hostName: "Jack",
        start: "2024-09-12T00:00:00.000Z",
        timeToEnd: "10:00",
        timeToStart: "09:00",
        title: "Edited Mock Event",
      }
    }
  }
}

const cancelEventMock: MockedResponse = {
  request: {
    query: CANCEL_EVENT,
    variables: {
      eventId: '1',
      authToken: 'mocked_auth_token'
    }
  },
  result: {
    data: {
      cancelEvent: {
        end: "2024-09-12T00:00:00.000Z",
        hostName: "Jack",
        start: "2024-09-12T00:00:00.000Z",
        timeToEnd: "10:00",
        timeToStart: "09:00",
        title: "Mock Event",
      }
    }
  }
}

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
  jest.useFakeTimers()
})

afterEach(()=>{
  localStorage.clear()
  jest.runAllTimers()
  cleanup()
})

describe('Calendar Tests', () => {
  it('should display Calendar events', async () => {
    render(
      <MockedProvider mocks={[getEventsMock]} addTypename={false}>
        <Calendar />
      </MockedProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("Mocked Event")).toBeInTheDocument()
      expect(screen.getByText("Jack")).toBeInTheDocument()
      expect(screen.getByText("Another Mocked Event")).toBeInTheDocument()
      expect(screen.getByText("Jones")).toBeInTheDocument()
    })
  });

  it('should add event when addEventForm is submitted', async () => {
    render(
      <MockedProvider mocks={[getEventsMock, addEventMock]} addTypename={false}>
        <Calendar />
      </MockedProvider>
    );

    const addEventModal = screen.getByTestId('addEventModal');
    const handleAddEventModal = screen.getByTestId('handleAddEventModal');
    const addEventForm = screen.getByTestId("addEventForm")
    expect(addEventForm).toBeInTheDocument()
    await waitFor(async()=>{
      fireEvent.click(handleAddEventModal);
      fireEvent.submit(addEventForm)
      expect(toast.success).toHaveBeenCalledWith('Event has been added!')
      expect(addEventModal).toHaveClass("hidden")
    })
    screen.debug()
  });

  it('should show an error toast when addEvent fails', async () => {
    render(
      <MockedProvider mocks={[getEventsMock, addEventErrorMock]} addTypename={false}>
        <Calendar />
      </MockedProvider>
    );

    const handleAddEventModal = screen.getByTestId('handleAddEventModal');
    const addEventForm = screen.getByTestId("addEventForm")
    expect(addEventForm).toBeInTheDocument()
    await waitFor(async()=>{
      fireEvent.click(handleAddEventModal);
      fireEvent.submit(addEventForm)
      expect(toast.error).toHaveBeenCalledWith('An error occured')
    })
  });

  it('should edit event when editEventForm is submitted', async () => {
    render(
      <MockedProvider mocks={[getEventsMock, editEventMock]} addTypename={false}>
        <Calendar />
      </MockedProvider>
    );

    const editEventModal = screen.getByTestId('editEventModal')
    const editEventForm = screen.getByTestId("editEventForm")
    expect(editEventModal).toHaveClass("hidden")
    await waitFor(() => {
      const event = screen.getByTestId("event-1")
      fireEvent.click(event)
      expect(editEventModal).toHaveClass("block")
      fireEvent.submit(editEventForm)
      expect(toast.success).toHaveBeenCalledWith('Event has been updated!')
    })
  });

  it('should delete event when delete button is clicked', async () => {
    render(
      <MockedProvider mocks={[getEventsMock, cancelEventMock]} addTypename={false}>
        <Calendar />
      </MockedProvider>
    );

    const deleteEventModal = screen.getByTestId("deleteEventModal")
    const handleDeleteModal = screen.getByTestId("handleDeleteModal")
    const handleDelete = screen.getByTestId("handleDelete")
    await waitFor(() => {
      const event = screen.getByTestId("event-1")
      fireEvent.click(event)
      fireEvent.click(handleDeleteModal)
      expect(deleteEventModal).toHaveClass("block")
      fireEvent.click(handleDelete)
      expect(toast.success).toHaveBeenCalledWith('Event cancelled successfully')
    })
  });
});
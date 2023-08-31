/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/button-has-type */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../DataTable';
import Modal from './DocModel';
import Button from '../Buttons';
import useDocumentTitle from '../../hook/useDocumentTitle';

function CoordinatorDocs() {
  useDocumentTitle('How to Rate Trainees');
  const { t } = useTranslation();
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const [page, setPage] = useState<string | null>('');

  const columns = [{ Header: t('Contents'), accessor: 'Contents' }];

  const handleRowClick = (content: string) => {
    setSelectedContent(content);
  };

  const closeModal = () => {
    setSelectedContent(null);
  };

  const access = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Accessing Trainee Ratings')}
    >
      {t('Accessing Trainee Ratings')}
    </Button>
  );

  const understanding = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Understanding the Rating Scale')}
    >
      {t('Understanding the Rating Scale')}
    </Button>
  );

  const criteria = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Criteria for Rating Trainees')}
    >
      {t('Criteria for Rating Trainees')}
    </Button>
  );

  const feedback = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Providing Constructive Feedback')}
    >
      {t('Providing Constructive Feedback')}
    </Button>
  );

  const submitting = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Submitting Ratings')}
    >
      {t('Submitting Ratings')}
    </Button>
  );

  const editing = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Reviewing and Editing Ratings')}
    >
      {t('Reviewing and Editing Ratings')}
    </Button>
  );

  const practices = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Best Practices for Effective Rating')}
    >
      {t('Best Practices for Effective Rating')}
    </Button>
  );

  const Troubleshooting = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Troubleshooting and FAQs')}
    >
      {t('Troubleshooting and FAQs')}
    </Button>
  );
  const AccessCalendar = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Accessing the Calendar')}
    >
      {t('Accessing the Calendar')}
    </Button>
  );

  const CreatingEvent = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Creating new event')}
    >
      {t('Creating new event')}
    </Button>
  );

  const togglePage = (pageNumber: string) => {
    if (page === pageNumber) {
      setPage(null);
    } else {
      setPage(pageNumber);
    }
  };

  const contents1 = [access, understanding, submitting];

  const tableData1 = contents1.map((content) => ({ Contents: content }));

  const contents2 = [AccessCalendar, CreatingEvent];

  const tableData2 = contents2.map((content) => ({ Contents: content }));

  const page1 = (
    <>
      <div className="flex items-start">
        <Button
          variant="primary"
          size="sm"
          style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
          onClick={() => togglePage('p1')}
        >
          {t('How to Rate Trainees')}
        </Button>
      </div>

      {page === 'p1' && (
        <div>
          <div className="w-2/3 px-10 mb-10 ml-0 lg:ml-48">
            <div className="mt-5 ml-10">
              {t('Doc introduction Coordinator')}
            </div>
          </div>

          <div className="mt-5 text-xl md:text-3xl bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[100%] lg:mx-auto mb-10">
            <DataTable data={tableData1} columns={columns} title={t('')} />
          </div>
        </div>
      )}
    </>
  );

  const page2 = (
    <>
      <div className="flex items-start">
        <Button
          variant="primary"
          size="sm"
          style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
          onClick={() => togglePage('p2')}
        >
          {t('How to create calendar')}
        </Button>
      </div>

      {page === 'p2' && (
        <div>
          <div className="w-2/3 px-10 mb-10 ml-0 lg:ml-48">
            <div className="mt-5 ml-10">
              Creating a calendar event is an essential feature that empowers
              coordinators to efficiently schedule and organize crucial dates
              and appointments. In our system, coordinators can easily create
              calendar events for meetings, standups, and demos for trainees in
              the program. By following the steps outlined below, coordinators
              can seamlessly create these events and ensure a well-structured
              schedule for trainees:
            </div>
          </div>

          <div className="mt-5 text-xl md:text-3xl bg-white dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[100%] lg:mx-auto mb-10">
            <DataTable data={tableData2} columns={columns} title={t('')} />
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="flex flex-col pl-10 grow bg-light-bg dark:bg-dark-frame-bg text-light-text dark:text-dark-text-fill">
      {page1}

      {page2}

      {selectedContent && (
        <Modal onClose={closeModal}>
          {selectedContent === 'Accessing Trainee Ratings' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
                  onClick={closeModal}
                >
                  close
                </button>

                <h2 className="mb-4 text-2xl font-bold">
                  Details of how trainee ratings can be accessed.
                </h2>

                <p>
                  As a coordinator, accessing trainee ratings is a
                  straightforward process. To begin, click on the "Rating" link
                  in the sidebar. This will direct you to a page where you can
                  choose the cohort for which you want to view ratings. <br />{' '}
                  <br />
                  Once you have selected the desired cohort, a table will be
                  displayed containing a list of trainees and their ratings for
                  the selected cohort. If you need to rate a trainee, simply
                  click on the "Add New Rating" button on the trainee ratings
                  page. This will open a model where you can choose the trainee
                  and the relevant sprint for which you want to add ratings.
                </p>
              </div>
            </div>
          )}

          {selectedContent === 'Understanding the Rating Scale' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
                  onClick={closeModal}
                >
                  close
                </button>

                <h2 className="mb-4 text-2xl font-bold">
                  Understanding the Rating Scale
                </h2>

                <p>
                  The rating scale is used to assess trainees based on various
                  criteria. There are three main categories: quality, quantity,
                  and professional skills. Each rating falls into one of three
                  categories: 0, 1, or 2, signifying different levels of
                  achievement. <br /> <br />A rating of 0 indicates that the
                  trainee has not met the expectations in a particular area. It
                  serves as constructive feedback highlighting areas where
                  improvement is needed. As a coordinator, you can provide
                  guidance and support to help the trainee improve in these
                  specific areas. Encourage open communication and offer
                  resources for skill development. <br /> <br />
                  A rating of 1 signifies that the trainee is making efforts and
                  progressing towards meeting the expectations. It acknowledges
                  the trainee's commitment and dedication to improving their
                  performance. Continue to support and motivate the trainee to
                  further enhance their skills and achieve higher levels of
                  proficiency. <br /> <br />
                  On the other hand, a rating of 2 indicates that the trainee is
                  performing well and meeting or even exceeding the
                  expectations. This rating acknowledges the trainee's
                  exceptional performance and serves as positive reinforcement
                  for their accomplishments. Recognize and appreciate the
                  trainee's achievements, and continue to provide opportunities
                  for growth and advancement.{' '}
                </p>
              </div>
            </div>
          )}

          {selectedContent === 'Submitting Ratings' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
                  onClick={closeModal}
                >
                  close
                </button>

                <h2 className="mb-4 text-2xl font-bold">
                  Creating and Submitting Ratings
                </h2>

                <p>
                  To create and submit ratings for a trainee, click on the "Add
                  New Rating" button on the trainee ratings page. This will open
                  a model where you can choose the trainee and the relevant
                  sprint for which you want to add ratings. <br /> <br />
                  Once you have selected the trainee and sprint, enter the
                  ratings for quality, quantity, and professionalism based on
                  the rating scale. Once you have entered the ratings, click on
                  the "Save Ratings" button to submit them. <br /> <br />
                  Alternatively, you can click on the "Cancel" button to discard
                  the ratings. Remember that the ratings you provide are
                  important feedback for the trainee, so be sure to provide
                  constructive and accurate ratings. By following these steps,
                  you can create and submit ratings for trainees as a
                  coordinator.
                </p>
              </div>
            </div>
          )}

          {selectedContent === 'Accessing the Calendar' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
                  onClick={closeModal}
                >
                  close
                </button>
                <h2 className="mb-4 text-2xl font-bold">
                  How you can access the Calendar
                </h2>

                <p>
                  {' '}
                  To access the calendar in our system, coordinators can
                  conveniently locate and click on the dedicated calendar link
                  available in the sidebar. The calendar link is typically
                  displayed prominently and intuitively within the system's user
                  interface, ensuring easy accessibility for coordinators. Upon
                  clicking the calendar link, a new page or a modal window will
                  open, presenting coordinators with a comprehensive view of the
                  calendar.
                  <br /> <br />
                  The calendar interface provides coordinators with a visual
                  representation of scheduled events, appointments, and
                  important dates. It offers an intuitive and user-friendly
                  layout that allows coordinators to navigate through different
                  time periods, such as day, week, or month, depending on their
                  preference and requirements. The calendar may display events
                  in a grid format or a timeline view, providing a clear and
                  organized overview of scheduled activities.
                </p>
                <br />
              </div>
            </div>
          )}

          {selectedContent === 'Creating new event' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
                  onClick={closeModal}
                >
                  close
                </button>
                <h2 className="mb-4 text-2xl font-bold">
                  How to Create a New Calendar Event
                </h2>
                <p>
                  To create a calendar event in our system, coordinators can
                  follow a simple process using the "Add Event" button available
                  on the calendar page. When the coordinator clicks on the "Add
                  Event" button, a modal window is displayed, presenting a form
                  to input the event details. The form includes fields for the
                  event title, event name, start date, end date, start hour, end
                  hour, and attendants. <br />
                  <br />
                  To create the event, coordinators can fill in the required
                  information in the corresponding fields. The event title helps
                  provide a brief description of the event, while the event name
                  can provide additional context or details. The start date and
                  end date fields allow coordinators to specify the duration of
                  the event, and the start hour and end hour fields enable them
                  to define the specific time frame. Additionally, coordinators
                  can select the attendants for the meeting by choosing from a
                  list of available participants. <br />
                  <br />
                  Once all the necessary details are entered and the attendants
                  are selected, coordinators can click the "Save" button to
                  store the event in the calendar. This ensures that the event
                  is successfully created and added to the calendar, allowing
                  for easy tracking and organization of important dates,
                  appointments, and meeting attendants. Alternatively, if
                  coordinators decide not to proceed with creating the event,
                  they can simply click the "Cancel" button to discard the form
                  and return to the calendar page without saving any changes.
                </p>
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

export default CoordinatorDocs;

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/button-has-type */

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLazyQuery } from '@apollo/client';
import DataTable from '../DataTable';
import Modal from './DocModel';
import Button from '../Buttons';
import useDocumentTitle from '../../hook/useDocumentTitle';
import { GET_DOCUMENTATION } from '../../queries/manageStudent.queries';

function CoordinatorDocs() {
  useDocumentTitle('Coordinator Docs');
  const { t } = useTranslation();
  const [documentations, setDocumentations] = useState<any[]>([]);
  const [selectedContent, setSelectedContent] = useState<any | null>(null);
  const [openedDoc, setOpenedDoc] = useState<string | null>(null);
  const columns = [{ Header: t('Contents'), accessor: 'Contents' }];

  const [getDocumentations, { loading }] = useLazyQuery(GET_DOCUMENTATION, {
    fetchPolicy: 'network-only',

    onCompleted: (data) => {
      setDocumentations(
        data.getDocumentations.filter(
          (documentation: any) =>
            documentation.for.toLowerCase() === 'coordinator' ||
            documentation.for.toLowerCase() === 'not trainees' ||
            documentation.for.toLowerCase() === 'all users',
        ),
      );
    },
    onError: (error) => {},
  });

  useEffect(() => {
    getDocumentations();
  }, []);

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
    if (openedDoc === pageNumber) {
      setOpenedDoc(null);
    } else {
      setOpenedDoc(null);
      setOpenedDoc(pageNumber);
    }
  };

  const contents1 = [access, understanding, submitting];

  const tableData1 = contents1.map((content) => ({ Contents: content }));

  const contents2 = [AccessCalendar, CreatingEvent];

  const tableData2 = contents2.map((content) => ({ Contents: content }));

  const retrivedCoordinatorDocs = (
    <>
      {!loading &&
        documentations.length > 0 &&
        documentations.map((documentation, index: number) => (
          <React.Fragment key={documentation.id}>
            <div key={documentation.id} className="flex gap-2 items-center">
              <p>{index + 3}.</p>
              <Button
                variant="primary"
                size="sm"
                style="bg-light-bg dark:bg-transparent hover:dark:bg-gray-500 text-light-text dark:text-dark-text-fill"
                onClick={() => togglePage(`${documentation.id}`)}
              >
                {documentation.title}
              </Button>
            </div>

            {openedDoc === documentation.id && (
              <div>
                <div className="w-full pr-2 md:w-2/3 mb-10 ml-0 md:ml-48 max-h-[430px] overflow-auto custom-scrollbar">
                  <div>{documentation.description}</div>
                </div>

                {!loading && documentation.subDocuments.length > 0 && (
                  <div>
                    <DataTable
                      data={documentation.subDocuments.map(
                        (subDocument: any) => ({
                          Contents: (
                            <Button
                              key={`${subDocument.title}${subDocument.description}`}
                              variant="primary"
                              size="sm"
                              style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
                              onClick={() => {
                                setSelectedContent({
                                  title: subDocument.title,
                                  description: subDocument.description,
                                });
                              }}
                            >
                              {t(`${subDocument.title}`)}
                            </Button>
                          ),
                        }),
                      )}
                      columns={columns}
                      title={t('')}
                    />
                  </div>
                )}

                {loading && (
                  <p className="text-lg text-center">Loading More Docs ...</p>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
    </>
  );

  const page1 = (
    <>
      <div className="flex gap-2 items-center">
        <p>1.</p>
        <Button
          variant="primary"
          size="sm"
          style="bg-light-bg dark:bg-transparent hover:dark:bg-gray-500 text-light-text dark:text-dark-text-fill"
          onClick={() => togglePage('p1')}
        >
          {t('How to Rate Trainees')}
        </Button>
      </div>

      {openedDoc === 'p1' && (
        <div>
          <div className="w-full pr-2 md:w-2/3 mb-10 ml-0 md:ml-48 max-h-[420px] overflow-auto custom-scrollbar">
            <div>
              This page provides comprehensive documentation on how to
              effectively rate trainees within the system. As a coordinator,
              your ability to provide accurate and insightful ratings plays a
              crucial role in tracking and evaluating the progress of trainees.
              This guide will walk you through the steps involved in rating
              trainees and ensure that you make the most of DevPulse's features
            </div>
          </div>

          <div>
            <DataTable data={tableData1} columns={columns} title={t('')} />
          </div>
        </div>
      )}
    </>
  );

  const page2 = (
    <>
      <div className="flex gap-2 items-center">
        <p>2.</p>
        <Button
          variant="primary"
          size="sm"
          style="bg-light-bg dark:bg-transparent hover:dark:bg-gray-500 text-light-text dark:text-dark-text-fill"
          onClick={() => togglePage('p2')}
        >
          {t('How to create calendar')}
        </Button>
      </div>

      {openedDoc === 'p2' && (
        <div>
          <div className="w-full pr-2 md:w-4/5 mb-10 ml-0 md:ml-48 max-h-[430px] overflow-auto custom-scrollbar">
            <div>
              Creating a calendar event is an essential feature that empowers
              coordinators to efficiently schedule and organize crucial dates
              and appointments. In our system, coordinators can easily create
              calendar events for meetings, standups, and demos for trainees in
              the program. By following the steps outlined below, coordinators
              can seamlessly create these events and ensure a well-structured
              schedule for trainees:
            </div>
          </div>

          <div>
            <DataTable data={tableData2} columns={columns} title={t('')} />
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="flex flex-col px-5 grow bg-light-bg dark:bg-dark-frame-bg text-light-text dark:text-dark-text-fill font-serif">
      {page1}

      {page2}

      {retrivedCoordinatorDocs}

      {selectedContent && (
        <Modal onClose={closeModal}>
          {selectedContent === 'Accessing Trainee Ratings' && (
            <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80">
              <div className="relative overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 pt-3 text-left align-middle shadow-xl transition-all">
                <button
                  className="sticky text-black top-2 ml-[90%] px-2 py-[2px] rounded-[4px] dark:bg-gray-600 bg-gray-200 hover:bg-gray-400 dark:text-white"
                  onClick={closeModal}
                >
                  close
                </button>

                <h2 className="mb-4 mt-[2px] text-[16px] sm:text-[20px] font-bold">
                  Details of how trainee ratings can be accessed.
                </h2>

                <p className="text-[14px] sm:text-[15px]">
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
              <div className="relative overflow-auto min-h-[300px] max-h-[500px] lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 pt-3 text-left align-middle shadow-xl transition-all custom-scrollbar">
                <button
                  className="sticky text-black top-2 ml-[90%] px-2 py-[2px] rounded-[4px] dark:bg-gray-600 bg-gray-200 hover:bg-gray-400 dark:text-white"
                  onClick={closeModal}
                >
                  close
                </button>

                <h2 className="mb-4 mt-[2px] text-[16px] sm:text-[20px] font-bold">
                  Understanding the Rating Scale
                </h2>

                <p className="text-[14px] sm:text-[15px]">
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
              <div className="relative overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 pt-3 text-left align-middle shadow-xl transition-all">
                <button
                  className="sticky text-black top-2 ml-[90%] px-2 py-[2px] rounded-[4px] dark:bg-gray-600 bg-gray-200 hover:bg-gray-400 dark:text-white"
                  onClick={closeModal}
                >
                  close
                </button>

                <h2 className="mb-4 mt-[2px] text-[16px] sm:text-[20px] font-bold">
                  Creating and Submitting Ratings
                </h2>

                <p className="text-[14px] sm:text-[15px]">
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
              <div className="relative overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 pt-3 text-left align-middle shadow-xl transition-all">
                <button
                  className="sticky text-black top-2 ml-[90%] px-2 py-[2px] rounded-[4px] dark:bg-gray-600 bg-gray-200 hover:bg-gray-400 dark:text-white"
                  onClick={closeModal}
                >
                  close
                </button>
                <h2 className="mb-4 mt-[2px] text-[16px] sm:text-[20px] font-bold">
                  How you can access the Calendar
                </h2>

                <p className="text-[14px] sm:text-[15px]">
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
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
              <div className="relative overflow-auto min-h-[300px] max-h-[500px] lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 pt-3 text-left align-middle shadow-xl transition-all custom-scrollbar">
                <button
                  className="sticky text-black top-2 ml-[90%] px-2 py-[2px] rounded-[4px] dark:bg-gray-600 bg-gray-200 hover:bg-gray-400 dark:text-white"
                  onClick={closeModal}
                >
                  close
                </button>
                <h2 className="mb-4 mt-[2px] text-[16px] sm:text-[20px] font-bold">
                  How to Create a New Calendar Event
                </h2>
                <p className="text-[14px] sm:text-[15px]">
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

          {selectedContent.title && selectedContent.description && (
            <Modal onClose={closeModal}>
              {selectedContent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                  <div className="relative overflow-auto min-h-[300px] max-h-[500px] lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 pt-3 text-left align-middle shadow-xl transition-all custom-scrollbar">
                    <button
                      className="sticky text-black top-2 ml-[90%] px-2 py-[2px] rounded-[4px] dark:bg-gray-600 bg-gray-200 hover:bg-gray-400 dark:text-white"
                      onClick={closeModal}
                    >
                      close
                    </button>

                    <h2 className="mb-4 mt-[2px] text-[16px] sm:text-[20px] font-bold">
                      {selectedContent.title}
                    </h2>
                    <p className="text-[14px] sm:text-[15px]">
                      {selectedContent.description}
                    </p>
                  </div>
                </div>
              )}
            </Modal>
          )}
        </Modal>
      )}
    </div>
  );
}

export default CoordinatorDocs;

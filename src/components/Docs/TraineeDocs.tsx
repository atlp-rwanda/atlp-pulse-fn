/* eslint-disable react/no-unescaped-entities */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../DataTable';
import Modal from './DocModel';
import Button from '../Buttons';
import useDocumentTitle from '../../hook/useDocumentTitle';

function TraineeDocs() {
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

  const request = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Requesting feedback on ratings')}
    >
      {t('Requesting feedback on ratings')}
    </Button>
  );

  const provide = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Providing Feedback to the Coordinator')}
    >
      {t('Providing Feedback to the Coordinator')}
    </Button>
  );

  const understanding = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Understanding the Rating System')}
    >
      {t('Understanding the Rating System')}
    </Button>
  );

  const improving = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('Improving Your Ratings')}
    >
      {t('Improving Your Ratings')}
    </Button>
  );

  const contents1 = [request, provide];
  const tableData1 = contents1.map((content) => ({ Contents: content }));

  const contents2 = [understanding, improving];
  const tableData2 = contents2.map((content) => ({ Contents: content }));

  const togglePage = (pageNumber: string) => {
    if (page === pageNumber) {
      setPage(null); // Close the page if it's already open
    } else {
      setPage(pageNumber); // Open the page
    }
  };

  const page1 = (
    <>
      <div className="flex items-start ml-20 md:ml-72">
        <Button
          variant="primary"
          size="sm"
          style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
          onClick={() => togglePage('p1')}
        >
          {t('How to request feedback on ratings')}
        </Button>
      </div>
      {page === 'p1' && (
        <div>
          <div className="w-2/3 px-10 mb-10 ml-0 lg:ml-48">
            <div className="pb-8 mt-10 ml-10 text-xl md:text-3xl">{t('How to request feedback on ratings ')}</div>
            <div className="ml-10">
              The first component of this page aims to provide a step-by-step guide on how to request feedback on ratings from a coordinator on the DevPulse platform.
              It includes instructions on how to access the chatbox, initiate a conversation with the coordinator, and ask for specific feedback on quality, quantity, and professional skills.
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
      <div className="flex items-start ml-20 md:ml-72">
        <Button
          variant="primary"
          size="sm"
          style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
          onClick={() => togglePage('p2')}
        >
          {t('How to make sense of performance data')}
        </Button>
      </div>
      {page === 'p2' && (
        <div>
          <div className="w-2/3 px-10 mb-10 ml-0 lg:ml-48">
            <div className="pb-8 mt-10 ml-10 text-xl md:text-3xl">{t('How to make sense of performance data ')}</div>
            <div className="ml-10">
              The first component of this page provides an overview of the rating system used by the coordinator on the DevPulse platform.
              It includes information on what the quality, quantity, and professional skills ratings mean, how they are calculated, and what factors are taken into consideration.
              It also explains how the ratings affect the trainee's progress and performance on the platform and how to interpret the ratings.
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
    <div className="flex flex-col pl-10 grow bg-light-bg dark:bg-dark-frame-bg pt-28 text-light-text dark:text-dark-text-fill">
      {page1}
      {page2}

      {selectedContent && (
        <Modal onClose={closeModal}>
          {selectedContent === 'Requesting feedback on ratings' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
          <button type='button' className="absolute text-gray-500 top-2 right-2 hover:text-gray-800" onClick={closeModal}>
           close
          </button>

          <h2 className="mb-4 text-2xl font-bold">Requesting feedback on ratings </h2>
        <p  className='text-lg'>
        To request feedback on performance ratings in the program, navigate to the "Performance" 
        page on your dashboard. Click the "Details" button corresponding to a specific rating in the table.  <br /> <br />
        
        A model will appear, displaying the metrics, grades, and remarks. Click the "Reply" button to open a chatbox and request feedback from your coordinator. 
        Engage in a clear and concise conversation to seek clarification and guidance on areas that need improvement.
        </p>
 
               
        </div>
            </div>
          )}

          {selectedContent === 'Providing Feedback to the Coordinator' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
               <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
        <button type='button' className="absolute text-gray-500 top-2 right-2 hover:text-gray-800" onClick={closeModal}>
         close
        </button>

        <h2 className="mb-4 text-2xl font-bold">Providing Feedback to the Coordinator</h2>
       
      <p  className='text-lg'>
      To provide feedback to your coordinator on performance ratings, access the "Performance" page on your dashboard.
       Review the ratings and remarks provided. Use the chatbox or designated communication channel to express your thoughts and observations. <br /> <br />
        Focus on constructive suggestions, specific examples, and concerns, ensuring a respectful and professional tone.
       Submit your feedback through the provided channel, contributing to program improvement and fostering effective communication.
      </p>
             
      </div>
            </div>
          )}

          {selectedContent === 'Understanding the Rating System' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
        <button type='button' className="absolute text-gray-500 top-2 right-2 hover:text-gray-800" onClick={closeModal}>
         close
        </button>

        <h2 className="mb-4 text-2xl font-bold">Understanding the Rating System</h2> 
        As a trainee in the program, it is essential to comprehend and make sense
         of the performance data that you receive. The performance ratings provided to you 
         encompass three crucial aspects: quality, quantity, and professional skills. 
         Each rating falls into one of three categories: 0, 1, or 2, signifying different levels of achievement. <br /> 

          A rating of 0 indicates that you have not met the expectations in a particular area.
          It serves as constructive feedback highlighting areas where improvement is needed. 
          Take this rating as an opportunity to reflect on your performance, identify areas for growth, and actively work towards enhancing your skills in those specific areas.<br /> <br />

          A rating of 1 signifies that you are making efforts and progressing towards meeting the expectations. 
          It acknowledges your commitment and dedication to improving your performance. This rating encourages you to continue
          working diligently and strive for further growth in the respective areas.<br />

          On the other hand, a rating of 2 indicates that you are performing well and meeting or even exceeding the expectations.
          This rating acknowledges your exceptional performance and serves as positive reinforcement for your accomplishments.
            Celebrate this achievement and continue to maintain your high standards of quality, quantity, and professional skills.<br /> <br />

          To make the most of the performance data, it is crucial to review and understand the specific feedback provided along with the ratings.
          Identify the areas where you need improvement and seek guidance from coordinator to enhance your skills further. Use the ratings as a guide to set goals,
            track progress, and continuously develop your abilities throughout the  program. Remember, these
          ratings are designed to support your growth and development, enabling you to reach your full potential as a skilled professional.<br /> 
             
      </div>
            </div>
          )}

          {selectedContent === 'Improving Your Ratings' && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
        <button type='button' className="absolute text-gray-500 top-2 right-2 hover:text-gray-800" onClick={closeModal}>
         close
        </button>

        <h2 className="mb-4 text-2xl font-bold">Improving Your Ratings</h2>
       <p  className='text-lg'>
        If you receive ratings that indicate areas for improvement, 
        it is crucial to take proactive steps towards enhancing your performance. 
        One effective strategy is to reach out to your coordinator for feedback and guidance.
         The coordinator plays a pivotal role in providing support and mentorship throughout the program. 
           Their expertise and experience can provide valuable insights and practical advice on how to enhance your skills.
            Actively listen to their feedback, ask questions, and express your willingness to put in the effort required for improvement. <br /> <br />

        Once you have received feedback from your coordinator, it is important to set clear goals to work towards. Based on their recommendations, 
        identify specific areas for improvement and establish measurable objectives. These goals should be realistic and achievable within a given timeframe. Break down the larger objectives into smaller,
        manageable tasks that you can tackle one step at a time.  <br />
        By setting clear goals, you can focus your efforts and track your progress effectively. 
        Regularly review your goals and adjust them as needed based on your progress and any additional feedback received. 
        Stay committed, maintain a growth mindset, and take consistent action towards achieving your goals, knowing that your coordinator is there to support and guide you throughout your improvement journey.
        </p>    
      </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

export default TraineeDocs;





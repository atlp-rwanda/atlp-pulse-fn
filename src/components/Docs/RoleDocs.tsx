/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */

import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLazyQuery } from '@apollo/client';
import DataTable from '../DataTable';
import Modal from './DocModel';
import Button from '../Buttons';
import useDocumentTitle from '../../hook/useDocumentTitle';
import { GET_DOCUMENTATION } from '../../queries/manageStudent.queries';
import { UserContext } from '../../hook/useAuth';

interface RoleDocsProps {
  userRole: String;
}

function RoleDocs({ userRole }: RoleDocsProps) {
  useDocumentTitle('Role Documentation');
  const { user } = useContext(UserContext);
  const { t } = useTranslation();
  const [selectedContent, setSelectedContent] = useState<any | null>(null);
  const [documentations, setDocumentations] = useState<any[]>([]);
  const [selectedDocId, setSelectedDocId] = useState<string>('');

  const columns = [{ Header: t('Contents'), accessor: 'Contents' }];

  const closeModal = () => {
    setSelectedContent(null);
  };

  const [getDocumentations, { loading }] = useLazyQuery(GET_DOCUMENTATION, {
    fetchPolicy: 'network-only',

    onCompleted: (data) => {
      setDocumentations(
        data.getDocumentations.filter((documentation: any) => {
          if (userRole.toLowerCase() === 'trainee') {
            return (
              documentation.for.toLowerCase() === userRole ||
              documentation.for.toLowerCase() === 'all users'
            );
          }
          return (
            documentation.for.toLowerCase() === userRole ||
            documentation.for.toLowerCase() === 'not trainees' ||
            documentation.for.toLowerCase() === 'all users'
          );
        }),
      );
    },
    onError: (error) => {},
  });

  useEffect(() => {
    getDocumentations();
  }, []);

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
      onClick={() =>
        setSelectedContent('Providing Feedback to the Coordinator')
      }
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
    setSelectedDocId(pageNumber);
    // get all ids from documentation
    documentations.map((documentation) => {
      // set class to hidden
      document.getElementById(`${documentation.id}`)?.classList.add('hidden');

      // if id matches the page number, remove hidden class
      if (documentation.id === pageNumber) {
        if (selectedDocId === pageNumber) {
          document
            .getElementById(`${documentation.id}`)
            ?.classList.add('hidden');
          setSelectedDocId('');
        } else {
          document
            .getElementById(`${documentation.id}`)
            ?.classList.remove('hidden');
        }
      }
      return null;
    });
  };

  const Skeleton = (
    <>
      <div className="flex flex-col px-5 grow bg-light-bg dark:bg-dark-frame-bg text-light-text dark:text-dark-text-fill font-serif">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mt-4 flex gap-3">
            <div className="w-[32px] h-7 animate-pulse duration-75 bg-gray-400/70 dark:bg-gray-400/40 rounded-[6px]" />
            <div className="flex items-center w-[280px] mb-4 h-7 animate-pulse duration-75 bg-gray-400 dark:bg-gray-400/40 rounded-[6px]" />
          </div>
        ))}
      </div>
    </>
  );

  const page1 = (
    <>
      {!loading &&
        documentations.length > 0 &&
        documentations.map((documentation, index: number) => (
          <React.Fragment key={documentation.id}>
            <div className="flex gap-2 items-center">
              <p>{index + 1}.</p>
              <Button
                variant="primary"
                size="sm"
                style="bg-light-bg dark:bg-transparent hover:dark:bg-gray-500 text-light-text dark:text-dark-text-fill"
                onClick={() => togglePage(documentation.id)}
              >
                {documentation.title}
              </Button>
            </div>

            <div id={documentation.id} className="hidden">
              <div className="w-full pr-2 md:w-2/3 mb-10 ml-0 md:ml-48 max-h-[430px] overflow-auto custom-scrollbar">
                <div>{documentation.description}</div>
              </div>

              {documentation.subDocuments.length > 0 && (
                <DataTable
                  data={documentation.subDocuments.map((subDocument: any) => ({
                    Contents: (
                      <Button
                        key={subDocument.title}
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
                  }))}
                  columns={columns}
                  title={t('')}
                />
              )}
            </div>
          </React.Fragment>
        ))}

      {loading && <p className="text-lg text-center">Loading Docs ...</p>}

      {!loading && documentations.length === 0 && (
        <p className="text-lg text-center">
          There are no documentations by now.
        </p>
      )}
    </>
  );

  return (
    <div className="flex flex-col px-5 grow bg-light-bg dark:bg-dark-frame-bg text-light-text dark:text-dark-text-fill font-serif">
      <div className="">{!loading ? page1 : Skeleton}</div>

      {selectedContent && (
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
    </div>
  );
}

export default RoleDocs;

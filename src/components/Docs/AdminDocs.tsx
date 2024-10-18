/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLazyQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';
import CoordinatorDocs from './CoordinatorDocs';
import DataTable from '../DataTable';
import Modal from './DocModel';
import Button from '../Buttons';
import useDocumentTitle from '../../hook/useDocumentTitle';
import {
  ADD_DOCUMENTATION,
  ADD_SUB_DOCUMENTATION,
  DELETE_DOCUMENTATION,
  DELETE_SUB_DOCUMENTATION,
  UPDATE_DOCUMENTATION,
} from '../../Mutations/manageStudentMutations';
import { GET_DOCUMENTATION } from '../../queries/manageStudent.queries';

function AdminDocs() {
  useDocumentTitle('Documentation');
  const { t } = useTranslation();
  const [selectedContent, setSelectedContent] = useState<any | null>(null);
  const [documentModel, setDocumentModel] = useState<boolean>(false);
  const [documentations, setDocumentations] = useState<any[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [role, setRole] = useState<string>('Trainee');
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [isSubDocument, setIsSubDocument] = useState<boolean>(false);
  const [selectedDocId, setSelectedDocId] = useState<string>('');
  const [isUpdate, setIsUpdate] = useState<boolean>(false);

  const [page, setPage] = useState<string | null>('');

  const columns = [{ Header: t('Document'), accessor: 'Document' }];

  const handleRowClick = (content: string) => {
    setSelectedContent(content);
  };

  const closeModal = () => {
    setSelectedContent(null);
  };

  const [getDocumentations, { loading }] = useLazyQuery(GET_DOCUMENTATION, {
    fetchPolicy: 'network-only',

    onCompleted: (data) => {
      setDocumentations(data.getDocumentations);
    },
    onError: (error) => {},
  });

  // add documentation
  const [addDocumentation] = useMutation(ADD_DOCUMENTATION, {
    onCompleted: (data) => {
      setButtonLoading(false);
      toast.success('Documentation added successfully');
      getDocumentations().then(() => {
        setDocumentModel(!documentModel);
        setTitle('');
        setDescription('');
        // refresh Page
        getDocumentations();
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // add sub documentation

  const [addSubDocumentation] = useMutation(ADD_SUB_DOCUMENTATION, {
    onCompleted: (data) => {
      setButtonLoading(false);
      toast.success('Sub Documentation added successfully');
      getDocumentations().then(() => {
        setDocumentModel(!documentModel);
        setTitle('');
        setDescription('');
        // refresh Page
        getDocumentations();
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // update documentation
  const [updateDocumentation] = useMutation(UPDATE_DOCUMENTATION, {
    onCompleted: (data) => {
      setButtonLoading(false);
      toast.success(`${t('Documentation updated successfully')}`);
      getDocumentations();
      setDocumentModel(!documentModel);
      setTitle('');
      setDescription('');
      // refresh Page
      setIsUpdate(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleUpdateDocumentation = (id: string) => {
    setButtonLoading(true);
    updateDocumentation({
      variables: {
        id,
        title,
        description,
        for: role,
      },
    });
  };

  // delete documentation
  const [deleteDocumentation] = useMutation(DELETE_DOCUMENTATION, {
    onCompleted: (data) => {
      toast.success('Documentation deleted successfully');
      getDocumentations();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // delete sub documentation
  const [deleteSubDocumentation] = useMutation(DELETE_SUB_DOCUMENTATION, {
    onCompleted: (data) => {
      toast.success('Sub Documentation deleted successfully');
      getDocumentations();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleDeleteSubDocumentation = (
    id: string,
    title: string,
    description: string,
  ) => {
    deleteSubDocumentation({
      variables: {
        id,
        title,
        description,
      },
    });
  };

  const handleDeleteDocumentation = (id: string) => {
    deleteDocumentation({
      variables: {
        id,
      },
    });
  };

  const handleAddDocumentation = (
    title: string,
    description: string,
    role: string,
  ) => {
    setButtonLoading(true);
    if (isSubDocument) {
      if (title === '' || description === '') {
        toast.error(`${t('Please fill all fields')}`);
        setButtonLoading(false);
      } else {
        addSubDocumentation({
          variables: {
            id: selectedDocId,
            title,
            description,
          },
        });
      }
    } else if (title === '' || description === '' || role === '') {
      toast.error(`${t('Please fill all fields')}`);
      setButtonLoading(false);
    } else {
      addDocumentation({
        variables: {
          title,
          description,
          for: role,
        },
      });
    }
  };

  useEffect(() => {
    getDocumentations();
  }, []);

  const permission = (
    <Button
      variant="primary"
      size="sm"
      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
      onClick={() => setSelectedContent('How to grant permissions')}
    >
      {t('How to grant permissions')}
    </Button>
  );

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

  const contents = [permission];

  const Skeleton = (
    <>
      <div className="flex items-center w-[200px] h-7 animate-pulse duration-75 bg-gray-400/90 mb-5 rounded-[6px]" />
      <div className="relative font-serif bg-indigo-100 dark:bg-dark-bg shadow-lg h-fit px-5 py-8 rounded-md w-[100%] mb-10">
        <input
          aria-label="Filter table data"
          placeholder="Filter"
          className="px-5 py-2 mt-4 font-sans text-xs border rounded outline-none border-primary dark:bg-neutral-600 dark:text-white w-52 md:w-96"
        />

        <div className="w-full h-14 flex items-center p-3 px-4 bg-gray-300 dark:bg-gray-500/50 my-5 rounded-[6px]">
          <div className="flex items-center w-[200px] h-7 animate-pulse duration-75 bg-gray-400/70 dark:bg-gray-400/40 rounded-[6px]" />
        </div>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex w-full justify-between">
            <div className="flex items-center w-[300px] mb-4 h-7 animate-pulse duration-75 bg-gray-400 dark:bg-gray-400/40 rounded-[6px]" />
            <div className="flex gap-5">
              <div className="w-[40px] h-7 animate-pulse duration-75 bg-gray-400/70 dark:bg-gray-400/40 rounded-[6px]" />
              <div className="w-[40px] h-7 animate-pulse duration-75 bg-gray-400/70 dark:bg-gray-400/40 rounded-[6px]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const page1 = (
    <>
      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          setIsSubDocument(false);
          setDocumentModel(!documentModel);
        }}
      >
        {t('Add Document')}
      </Button>

      <div className="flex flex-col">
        {!loading && documentations.length > 0 && (
          <div className="mt-3 shadow-lg rounded-md ">
            <DataTable
              data={documentations.map((documentation: any) => ({
                Document: (
                  <React.Fragment key={documentation.id}>
                    <div className="flex justify-between -mb-2">
                      <Button
                        variant="primary"
                        size="sm"
                        style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
                        onClick={() => togglePage(`${documentation.id}`)}
                      >
                        {/* <div> */}
                        {t(`${documentation.title}`)}
                      </Button>
                      <div className="flex items-center">
                        <Icon
                          icon="el:file-edit-alt"
                          className="mt-4 mr-2"
                          width="25"
                          height="25"
                          cursor="pointer"
                          color="#148fb6"
                          /* istanbul ignore next */
                          onClick={() => {
                            setIsUpdate(true);
                            setDocumentModel(!documentModel);
                            setTitle(documentation.title);
                            setDescription(documentation.description);
                            setSelectedDocId(documentation.id);
                            setRole(documentation.for);
                          }}
                        />

                        <Icon
                          icon="mdi:close-circle-outline"
                          width="30"
                          height="30"
                          cursor="pointer"
                          color="#148fb6"
                          className="mt-4"
                          /* istanbul ignore next */
                          onClick={() => {
                            handleDeleteDocumentation(documentation.id);
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className="flex-col items-start hidden -ml-3"
                      id={documentation.id}
                    >
                      <span className="text-primary">{documentation.for}</span>
                      <div className="w-full px-5">
                        <div className="flex flex-col mt-4 ml-0">
                          <span>{documentation.description}</span>
                          <Button
                            variant="primary"
                            size="sm"
                            style="mb-5 w-44 mt-5 -ml-0"
                            onClick={() => {
                              setIsSubDocument(true);
                              setDocumentModel((prev) => !prev);
                            }}
                          >
                            {t(`Add SubDocument`)}
                          </Button>
                        </div>
                      </div>

                      {documentation.subDocuments.map(
                        (subDocument: { title: any; description: any }) => (
                          <div
                            key={`${title}${description}`}
                            className="flex items-center px-10 -mt-2"
                          >
                            <Button
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
                            <Icon
                              icon="mdi:close-circle-outline"
                              width="23"
                              height="23"
                              cursor="pointer"
                              color="#148fb6"
                              className="flex items-center"
                              /* istanbul ignore next */
                              onClick={() => {
                                handleDeleteSubDocumentation(
                                  documentation.id,
                                  subDocument.title,
                                  subDocument.description,
                                );
                              }}
                            />
                          </div>
                        ),
                      )}
                    </div>
                  </React.Fragment>
                ),
                Action: <></>,
              }))}
              columns={columns}
              title={t('')}
            />
          </div>
        )}
        {!loading && documentations.length === 0 && (
          <p className="text-lg text-center">
            There are no documentations by now.
          </p>
        )}
        <div className="flex " />
      </div>
    </>
  );

  return (
    <>
      <div className="relative">
        <div
          className={`fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80 font-serif w-full backdrop-blur-sm  px-4 ${
            documentModel === true ? 'block' : 'hidden'
          }`}
        >
          <div className="w-full xm:w-[600px] p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg">
            <div className="flex flex-wrap items-center justify-center w-full card-title ">
              <h3 className="w-11/12 text-sm text-center dark:text-white ">
                {isUpdate ? t('Update Document') : t('Add Document')}
              </h3>
              <hr className="w-full my-3 border-b bg-primary" />
            </div>
            <div className="card-body">
              <form className="px-8 py-3 ">
                <div className="flex flex-wrap items-center justify-center w-full card-title ">
                  <h3 className="text-sm font-bold text-center dark:text-white ">
                    {isUpdate
                      ? t(
                          'Enter the title and description of the document you want to update',
                        )
                      : t(
                          'Enter the title and description of the document you want to add',
                        )}
                  </h3>
                </div>
                <div className="my-3 text-white input h-9 ">
                  <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                    <input
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      value={title}
                      type="text"
                      name="title"
                      className="w-full px-3 py-2 font-sans text-sm text-black dark:text-white border rounded outline-none dark:bg-dark-tertiary border-primary placeholder:dark:text-gray-400"
                      placeholder={t('Title')}
                    />
                  </div>
                </div>
                <br />
                <div className="my-[14px] text-white input h-9 ">
                  <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                    <textarea
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      value={description}
                      className="w-full min-h-[110px] p-3 font-sans text-sm text-black dark:text-white border rounded outline-none dark:bg-dark-tertiary border-primary placeholder:dark:text-gray-400"
                      placeholder={t('Description')}
                    />
                  </div>
                </div>
                <br />
                <div className="my-3 text-white input h-9 ">
                  <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                    <select
                      className={
                        isSubDocument
                          ? 'hidden'
                          : `w-full px-5 py-2 font-sans text-xs text-black dark:text-white border rounded outline-none dark:bg-dark-tertiary border-primary`
                      }
                      onChange={(e) => {
                        setRole(e.currentTarget.value);
                      }}
                      value={role}
                    >
                      <option value="" disabled>
                        Select Role
                      </option>
                      <option value="Trainee">Trainee</option>
                      <option value="Coordinator">Coordinator</option>
                      <option value="TTL">TTL</option>
                      <option value="Not Trainees">Not Trainees</option>
                      <option value="All Users">All Users</option>
                    </select>
                  </div>
                </div>
                <br />

                <div className="flex justify-between w-full">
                  <Button
                    data-testid="removeModel2"
                    variant="info"
                    size="sm"
                    style="w-[30%] md:w-1/4 text-sm font-sans"
                    onClick={() => {
                      setTitle('');
                      setDescription('');
                      setIsUpdate(false);
                      setDocumentModel(!documentModel);
                    }}
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    data-testid="removeMemberFromCohort"
                    style="w-[30%] md:w-1/4 text-sm font-sans"
                    onClick={() => {
                      isUpdate
                        ? handleUpdateDocumentation(selectedDocId)
                        : handleAddDocumentation(title, description, role);
                    }}
                    loading={buttonLoading}
                  >
                    {isUpdate ? t('Update') : t('Proceed')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col grow bg-light-bg dark:bg-dark-frame-bg text-light-text dark:text-dark-text-fill">
        <div className="">{!loading ? page1 : Skeleton}</div>
      </div>

      {selectedContent && (
        <Modal onClose={closeModal}>
          {selectedContent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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
    </>
  );
}

export default AdminDocs;

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
  GET_DOCUMENTATION,
  UPDATE_DOCUMENTATION,
} from '../../Mutations/manageStudentMutations';

function AdminDocs() {
  useDocumentTitle('Documentation');
  const { t } = useTranslation();
  const [selectedContent, setSelectedContent] = useState<any | null>(null);
  const [documentModel, setDocumentModel] = useState<boolean>(false);
  const [documentations, setDocumentations] = useState<any[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [role, setRole] = useState<string>('');
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

  const [getDocumentations] = useLazyQuery(GET_DOCUMENTATION, {
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

  const page1 = (
    <>
      <div className="pb-5 ml-20 md:ml-64">
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
      </div>

      {/* {documentations.map((documentation) => ( */}
      <div className="flex flex-col items-start ">
        <div className="mt-5 text-xl md:text-3xl  shadow-lg px-5 py-8 rounded-md w-[100%] mx-auto lg:w-[100%] lg:mx-auto mb-10">
          <DataTable
            data={documentations.map((documentation: any) => ({
              Document: (
                <>
                  <div className="flex justify-between">
                    <Button
                      variant="primary"
                      size="sm"
                      style="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text-fill -ml-5"
                      onClick={() => togglePage(`${documentation.id}`)}
                    >
                      {/* <div> */}
                      {t(`${documentation.title}`)}
                    </Button>
                    <div className="flex">
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
                    className="flex flex-col items-start hidden "
                    id={documentation.id}
                  >
                    <div className="w-full px-10 mb-4 ">
                      <div className="flex flex-col mt-5 ml-0">
                        <span className="p-2 text-primary">
                          {documentation.for}
                        </span>
                        <span>{documentation.description}</span>
                        <Button
                          variant="primary"
                          size="sm"
                          style="mb-5 w-44 mt-5"
                          onClick={() => {
                            setIsSubDocument(true);
                            setDocumentModel(!documentModel);
                          }}
                        >
                          {t(`Add SubDocument`)}
                        </Button>
                      </div>
                    </div>

                    {documentation.subDocuments.map(
                      (subDocument: { title: any; description: any }) => (
                        <div className="flex items-start px-10">
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
                            width="30"
                            height="30"
                            cursor="pointer"
                            color="#148fb6"
                            className="mt-4"
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
                </>
              ),
              Action: <></>,
            }))}
            columns={columns}
            title={t('')}
          />
        </div>
        <div className="flex " />
      </div>
      {/*     
    ))
      
    } */}
    </>
  );

  return (
    <>
      <div
        className={`h-screen w-screen z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${
          documentModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="w-full p-4 pb-8 bg-white rounded-lg dark:bg-dark-bg sm:w-3/4 xl:w-4/12">
          <div className="flex flex-wrap items-center justify-center w-full card-title ">
            <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
              {isUpdate ? t('Update Document') : t('Add Document')}
            </h3>
            <hr className="w-full my-3 border-b bg-primary" />
          </div>
          <div className="card-body">
            <form className="px-8 py-3 ">
              <div className="flex flex-wrap items-center justify-center w-full card-title ">
                <h3 className="w-11/12 text-sm font-bold text-center dark:text-white ">
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
                    className="w-full px-5 py-2 font-sans text-xs text-black border rounded outline-none dark:bg-dark-tertiary border-primary"
                    placeholder={t('title')}
                  />
                </div>
              </div>
              <br />
              <div className="my-3 text-white input h-9 ">
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <textarea
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    value={description}
                    className="w-full px-5 py-5 font-sans text-xs text-black border rounded outline-none dark:bg-dark-tertiary border-primary"
                  />
                </div>
              </div>
              <br />
              <div className="my-3 text-white input h-9 ">
                <div className="flex items-center w-full h-full text-white rounded-md grouped-input">
                  <select
                    name=""
                    id=""
                    className={
                      isSubDocument
                        ? 'hidden'
                        : `w-full px-5 py-2 font-sans text-xs text-black border rounded outline-none dark:bg-dark-tertiary border-primary`
                    }
                    onChange={(e) => {
                      setRole(e.currentTarget.value);
                    }}
                  >
                    {isUpdate ? (
                      <option value={role} selected>
                        {role}
                      </option>
                    ) : (
                      <option value="" disabled selected>
                        Select Role
                      </option>
                    )}
                    <option value="trainee">trainee</option>
                    <option value="other users">other users</option>
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

      <div className="flex flex-col pl-10 overflow-auto grow bg-light-bg dark:bg-dark-frame-bg pt-28 text-light-text dark:text-dark-text-fill">
        <div className="h-4 ">{page1}</div>

        {selectedContent && (
          <Modal onClose={closeModal}>
            {selectedContent && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="overflow-auto lg:mx-60 xl:mx-96 w-[800px] md:w-[600px] transform rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    className="absolute text-gray-500 top-2 right-2 hover:text-gray-800"
                    onClick={closeModal}
                  >
                    close
                  </button>

                  <h2 className="mb-4 text-2xl font-bold">
                    {selectedContent.title}
                  </h2>
                  <p>{selectedContent.description}</p>
                </div>
              </div>
            )}
          </Modal>
        )}
      </div>
    </>
  );
}

export default AdminDocs;

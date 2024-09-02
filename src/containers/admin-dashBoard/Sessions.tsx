import { Icon } from '@iconify/react';
import React, { useState, useEffect, ChangeEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { gql, useQuery, useMutation } from '@apollo/client';
import DataTable from '../../components/DataTable';
import useDocumentTitle from '../../hook/useDocumentTitle';
import Button from '../../components/Buttons';
import {
  GET_SESSIONS,
  CREATE_SESSION,
  DELETE_SESSION,
  EDIT_SESSION,
} from '../../Mutations/session';

interface Session {
  id: string;
  Sessionname: string;
  description: string;
  platform: string;
  duration: string;
  organizer: string;
  row: any;
  editedSession: Partial<Session>;
}

function AdminSission() {
  useDocumentTitle('Sessions');
  const { t } = useTranslation();
  const [getSessionModel, setSessionModel] = useState<Session[]>([]);
  const [addSessionModel, setAddSessionModel] = useState(false);
  const [deleteSessionModel, setDeleteSessionModel] = useState(false);
  const [updateTraineeModel, setUpdateTraineeModel] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState('');
  const [sessionToEdit, setSessionToEdit] = useState<Session | null>(null);

  const {
    data: getSessionData,
    loading: getSessionLoading,
    refetch: getSessionRefetch,
  } = useQuery(GET_SESSIONS);

  useEffect(() => {
    if (getSessionData) {
      const allSessions = getSessionData.getAllSessions.map((session: any) => ({
        id: session.id,
        Sessionname: session.Sessionname,
        description: session.description,
        platform: session.platform,
        duration: session.duration,
        organizer: session.organizer,
        editedSession: {},
      }));

      setSessionModel(allSessions);
    }
  }, [getSessionData]);

  const [sessionInput, setSessionInput] = useState({
    Sessionname: '',
    description: '',
    platform: '',
    duration: '',
    organizer: '',
  });

  const [createSession] = useMutation(CREATE_SESSION, {
    onCompleted: (data) => {
      setAddSessionModel(false);
      setSessionInput({
        Sessionname: '',
        description: '',
        platform: '',
        duration: '',
        organizer: '',
      });
    },
    onError: (error) => {},
  });

  const toggleAddSessionModel = () => {
    setAddSessionModel(!addSessionModel);
  };

  // eslint-disable-next-line no-undef
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSessionInput({ ...sessionInput, [name]: value });
  };

  const handleSaveSession = () => {
    createSession({
      variables: {
        sessionInput,
      },
    }).then(() => {
      setAddSessionModel(false);
      setSessionInput({
        Sessionname: '',
        description: '',
        platform: '',
        duration: '',
        organizer: '',
      });
      getSessionRefetch();
    });
  };

  const [deleteSession] = useMutation(DELETE_SESSION);

  const handleDeleteSession = (sessionId: string) => {
    setSessionToDelete(sessionId);
    setDeleteSessionModel(true);
  };

  const handleConfirmDelete = () => {
    deleteSession({
      variables: {
        ID: sessionToDelete,
      },
    })
      .then(() => {
        setDeleteSessionModel(false);
        setSessionToDelete('');
        getSessionRefetch();
      })
      .catch((error) => {});
  };

  const handleEditSession = (sessionId: string) => {
    const sessionToEdit = getSessionModel.find((s) => s.id === sessionId);
    if (sessionToEdit) {
      setSessionToEdit(sessionToEdit);
      setSessionModel((prevSessions) =>
        prevSessions.map((s) =>
          s.id === sessionId
            ? { ...s, editedSession: { ...sessionToEdit } }
            : s,
        ),
      );
      setUpdateTraineeModel(true);
    }
  };

  const [editSession] = useMutation(EDIT_SESSION);

  const handleUpdateSession = () => {
    if (sessionToEdit) {
      const { id, editedSession } = sessionToEdit;
      editSession({
        variables: {
          ID: id,
          editSessionInput: editedSession,
        },
      })
        .then(() => {
          setUpdateTraineeModel(false);
          setSessionToEdit(null);
          getSessionRefetch();
        })
        .catch((error) => {});
      // console.log("------",id)
    }
  };

  const columns = [
    { Header: t('Sessionname'), accessor: 'Sessionname' },
    { Header: t('description'), accessor: 'description' },
    { Header: t('platform'), accessor: 'platform' },
    { Header: t('duration'), accessor: 'duration' },
    { Header: t('organizer'), accessor: 'organizer' },

    {
      Header: 'Action',
      accessor: '',
      // eslint-disable-next-line react/no-unstable-nested-components
      Cell: ({ row }: any) => (
        <div className={`items-center${row.length > 0 ? ' flex' : ' flex'}`}>
          <div
            onClick={() => handleEditSession(row.original.id)}
            data-testid="updateIcon"
          >
            <Icon
              icon="el:file-edit-alt"
              className="mr-2"
              width="25"
              height="25"
              cursor="pointer"
              color="#9e85f5"
            />
          </div>

          <div
            onClick={() => handleDeleteSession(row.original.id)}
            data-testid="deleteIcon"
          >
            <Icon
              icon="mdi:trash-can"
              width="30"
              height="30"
              cursor="pointer"
              color="#9e85f5"
            />
          </div>
        </div>
      ),
    },
  ];

  const removeModel = () => {
    const newState = !addSessionModel;
    setAddSessionModel(newState);
  };

  const removeDeleteModel = () => {
    const newState = !deleteSessionModel;
    setDeleteSessionModel(newState);
  };

  const removeUpdateModel = () => {
    const newState = !updateTraineeModel;
    setUpdateTraineeModel(newState);
  };

  // let loading;
  return (
    <>
      {/* =========================== Start:: add Session Model =============================== */}
      <div
        className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
          addSessionModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-gray-700 text-center w-11/12 uppercase">
              {t('AddSession')}
            </h3>
            <hr className=" bg-primary border-gray-400 my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="Sessionname"
                    className="border border-primary rounded outline-none px-5 font-sans dark:bg-dark-frame-bg dark:text-white text-xs py-2 w-full"
                    placeholder={t('SessionName')}
                    onChange={handleInputChange}
                    value={sessionInput.Sessionname}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="description"
                    className=" border border-primary py-2 rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs w-full"
                    placeholder={t('description')}
                    onChange={handleInputChange}
                    value={sessionInput.description}
                  />
                </div>
              </div>
              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="platform"
                    className="border border-primary py-2 rounded dark:bg-dark-frame-bg dark:text-white outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('platform')}
                    onChange={handleInputChange}
                    value={sessionInput.platform}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="time"
                    name="duration"
                    className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('duration')}
                    onChange={handleInputChange}
                    value={sessionInput.duration}
                  />
                </div>
              </div>

              <div className="input my-3 h-9 ">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    type="text"
                    name="organizer"
                    className=" border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                    placeholder={t('organizer')}
                    onChange={handleInputChange}
                    value={sessionInput.organizer}
                  />
                </div>
              </div>
              <div className="w-full flex justify-between">
                <Button
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={toggleAddSessionModel}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={handleSaveSession}
                >
                  {t('Save')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  Add Session Model =============================== */}

      {/* =========================== Start::  delete Session Model =============================== */}
      <div
        data-testid="delete-section"
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          deleteSessionModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-gray-700 dark:text-white text-center w-11/12">
              {t('DeleteSession')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white text-center m-4">{t('reallydeleteSession')}</h2>
              </div>
              <div className="w-full flex justify-between">
                <Button
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  data-testid="remove"
                  onClick={removeDeleteModel}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  data-testid="delete"
                  onClick={handleConfirmDelete}
                >
                  {' '}
                  {t('Delete')}{' '}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  delete Session Model =============================== */}

      {/* =========================== Start::  update Session Model =============================== */}
      {updateTraineeModel && sessionToEdit && (
        <div data-testid="update-section" className="min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4">
          <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2 xl:w-4/12 rounded-lg p-4 pb-8">
            <div className="card-title w-full flex flex-wrap justify-center items-center">
              <h3 className="font-bold text-sm text-gray-700 dark:text-white text-center w-11/12">
                {t('UpdateSession')}
              </h3>
              <hr className="bg-primary border-b my-3 w-full" />
            </div>
            <div className="card-body">
              <form className="py-3 px-8">
                <div className="input my-3 h-9">
                  <div className="grouped-input flex items-center h-full w-full rounded-md">
                    <input
                      data-testid="session-name"
                      type="text"
                      name="Sessionname"
                      placeholder={sessionToEdit.Sessionname}
                      onChange={(e) => handleInputChange(e)}
                      className="border border-primary rounded outline-none dark:bg-dark-frame-bg dark:text-white px-5 font-sans text-xs py-2 w-full"
                    />
                  </div>
                </div>
                <div className="input my-3 h-9">
                  <div className="grouped-input flex items-center h-full w-full rounded-md">
                    <input
                      data-testid="description"
                      type="text"
                      name="description"
                      placeholder={sessionToEdit.description}
                      onChange={(e) => handleInputChange(e)}
                      className="border border-primary py-2 rounded outline-none dark:bg-dark-frame-bg dark:text-white px-5 font-sans text-xs w-full"
                    />
                  </div>
                </div>
                <div className="input my-3 h-9">
                  <div className="grouped-input flex items-center h-full w-full rounded-md">
                    <input
                      type="text"
                      name="platform"
                      placeholder={sessionToEdit.platform}
                      onChange={(e) => handleInputChange(e)}
                      className="border border-primary py-2 rounded outline-none dark:bg-dark-frame-bg dark:text-white px-5 font-sans text-xs w-full"
                    />
                  </div>
                </div>
                <div className="input my-3 h-9">
                  <div className="grouped-input flex items-center h-full w-full rounded-md">
                    <input
                      type="time"
                      name="duration"
                      placeholder={sessionToEdit.duration}
                      onChange={(e) => handleInputChange(e)}
                      className="border border-primary py-2 rounded outline-none dark:bg-dark-frame-bg dark:text-white px-5 font-sans text-xs w-full"
                    />
                  </div>
                </div>
                <div className="input my-3 h-9">
                  <div className="grouped-input flex items-center h-full w-full rounded-md">
                    <input
                      type="text"
                      name="organizer"
                      placeholder={sessionToEdit.organizer}
                      onChange={(e) => handleInputChange(e)}
                      className="border border-primary py-2 rounded outline-none dark:bg-dark-frame-bg dark:text-white px-5 font-sans text-xs w-full"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <Button
                    variant="info"
                    size="sm"
                    style="w-[30%] md:w-1/4 text-sm font-sans"
                    onClick={removeUpdateModel}
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    data-testid="save"
                    variant="primary"
                    size="sm"
                    style="w-[30%] md:w-1/4 text-sm font-sans"
                    onClick={handleUpdateSession}
                  >
                    {t('Save')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* =========================== End::  update Session Model =============================== */}
      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg  ">
                <div className="flex items-left pb-8">
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      size="lg"
                      data-testid="registerModel"
                      style="m-0"
                      onClick={removeModel}
                    >
                      {' '}
                      {t('register')} +{' '}
                    </Button>
                  </div>
                </div>
                <div>
                  {getSessionLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <DataTable
                      data={getSessionModel}
                      columns={columns}
                      title={t('Sessions List')}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminSission;

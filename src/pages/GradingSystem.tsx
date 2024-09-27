import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useMutation, useLazyQuery } from '@apollo/client';
import Sidebar from '../components/Sidebar';
import useDocumentTitle from '../hook/useDocumentTitle';
import DataTable from '../components/DataTable';
import DeleteGradingsModal from '../containers/admin-dashBoard/DeleteGradingsModal';
import MakeDefaultModal from '../containers/admin-dashBoard/MakeDefaultModal';
import Button from '../components/Buttons';
import DELETE_GRADING_SYSTEM from '../Mutations/DeleteGrading';
import GRADING_SYSTEM_QUERY from './GradingSystemQuery';
import MAKE_DEFAULT_GRADING_SYSTEM from '../Mutations/MakeDefault';
import GRADING_SYSTEM_MUTATION from './GradingSystemMutation';
import AddGradingSystem from './gradeSystem/addNew';
import GradingSkeleton from '../Skeletons/gradingSkeleton'
type grade = {
  grade?: string;
  range?: string;
  description?: string;
};
type filtedData = grade[];

function GradingSystem() {
  useDocumentTitle('Grading System');

  const [addGradingSystemModel, setAddGradingSystemModel] = useState(false);
  const [defaultGrade, setDefaultGrade] = useState('');
  const [fileteredData, setFileteredData] = useState<filtedData>();
  const [formData, setFormData] = useState({
    label: '',
    id: '',
  });
  const { t } = useTranslation();
  const [title, setTitle] = useState('');
  const [value, setValue] = useState<any>('');
  const [deleteGradingModal, setDeleteGradingModal] = useState(false);
  const [removeMakeDefaultModal, setRemoveMakeDefaultModal] = useState(false);

  useDocumentTitle('Cohorts');
  /* istanbul ignore next */
  const removeDeleteModel = () => {
    const newState = !deleteGradingModal;
    setDeleteGradingModal(newState);
  };
  /* istanbul ignore next */
  const makeGradeDefaultModel = () => {
    const newState = !removeMakeDefaultModal;
    setRemoveMakeDefaultModal(newState);
  };
  const removeModel = () => {
    const newState = !addGradingSystemModel;
    setAddGradingSystemModel(newState);
  };

  const [getGradings, { data, loading: gradeLoading }] = useLazyQuery(
    GRADING_SYSTEM_QUERY,
    {
      variables: { orgToken: localStorage.getItem('orgToken') },
    },
  );
  /* istanbul ignore next */
  const [CreateRatingSystem, { loading }] = useMutation(
    GRADING_SYSTEM_MUTATION,
    {
      onCompleted: () => {
        toast.success('grading system created');
      },
      onError: (error) => {
        toast.error(error.message || 'creating grading system fail');
      },
      refetchQueries: [
        {
          query: GRADING_SYSTEM_QUERY,
          variables: { orgToken: localStorage.getItem('orgToken') },
        },
      ],
    },
  );
  /* istanbul ignore next */
  const [deleteRatingSystem, { loading: deleteLoading }] = useMutation(
    DELETE_GRADING_SYSTEM,
    {
      variables: {
        deleteRatingSystemId: formData.id,
      },
      onCompleted: () => {
        toast.success('grading system deleted');
        setDeleteGradingModal(false);
      },
      onError() {
        setDeleteGradingModal(false);
        toast.error('Something went wrong!?!?');
      },
      refetchQueries: [
        {
          query: GRADING_SYSTEM_QUERY,
          variables: { orgToken: localStorage.getItem('orgToken') },
        },
      ],
    },
  );
  /* istanbul ignore next */
  const [makeRatingdefault, { loading: makeDefaultLoading }] = useMutation(
    MAKE_DEFAULT_GRADING_SYSTEM,
    {
      variables: {
        makeRatingdefaultId: defaultGrade,
      },
      onCompleted: () => {
        toast.success('make a default grading ');
        setRemoveMakeDefaultModal(false);
      },
      onError() {
        toast.error('Something went wrong!?!?');
        setRemoveMakeDefaultModal(false);
      },
      refetchQueries: [
        {
          query: GRADING_SYSTEM_QUERY,
          variables: { orgToken: localStorage.getItem('orgToken') },
        },
      ],
    },
  );

  let gradingData: any[] = data?.getRatingSystems ?? [];

  // grading system table data
  /* istanbul ignore next */
  const GradingsColumn = [
    { Header: t('Names'), accessor: 'name' },
    {
      Header: t('action'),
      accessor: 'id',
      // eslint-disable-next-line react/no-unstable-nested-components
      Cell: ({ row }: any) =>
        !row?.original?.defaultGrading && (
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              const ID = row?.cells[1].value;
              setDefaultGrade(ID);
              makeGradeDefaultModel();
            }}
            style="px-4 py-0 text-sm "
          >
            {t('Make default')}
          </Button>
        ),
    },
    {
      Header: t('More'),
      accessor: '',
      // eslint-disable-next-line react/no-unstable-nested-components
      Cell: ({ row }: any) => (
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            setFormData({
              label: row?.original?.name,
              id: row?.original?.id,
            });
            setValue(`${row?.original?.name}----${row?.original?.id}`);
          }}
          style="px-4 py-0 text-sm"
        >
          {t('View more')}
        </Button>
      ),
    },
  ];

  /* istanbul ignore next */
  useEffect(() => {
    if (formData.label === 'custom') {
      setValue('');
      setTitle('custom Name');
      setAddGradingSystemModel(true);
    } else {
      setTitle(formData.label);
      const filted = gradingData.filter((g) => g.name === formData.label)[0];
      if (!filted) return;
      const out: filtedData = [];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < filted?.grade?.length; i++) {
        out.push({
          grade: filted?.grade[i],
          range: filted?.percentage[i],
          description: filted?.description[i],
        });
      }
      setFileteredData(out);
    }
  }, [formData.label, value]);
  useEffect(() => {
    getGradings();
  }, []);
  useEffect(() => {
    gradingData = data?.getRatingSystems ?? [];
  }, [data?.getRatingSystems, data]);

  return (
    <>
      {/* =========================== Start:: GradingSystemModel =============================== */}
      <DeleteGradingsModal
        deleteGradingModal={deleteGradingModal}
        removeModel={removeDeleteModel}
        deleteFunc={() => deleteRatingSystem()}
        setValue={setValue}
        loading={deleteLoading}
      />
      <MakeDefaultModal
        removeModel={makeGradeDefaultModel}
        makeDefaultModal={removeMakeDefaultModal}
        makeDefaultFunc={() => makeRatingdefault()}
        loading={makeDefaultLoading}
      />
      <div
        className={`w-screen h-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center p-4 ${
          addGradingSystemModel === true ? 'flex' : 'hidden'
        }`}
      >
        <AddGradingSystem
          removeModel={removeModel}
          setValue={setValue}
          create={CreateRatingSystem}
          loading={loading}
        />
      </div>
      {/* =========================== End:: GradingSystemModel =============================== */}
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg ">
                <div className="flex items-left">
                  <div className="flex flex-wrap gap-2 py-2 pb-8 max-w-full">
                    <select
                      className="flex bg-primary rounded-md py-2 px-1 text-white font-medium cursor-pointer max-w-full"
                      value={value}
                      onChange={(event) => {
                        const value = event.target.value.split('----');
                        /* istanbul ignore next */
                        setFormData({
                          label: value[0],
                          id: value[1],
                        });
                        setValue(event.target.value);
                      }}
                    >
                      <option value=""> ---Select Grading System--- </option>
                      {!loading &&
                        data !== undefined &&
                        data?.getRatingSystems?.map((item: any) => (
                          <option
                            value={`${item?.name}----${item?.id}`}
                            key={item?.id}
                          >
                            {item?.name}
                          </option>
                        ))}
                    </select>
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={removeModel}
                      data-testid="gradeBtn"
                      style="m-0"
                    >
                      {' '}
                      {t('Grading')} +
                    </Button>
                  </div>
                </div>
                {value === '' && (
                  <div className="">
                    <div className="max-w-full">
                        <DataTable
                          columns={GradingsColumn}
                          loading={gradeLoading}
                          data={gradingData}
                          title={t('Gradings List')}
                        />
                    </div>
                  </div>
                )}
                {value !== 'custom' && value !== '' ? (
                  <div className="">
                    <div className="bg-indigo-100 dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md w-[100%] mb-10">
                      <div className=" flex items-center justify-between pb-6">
                        <div className="flex items-center flex-wrap gap-2 justify-between w-full ">
                          <h2
                            className="text-gray-800  dark:text-white font-semibold text-xl overflow-hidden text-ellipsis"
                            style={{
                              WebkitLineClamp: '1',
                              lineClamp: '1',
                            }}
                          >
                            {title}
                          </h2>
                          <Button
                            data-testid="removeModel"
                            variant="primary"
                            size="sm"
                            style="m-0"
                            onClick={() => {
                              removeDeleteModel();
                            }}
                          >
                            {t('Delete')}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
                          <div className="inline-block w-full lg:min-w-full shadow rounded-lg overflow-x-auto">
                            <table className="min-w-full leading-normal">
                              <thead className=" w-full px-32">
                                <tr>
                                  <th className="p-6 border-b-2 border-gray-200 bg-indigo-200 dark:bg-neutral-600 sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                                    {t('grade')}
                                  </th>
                                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-indigo-200 dark:bg-neutral-600 sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase tracking-wider">
                                    {t('Approximate Range')}
                                  </th>
                                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-indigo-200 dark:bg-neutral-600 sm:text-center text-left text-xs font-semibold text-gray-600 dark:text-white uppercase md:table-cell tracking-wider">
                                    {t('Grade Description')}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {!loading &&
                                  fileteredData?.map((item, index: any) => {
                                    const rowTheme =
                                      index % 2 !== 0
                                        ? 'bg-indigo-200 dark:bg-dark-tertiary'
                                        : 'bg-indigo-100 dark:bg-dark-bg';
                                    return (
                                      <tr
                                        className={`${rowTheme} `}
                                        key={item.grade}
                                      >
                                        <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                          <div className="flex sm:justify-center items-center">
                                            <div className="">
                                              <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                                                {item.grade}
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                          <div className="flex sm:justify-center items-center">
                                            <div className="">
                                              <p className="text-gray-900 items-center dark:text-white whitespace-no-wrap">
                                                {item.range}
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 dark:border-dark-tertiary text-sm">
                                          <div className="flex sm:justify-center items-center">
                                            <div className="">
                                              <p className="text-gray-900 text-center dark:text-white whitespace-no-wrap">
                                                {item.description}
                                              </p>
                                            </div>
                                          </div>
                                        </td>
                                      </tr>
                                    );
                                  })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GradingSystem;

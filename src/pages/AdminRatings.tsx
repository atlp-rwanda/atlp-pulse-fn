/* istanbul ignore file */
/* eslint-disable */
import React, { useState, Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hook/useDocumentTitle';
import Square from '../Skeletons/Square';
import Sidebar from '../components/Sidebar';
import { FETCH_ALL_RATINGS } from '../Mutations/Ratings';
import { phase, sprint } from '../dummyData/ratings';
import DataTable from '../components/DataTable';
import { useLazyQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';
import { Listbox, Combobox, Transition, Dialog } from '@headlessui/react';
import { gql, useQuery } from '@apollo/client';
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
import { GET_RATINGS_DATA } from '../components/TraineePerformance';

function classNames(...classes: any) {
  
  return classes.filter(Boolean).join(' ');
}

export const ExportToExcel = ({
  data,
  fileName,
}: {
  data: any[];
  fileName: string;
}) => {
  const { t } = useTranslation();
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (Data: any[], fileName: string) => {
    const ws = XLSX.utils.json_to_sheet(Data);
    // Set column widths (adjust the width values as needed)
    ws['!cols'] = [
      { wch: 35 },
      { wch: 15 },
      { wch: 15 },
      { wch: 15 },
      { wch: 15 },
      { wch: 15 },
      { wch: 20 },
      { wch: 15 },
      { wch: 15 },
    ];
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    (FileSaver as any).saveAs(data, fileName + fileExtension);
  };

  return (
    <button
      className="bg-primary hover:bg-primary text-white  font-semibold hover:text-white py-2 px-2  border border-primary hover:border-transparent rounded  "
      onClick={(e) => exportToCSV(data, fileName)}
    >
      {t('Export')}
    </button>
  );
};
const TraineeRatingDashboard = () => {
  const organizationToken = localStorage.getItem('orgToken');

  useDocumentTitle('Ratings');
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const [trainee, setTrainee] = useState<any>([]);
  const [cohorts, setCohorts] = useState<any>([]);
  const [selectedPhase, setselectedPhase] = useState(phase[0]);
  const [selectedCohort, setSelectedCohort] = useState(cohorts[0]);
  const [selectedSprint, setSelectedSprint] = useState(sprint[0]);
  const [cohortName, setCohortName] = useState({ cohortName: '' });
  const [disable, setDisable] = useState(true);
  let [isOpen, setIsOpen] = useState(false);
  const [ratingData, setRatingData] = useState({
    quality: '0',
    qualityRemark: '',
    quantity: '0',
    quantityRemark: '',
    professional: '0',
    professionalRemark: '',
    userEmail: '',
  });
  const [rows, setRows] = useState({
    quality: '0',
    qualityremark: 'no remarks',
    quantity: '0',
    quantityremark: 'no remarks',
    professional: '0',
    professionalRemark: 'no remarks',
    sprint: '0',
    user: '',
    id: '',
    cohort: '',
  });
  const [showActions, setShowActions] = useState(false);
  const [ratings, setRatings] = useState<any>([]);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeModal = () => {
    setIsOpen(false);
    setShowActions(false);
  };
  const [usedata, setUserdata] = React.useState([]);
  const fileName = 'userInfo';
  const { data, loading, error } = useQuery(GET_RATINGS_DATA, {});



 

  useEffect(() => {
    if (ratings) {
      const customHeadings = ratings.map((row: any) => ({
        Email: row.user.email,
        Quality: row.quality,
        Qualityremark: row.qualityRemark,
        Quantity: row.quantity,
        Quantityremark: row.quantityRemark,
        Professional: row.professional_Skills,
        ProfessionalRemark: row.professionalRemark,
        Sprint: row.sprint,
        Cohort: row.cohort.name,
      }));
      setUserdata(customHeadings);
    }
  }, [ratings]);


  const columns = [
    { Header: `${t('Email')}`, accessor: 'user[email]' },
    { Header: `${t('Cohort')}`, accessor: 'cohort[name]' },
    { Header: `${t('Sprint')}`, accessor: 'sprint' },
    { Header: `${t('Quantity')}`, accessor: 'quantity' },
    { Header: `${t('Quality')}`, accessor: 'quality' },
    { Header: `${t('Professional skills')}`, accessor: 'professional_Skills' },
    {
      Header: `${t('Actions')}`,
      accessor: '',
      Cell: ({ row }: any) => (
        <div className="flex flex-row">
          <div className="cursor-pointer">
            <button
              className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
              onClick={() => {
                setShowActions(!showActions);
                setRows({
                  ...rows,
                  quality: row.original.quality,
                  qualityremark: row.original.qualityRemark,
                  quantity: row.original.quantity,
                  quantityremark: row.original.quantityRemark,
                  professional: row.original.professional_Skills,
                  professionalRemark: row.original.professionalRemark,
                  sprint: row.original.sprint,
                  user: row.original.user.email,
                  id: row.original.user.id,
                  cohort: row.original.cohort.name,
                });
              }}
            >
              {t('Details')}
            </button>
          </div>
        </div>
      ),
    },
  ];

  const [getRatings] = useLazyQuery(FETCH_ALL_RATINGS, {
    variables: {
      orgToken: organizationToken,
    },
  });
  useEffect(() => {
    getRatings({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setRatings(data?.fetchAllRatings);
      },
      onError: (error) => {
        toast.error(error?.message || 'Something went wrong');
      },
    });
  }, [toggle]);

  return (
    <>
      <Transition
        appear
        show={showActions}
        as={Fragment}
        data-testid="modalTransistion"
      >
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full overflow-auto lg:mx-60 xl:mx-96 h-[800px] md:h-[600px] transform  rounded-2xl bg-white dark:bg-dark-bg p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <div className="mb-4 uppercase text-center text-lg text-bold text-primary dark:text-white">
                      <h1>{t('Detailed performance Ratings of Trainee')}</h1>
                    </div>
                    <table className="table min-w-full leading-normal overflow-auto">
                      <tr className="border-b-primary">
                        <th className="p-4 text-semibold">{t('User email')}</th>
                        <td>{rows.user}</td>
                      </tr>
                      <tr className="bg-slate-200 dark:text-slate-200 border dark:bg-dark-frame-bg border-spacing-4 border-b-white">
                        <th className="p-4 text-semibold">{t('Cohort')}</th>
                        <td>{rows.cohort}</td>
                      </tr>
                      <tr className="bg-slate-200 dark:text-slate-200  dark:bg-dark-frame-bg border border-spacing-4 border-b-white">
                        <th className="p-4 text-semibold">{t('Sprint')}</th>
                        <td>{rows.sprint}</td>
                      </tr>
                      <tr className="bg-slate-200 dark:text-slate-200  dark:bg-dark-frame-bg border border-spacing-4 border-b-white">
                        <th className="p-4 text-semibold">
                          {t('Quantity Ratings')}
                        </th>
                        <td>{rows.quantity}</td>
                      </tr>
                      <tr className="bg-slate-200 dark:text-slate-200 dark:bg-dark-frame-bg border border-spacing-4 border-b-white">
                        <th className="p-4 text-semibold">
                          {t('Quantity Remarks')}
                        </th>
                        <td>{rows.quantityremark}</td>
                      </tr>
                      <tr className="bg-slate-200 dark:text-slate-200  dark:bg-dark-frame-bg border border-spacing-4 border-b-white">
                        <th className="p-4 text-semibold">
                          {t('Quality Ratings')}
                        </th>
                        <td>{rows.quality}</td>
                      </tr>
                      <tr className="bg-slate-200 dark:text-slate-200  dark:bg-dark-frame-bg border border-spacing-4 border-b-white">
                        <th className="p-4 text-semibold">
                          {t('Quality Remarks')}
                        </th>
                        <td>{rows.qualityremark}</td>
                      </tr>
                      <tr className="bg-slate-200 dark:text-slate-200  dark:bg-dark-frame-bg border border-spacing-4 border-b-white">
                        <th className="p-4 text-semibold">
                          {t('Professionalism')}
                        </th>
                        <td>{rows.professional}</td>
                      </tr>
                      <tr className="border dark:text-slate-200  dark:bg-dark-frame-bg border-spacing-4 bg-slate-200 border-b-white">
                        <th className="p-4 text-semibold">
                          {t('Professionalism Remarks')}
                        </th>
                        <td>{rows.professionalRemark}</td>
                      </tr>
                    </table>
                    <div className="flex justify-center mt-4">
                      <button
                        className="bg-transparent text-primary font-semibold py-2 px-4 border border-primary hover:border-transparent rounded"
                        onClick={() => setShowActions(!showActions)}
                      >
                        {t('Cancel')}
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* SELECT COHORT DROPDOWN START */}
      <div className="flex flex-col h-screen bg-light-bg dark:bg-dark-frame-bg">
        <div className="flex flex-row">
          <Sidebar toggle={handleClick} style="hidden lg:flex" />
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden">
                <div className="px-3 md:px-8 mt-28">
                  {data && !loading ? (
                    <>
                      <div className="ml-60 mb-14 ">
                        <ExportToExcel data={usedata} fileName={fileName}  />
                      </div>
                      <DataTable
                        data={ratings}
                        columns={columns}
                        title={t('Performance Ratings')}
                      />
                    </>
                  ) : (
                    <div className="text-center mt-7 text-lg uppercase">
                      <Square></Square>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TraineeRatingDashboard;

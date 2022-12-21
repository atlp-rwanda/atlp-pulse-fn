/* eslint-disable */
/* istanbul ignore file */

import React, { useState, useEffect,Suspense, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Skeleton from '../components/Skeleton';
import DataTable from '../components/DataTable';
import Sidebar from '../components/Sidebar';
import useDocumentTitle from '../hook/useDocumentTitle';
import { toast } from 'react-toastify';
import{ GetAllCoordinatorUsers} from '../Mutations/Coordinator';
import { useLazyQuery, } from '@apollo/client';
const organizationToken = localStorage.getItem('orgToken');

const AdminTraineeDashboard = () => {
  useDocumentTitle('Coordinators');
  const { t }: any = useTranslation();
  const [coordinators, setCoordinators] = useState<any>([]);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

 const data = coordinators;
  const columns = [
    { Header: t('name'), accessor: 'profile[name]' },
    { Header: t('email'), accessor: 'email' },
    { Header: t('cohort'), accessor: 'cohort[name]' },
    { Header: t('program'), accessor: 'cohort[program[name]]' },
    { Header: t('manager'), accessor: 'cohort[program[manager[profile[name]]]]' },
  ];
  const [getCoordinatorsQuery] = useLazyQuery(GetAllCoordinatorUsers, {
    variables: {
      orgToken: organizationToken,
    },
  });

  /* istanbul ignore if */

  useEffect(() => {
  
    getCoordinatorsQuery({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setCoordinators(data.getAllCoordinatorUsers);
        
       
      },

      onError: (error) => {
        toast.error(error.message);
      },
    });
  }, []);
  /* istanbul ignore if */

  return (
    <>



      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <Sidebar toggle={handleClick} style="hidden lg:flex" />
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg  min-h-screen overflow-y-auto overflow-x-hidden">
                <div className="flex items-left px-10 lg:px-60 pt-24 pb-8">
                  <div className="space-x-8 lg:ml-7">
                    {/* Nothing here */}
                  </div>
                </div>

                <div className="px-3 md:px-8">

                
                {data.length !== 0 ? (

        <Suspense fallback={<Skeleton />}>
                          <DataTable
                            data={data}
                            columns={columns}
                            title={t('List of coordinators')}
                          />

                          </Suspense>
                          ) : (

                            <div className="text-center mt-7 text-lg uppercase">
                              <p> {t('No coordinator found')}</p>
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

export default AdminTraineeDashboard;

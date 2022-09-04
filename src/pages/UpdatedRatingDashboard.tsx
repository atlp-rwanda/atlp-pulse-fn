/* eslint-disable */
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../components/DataTable';
import Sidebar from '../components/Sidebar';
import useDocumentTitle from '../hook/useDocumentTitle';
import Button from './../components/Buttons';
import { REJECT_RATING, APPROVE_RATING } from '../Mutations/Ratings';
import { useLazyQuery, useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { toast } from 'react-toastify';

const organizationToken = localStorage.getItem('orgToken');
const UpdatedRatingDashboard = () => {
  useDocumentTitle('Updated Ratings');
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [approveModel, setApproveModel] = useState(false);
  const [rejectModel, setRejectModel] = useState(false);
  const [ratings, setRatings] = useState<any>([]);
  const [rows, setRows] = useState({
    user: '',
    id: '',
    sprint: ''
  });
  const GET_USERS = gql`
  query Query($orgToken: String) {
    fetchRatingsForAdmin(orgToken: $orgToken) {
      sprint
      quantity
      quantityRemark
      quality
      qualityRemark
      professional_Skills
      professionalRemark
      user {
        id
        role
        email
      }
    }
  }
  `;

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const removeApproveModel = () => {
    let newState = !approveModel;
    setApproveModel(newState);
  };

  const removeRejectModel = () => {
    let newState = !rejectModel;
    setRejectModel(newState);
  };
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const data = ratings;
  const columns = [
    { Header: `${t('Name')}`, accessor: 'user[email]' },
    { Header: `${t('Sprint')}`, accessor: 'sprint' },
    { Header: `${t('Quantity')}`, accessor: 'quantity' },
    { Header: `${t('Quality')}`, accessor: 'quality' },
    { Header: `${t('Professional skills')}`, accessor: 'professional_Skills' },
    {
      Header: `${t('Actions')}`,
      accessor: '',
      Cell: ({ row }: any) => (
        <div className="flex flex-row justify-around">
          <div className="cursor-pointer my-auto">
            <Icon
              icon="teenyicons:tick-circle-solid"
              color="#8EB95D"
              width="20"
              height="20"
              onClick={() => {
                setRows({
                  ...rows,
                  user: row.original.user.email,
                  id: row.original.user.id,
                  sprint: row.original.sprint
                });
                setApproveModel(!approveModel);
              }}
            />
          </div>
          <div className="cursor-pointer">
            <Icon
              icon="ic:sharp-cancel"
              color="#F08080"
              width="24"
              height="24"
              onClick={() => {
                setRows({
                  ...rows,
                  user: row.original.user.email,
                  id: row.original.user.id,
                  sprint: row.original.sprint
                });
                setRejectModel(!rejectModel);
              }}
            />
          </div>
        </div>
      ),
    },
  ];

  const [getRatings] = useLazyQuery(GET_USERS, {
    variables: {
      orgToken: organizationToken,
    },
  });
  const [approveRating] = useMutation(APPROVE_RATING, {
    variables: {
      user: rows.id,
      sprint: rows.sprint
    },
    onError: (err) => {
      toast.error('something went wrong');
      removeApproveModel();
    },
    onCompleted: (data) => {
      toast.success('Successfully approved');
      removeApproveModel();
      handleToggle();
    },
  });
  const [rejectRating] = useMutation(REJECT_RATING, {
    variables: {
      user: rows.id,
      sprint: rows.sprint
    },
    onError: (err) => {
      toast.error('something went wrong');
      removeRejectModel();
    },
    onCompleted: (data) => {
      toast.success('Successfully rejected!');
      removeRejectModel();
      handleToggle();
    },
  });
  useEffect(() => {
    getRatings({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setRatings(data.fetchRatingsForAdmin);
        handleToggle()
      },
      onError: (error) => {
        toast.error(error?.message || 'Something went wrong');
      },
    });
  }, [toggle]);

  return (
    <>
      {/* =========================== Start::  approveModel =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute  flex items-center justify-center px-4 ${
          approveModel ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Approve updated ratings')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white m-4">
                  {t('Are you sure you want to approve this updated ratings ?')} ?
                </h2>
              </div>
              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeApproveModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => removeApproveModel()}
                >
                  {' '}
                  {t('Cancel')}{' '}
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => approveRating()}
                >
                  {t('Approve')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  approveModel =============================== */}

      {/* =========================== Start::  rejectModel =============================== */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          rejectModel === true ? 'block' : 'hidden'
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm dark:text-white text-center w-11/12">
              {t('Reject Updated ratings')}
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-base dark:text-white m-4">
                  {t('Are you sure you want to reject this updated ratings')} ?
                </h2>
              </div>
              <div className="w-full flex justify-between">
                <Button
                  data-testid="removeRejectModel"
                  variant="info"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => removeRejectModel()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  onClick={() => rejectRating()}
                >
                  {t('Reject')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* =========================== End::  rejectModel =============================== */}

      <div className="flex flex-col h-screen bg-light-bg">
        <div className="flex flex-row">
          <Sidebar toggle={handleClick} style="hidden lg:flex" />
          <div className="w-full">
            <div>
              <div className="bg-light-bg dark:bg-dark-frame-bg min-h-screen overflow-y-auto overflow-x-hidden">
                <div className="px-3 md:px-8 mt-20">
                  {data?.length !== 0 ? (
                    <DataTable
                      data={data}
                      columns={columns}
                      title={t("Performance Ratings")}
                    />
                  ) : (
                    <div className='text-center mt-7 text-lg uppercase'>
                      <p> {t('No updated ratings found')}</p>
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

export default UpdatedRatingDashboard;

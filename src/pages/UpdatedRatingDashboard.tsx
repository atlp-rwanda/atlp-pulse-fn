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
    sprint: '',
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
        cohort {
          name
        }
      }
    }
  `;
  /* istanbul ignore next */
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
  /* istanbul ignore next */
  const handleClick = () => setNav(!nav);
  const data = ratings;
  /* istanbul ignore next */
  const columns = [
    { Header: `${t('Name')}`, accessor: 'user[email]' },
    { Header: `${t('Sprint')}`, accessor: 'sprint' },
    { Header: `${t('Quantity')}`, accessor: 'quantity' },
    { Header: `${t('Quality')}`, accessor: 'quality' },
    { Header: `${t('Professional skills')}`, accessor: 'professional_Skills' },
    {
      Header: `${t('Actions')}`,
      accessor: '',
      /* istanbul ignore next */
      Cell: ({ row }: any) => (
        /* istanbul ignore next */
        <div className="flex relative flex-row align-middle  justify-center items-center">
          <div
            data-testid="updateIcon"
            onClick={() => {
              setRows({
                ...rows,
                user: row.original.user.email,
                id: row.original.user.id,
                sprint: row.original.sprint,
              });
              setApproveModel(!approveModel);
            }}
          >
            <Icon
              icon="teenyicons:tick-circle-solid"
              className="mr-2"
              width="25"
              height="25"
              cursor="pointer"
              color="#148fb6"
            />
          </div>

          <div
            data-testid="deleteIcon"
            onClick={() => {
              setRows({
                ...rows,
                user: row.original.user.email,
                id: row.original.user.id,
                sprint: row.original.sprint,
              });
              setRejectModel(!rejectModel);
            }}
          >
            <Icon
              icon="mdi:close-circle-outline"
              width="30"
              height="30"
              cursor="pointer"
              color="#148fb6"
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
      sprint: rows.sprint,
    },
    onError: (err) => {
      toast.error(err.message || 'something went wrong');
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
      sprint: rows.sprint,
    },
    /* istanbul ignore next */
    onError: (err) => {
      toast.error(err.message || 'something went wrong');
      removeRejectModel();
    },
    /* istanbul ignore next */
    onCompleted: (data) => {
      toast.success('Successfully rejected!');
      removeRejectModel();
      handleToggle();
    },
  });
  /* istanbul ignore next */
  useEffect(() => {
    getRatings({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setRatings(data.fetchRatingsForAdmin);
        handleToggle();
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
                  {t('Are you sure you want to approve this updated ratings ?')}{' '}
                  ?
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
                  /* istanbul ignore next */
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
                      title={t('Performance Ratings')}
                    />
                  ) : (
                    <div className="text-center mt-48 text-lg uppercase">
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

/* eslint-disable */
import React, { useEffect, Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Buttons';
import { useNavigate } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io';
import { GET_USERS } from '../Mutations/Ratings';
import {
  ADD_REPLY,
  GET_REPLIES,
  REMOVE_REPLY,
  UPDATE_TO_REPLY,
} from '../Mutations/replyMutation';
import { phase, cohort, sprint, people as trainee } from '../dummyData/ratings';
import { useLazyQuery, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { Transition, Dialog } from '@headlessui/react';
import { gql } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { dataItem } from 'react-widgets/cjs/Accessors';
const TraineePerfomanceDetails = () => {
  const navigate = useNavigate();
  const organizationToken = localStorage.getItem('orgToken');
  const [replyData, setReplyData] = useState({
    userEmail: '',
    bodyQuantity: '',
    bodyQuality: '',
    bodyProfessional: '',
    id: '',
  });
  const [rows, setRows] = useState({
    user: '',
    bodyQuantity: '',
    bodyQuality: '',
    bodyProfessional: '',
    id: '',
  });

  const [trainee, setTrainee] = useState<any>([]);
  const [selectedTrainee, setSelectedTrainee] = useState(trainee[0]);
  const [coordinator, setCoordinator] = useState({ coordinator: '' });

  const [nav, setNav] = useState();
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);
  let [isOpen3, setIsOpen3] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [ratings, setRatings] = useState<any>([]);
  useEffect(() => {
    const data: any = sessionStorage.getItem('data');
    const getData = JSON.parse(data);
    setRatings(getData);
  }, []);

  const closeModel = () => {
    setIsOpen(false);
    setShowActions(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const openModalQuality = () => {
    setIsOpen2(true);
  };
  const openModalProfessional = () => {
    setIsOpen3(true);
  };
  const handleUpdate = (e: any) => {
    e.preventDefault();
    updateToReply();
    handleToggle();
    closeModel();
  };
  const handleClick = () => setNav(nav);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleToggle();
    updateToReply();
    closeModel();
  };
  const [updateToReply] = useMutation(UPDATE_TO_REPLY, {
    variables: {
      user: ratings.user_id,
      sprint: ratings.user_sprint,
      bodyQuantity: rows?.bodyQuantity,
      bodyQuality: rows?.bodyQuality,
      bodyProfessional: rows?.bodyProfessional,
      orgToken: organizationToken,
    },
    onError: (err) => {
      toast.error('Unable to proceed');
      openModal();
    },
    onCompleted: ({ updateToReply }) => {
      handleToggle();
      toast.success('Reply sent successfully');
    },
  });
  const [createReply] = useMutation(ADD_REPLY, {
    variables: {
      user: ratings.user_id,
      sprint: ratings.user_sprint,
      bodyQuantity: rows.bodyQuantity.toString(),
      bodyQuality: rows.bodyQuality.toString(),
      bodyProfessional: rows.bodyProfessional.toString(),
    },
    onError: (err) => {
      toast.error('Unable to procced');
    },
    onCompleted: ({ createReply }) => {
      handleToggle();
      toast.success('Reply sent successfully');
    },
  });
  const [getUsers] = useLazyQuery(GET_USERS, {
    variables: {
      email: coordinator,
    },
  });

  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-neutral-100  dark:bg-dark-frame-bg md:flex sm:hidden flex-col justify-start items-center ">
        <table className="lg:w-9/12 md:w-11/12 lg:h-[70%] md:h-[60%] md:ml-0 lg:ml-32 dark:bg-dark-bg shadow-lg px-5 py-8 rounded-md mt-32 ">
          <thead>
            <tr className="text-gray-300  bg-gray-100  dark:bg-dark-tertiary">
              <th className="lg:py-3 md:py-2 lg:px-3 md:px-2  text-left  text-[#6B7280] dark:text-dark-text-fill ">
                {t('Metric')}
              </th>
              <th className="lg:py-3 md:py-2 lg:px-10 md:px-7 text-center text-[#6B7280] dark:text-dark-text-fill">
                {t('Grade')}
              </th>
              <th className="lg:py-3 md:py-2 text-left text-[#6B7280] dark:text-dark-text-fill">
                {t('Remarks')}
              </th>
              <th className="lg:py-3 md:py-2"></th>
            </tr>
          </thead>
          <tbody className=" text-center ">
            <tr className="text-light-text dark:text-dark-text-fill bg-light-bg dark:bg-dark-bg ">
              <td className="lg:py-10 md:py-0 px-10 text-left  ">
                {t('Quantity')}
              </td>
              <td className="py-3 ">{ratings.quantity}</td>
              <td className="lg:py-6 md:py-3 text-start lg:text-sm">
                {ratings?.quantity_remark}
              </td>

              <td className="py-3 px-8">
                <Button
                  variant="primary"
                  size="sm"
                  style="px-4 py-0 text-sm"
                  onClick={openModal}
                >
                  {t('Reply')}
                </Button>
              </td>
            </tr>
            <tr className="text-black dark:text-dark-text-fill bg-gray-100 dark:bg-dark-tertiary ">
              <td className="py-10 px-10 text-left">{t('Quality')}</td>
              <td className="py-3 ">{ratings.quality}</td>
              <td className="py-3  text-start text-sm">
                {ratings?.quality_remark}
              </td>
              <td className="py-3 ">
                <Button
                  variant="primary"
                  size="sm"
                  style="px-4 py-0 text-sm"
                  onClick={openModalQuality}
                >
                  {t('Reply')}
                </Button>
              </td>
            </tr>
            <tr className="text-black dark:text-dark-text-fill bg-light-bg dark:bg-dark-bg ">
              <td className="py-10 px-10 text-left">
                {t('Professional skills')}
              </td>
              <td className="py-3 ">{ratings.professional}</td>
              <td className="py-3  text-start text-sm">
                {ratings?.professional_remark}
              </td>
              <td className="py-3">
                <Button
                  variant="primary"
                  size="sm"
                  style="px-4 py-0 text-sm"
                  onClick={openModalProfessional}
                >
                  {t('Reply')}
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* This is my modal for quantity remark */}
      <Transition
        appear
        show={isOpen}
        as={Fragment}
        data-testid="modalTransistion"
      >
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
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
                <Dialog.Panel className=" bg-white dark:bg-dark-bg shadow-lg px-5 py-4 rounded-md w-[90%] mx-auto lg:w-[65%] lg:ml-90 mb-10 mt-10">
                  <form onSubmit={handleUpdate}>
                    <Dialog.Title
                      as="h3"
                      className=" font-medium content-center  text-gray-900 dark:text-dark-text-fill"
                    >
                      {t('Reply on Quantity Remarks')}
                    </Dialog.Title>
                    <div className="mt-4 md:mt-8">
                      <div className="w-2/3 flex flex-col border border-gray-200 mb-4 float-left rounded-tr-lg rounded-bl-lg">
                        <div className="m-8">
                          <p className="float-left">
                            {ratings?.quantity_remark}
                          </p>
                        </div>
                        <div className="ml-9 text-primary ">
                          <h3 className="float-left">{/* 30/09/2022 */}</h3>
                        </div>
                      </div>
                      <div className="w-full flex flex-col border border-gray-400 rounded-md">
                        <div className="m-4">
                          <div className=" ">
                            <input
                              value={rows.bodyQuantity}
                              onChange={(e) =>
                                setRows({
                                  ...rows,
                                  bodyQuantity: e.target.value,
                                })
                              }
                              className="w-full bg-inherit px-2 outline-0"
                              type="text"
                              placeholder="Type a reply ..."
                            />
                            <button
                              className="flex mt-2 bg-primary px-4 md:py-2 sm:py-1 rounded-tl-lg rounded-br-lg md:mt-3 text-white font-semibold cursor-pointer float-right"
                              onClick={handleSubmit}
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-dark-bg">
                        <button
                          onClick={closeModel}
                          className="flex mt-2 bg-primary px-4 md:py-2 sm:py-1 md:mt-3 rounded-md text-white font-semibold cursor-pointer"
                        >
                          {t('Close')}
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* The end of my modal for quantity*/}

      {/* This is my modal  for quality remark*/}
      <Transition
        appear
        show={isOpen2}
        as={Fragment}
        data-testid="modalTransistion"
      >
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
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
                <Dialog.Panel className=" bg-white dark:bg-dark-bg shadow-lg px-5 py-4 rounded-md w-[90%] mx-auto lg:w-[65%] lg:ml-90 mb-10 mt-10">
                  <form onSubmit={handleUpdate}>
                    <Dialog.Title
                      as="h3"
                      className=" font-medium content-center  text-gray-900 dark:text-dark-text-fill"
                    >
                      {t('Reply on Quality Remarks')}
                    </Dialog.Title>
                    <div className="mt-4 md:mt-8">
                      <div className="w-2/3 flex flex-col border border-gray-200 mb-4 float-left rounded-tr-lg rounded-bl-lg">
                        <div className="m-8">
                          <p className="float-left">
                            {ratings?.quality_remark}
                          </p>
                        </div>
                        <div className="ml-9 text-primary ">
                          <h3 className="float-left">
                            {/* {ratings?.createdAt} */}
                          </h3>
                        </div>
                      </div>
                      <div className="w-full flex flex-col border border-gray-400 rounded-md">
                        <div className="m-4">
                          <div className=" ">
                            <input
                              value={rows.bodyQuality}
                              onChange={(e) =>
                                setRows({
                                  ...rows,
                                  bodyQuality: e.target.value,
                                })
                              }
                              className="w-full bg-inherit px-2 outline-0"
                              type="text"
                              placeholder="Type a reply ..."
                            />
                            <button
                              className="flex mt-2 bg-primary px-4 md:py-2 sm:py-1 rounded-tl-lg rounded-br-lg md:mt-3 text-white font-semibold cursor-pointer float-right"
                              onClick={handleSubmit}
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-dark-bg">
                        <button
                          onClick={closeModel}
                          className="flex mt-2 bg-primary px-4 md:py-2 sm:py-1 md:mt-3 rounded-md text-white font-semibold cursor-pointer"
                        >
                          {t('Close')}
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* The end of my modal for quality remarks */}

      {/* This is my modal  for professional remark*/}
      <Transition
        appear
        show={isOpen3}
        as={Fragment}
        data-testid="modalTransistion"
      >
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
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
                <Dialog.Panel className=" bg-white dark:bg-dark-bg shadow-lg px-5 py-4 rounded-md w-[90%] mx-auto lg:w-[65%] lg:ml-90 mb-10 mt-10">
                  <form onSubmit={handleUpdate}>
                    <Dialog.Title
                      as="h3"
                      className=" font-medium content-center  text-gray-900 dark:text-dark-text-fill"
                    >
                      {t('Reply on Professional Remarks')}
                    </Dialog.Title>
                    <div className="mt-4 md:mt-8">
                      <div className="w-2/3 flex flex-col border border-gray-200 mb-4 float-left rounded-tr-lg rounded-bl-lg">
                        <div className="m-8">
                          <p className="float-left">
                            {ratings?.professional_remark}
                          </p>
                        </div>
                        <div className="ml-9 text-primary ">
                          <h3 className="float-left">{/* 30/09/2022 */}</h3>
                        </div>
                      </div>
                      <div className="w-full flex flex-col border border-gray-400 rounded-md">
                        <div className="m-4">
                          <div className=" ">
                            <input
                              value={rows.bodyProfessional}
                              onChange={(e) =>
                                setRows({
                                  ...rows,
                                  bodyProfessional: e.target.value,
                                })
                              }
                              className="w-full bg-inherit px-2 outline-0"
                              type="text"
                              placeholder="Type a reply ..."
                            />
                            <button
                              className="flex mt-2 bg-primary px-4 md:py-2 sm:py-1 rounded-tl-lg rounded-br-lg md:mt-3 text-white font-semibold cursor-pointer float-right"
                              onClick={handleSubmit}
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-dark-bg">
                        <button
                          onClick={closeModel}
                          className="flex mt-2 bg-primary px-4 md:py-2 sm:py-1 md:mt-3 rounded-md text-white font-semibold cursor-pointer"
                        >
                          {t('Close')}
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* The end of my modal for professional remarks */}
      <div className="sm:flex sm:flex-col md:hidden justify-center items-center bg-light-bg dark:bg-dark-frame-bg dark:text-white  text-black">
        <div className="flex flex-col justify-center items-start w-full py-4 px-4 ml-4 mt-4">
          <h2 className="font-semibold mt-12 text-center text-[#6B7280]">
            Trainee Performance
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center w-11/12 border shadow rounded-lg dark:border-dark-frame-bg bg-white  dark:bg-dark-bg pb-4 mt-4 pt-16">
          <table className=" rounded-lg w-7/12 h-[70%] overflow-hidden  md:shadow mt-[-40px]">
            <thead>
              <tr className="text-gray-300 dark:text-white  bg-gray-100 dark:bg-dark-tertiary ">
                <th className="py-2 px-3 text-center text-[#6B7280] dark:text-dark-text-fill ">
                  {t('Metric')}
                </th>
                <th className="py-2 px-10 text-center text-[#6B7280] dark:text-dark-text-fill">
                  {t('Quantity')}
                </th>
              </tr>
            </thead>
            <tbody className=" text-center">
              <tr className="text-light-text bg-light-bg dark:bg-dark-bg dark:text-dark-text-fill  ">
                <td className="py-3 px-10">{'Grade'}</td>
                <td className=" ">1</td>
              </tr>
              <tr className="text-black bg-gray-100 dark:bg-dark-tertiary dark:text-dark-text-fill  ">
                <td className="py-10 px-10 text-left">{t('Remark')}</td>
                <td className="py-3  text-start text-sm">
                  {ratings?.quantity_remark}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="px-4 py-1 ml-40 mt-4 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm"
            onClick={openModal}
          >
            {t('Reply')}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-11/12 border shadow rounded-lg dark:border-dark-frame-bg bg-white dark:bg-dark-bg  pb-4 mt-4 pt-16">
          <table className=" rounded-lg w-7/12 h-[70%] overflow-hidden  md:shadow mt-[-40px]">
            <thead>
              <tr className="text-gray-300 dark:text-dark-text-fill bg-gray-100 dark:bg-dark-tertiary">
                <th className="py-2 px-3 text-center text-[#6B7280] dark:text-dark-text-fill  ">
                  {t('Metric')}
                </th>
                <th className="py-2 px-10 text-center text-[#6B7280] dark:text-dark-text-fill">
                  {t('Quality')}
                </th>
              </tr>
            </thead>
            <tbody className=" text-center">
              <tr className="text-light-text bg-light-bg dark:bg-dark-bg dark:text-dark-text-fill ">
                <td className="py-3 px-10">{t('Grade')}</td>
                <td className=" ">1</td>
              </tr>
              <tr className="text-black bg-gray-100 dark:bg-dark-tertiary dark:text-dark-text-fill  ">
                <td className="py-10 px-10 text-left">{t('Remark')}</td>
                <td className="py-3  text-start text-sm">
                  {ratings?.quality_remark}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="px-4 py-1 ml-40 mt-4 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm"
            onClick={openModal}
          >
            {t('Reply')}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center w-11/12 border shadow rounded-lg dark:border-dark-frame-bg bg-white dark:bg-dark-bg  pb-4 mt-4 pt-16">
          <table className=" rounded-lg w-7/12 h-[70%] overflow-hidden  md:shadow mt-[-40px]">
            <thead>
              <tr className="text-gray-300  bg-gray-100 dark:bg-dark-tertiary ">
                <th className="py-2 px-0 text-center text-[#6B7280] dark:text-dark-text-fill ">
                  {t('Metric')}
                </th>
                <th className="py-4 px-10 text-justify  text-[#6B7280] dark:text-dark-text-fill">
                  {t('Professional skills')}
                </th>
              </tr>
            </thead>
            <tbody className=" text-center">
              <tr className="text-light-text bg-light-bg dark-bg dark:bg-dark-bg dark:text-dark-text-fill ">
                <td className="py-3 px-10">{t('Grade')}</td>
                <td className=" "></td>
              </tr>
              <tr className="text-black bg-gray-100 dark:bg-dark-tertiary dark:text-dark-text-fill ">
                <td className="py-10 px-10 text-left">{t('Remark')}</td>
                <td className="py-3  text-start text-sm">
                  {ratings?.professional_remark}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="px-4 py-1 ml-40 mt-4 rounded-md dark:text-dark-text-fill text-center bg-primary text-white  text-sm"
            onClick={openModal}
          >
            {t('Reply')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TraineePerfomanceDetails;

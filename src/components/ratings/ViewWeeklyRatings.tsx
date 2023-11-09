/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* istanbul ignore file */

import React, { useEffect, useState } from 'react';
import { Dialog } from '@mui/material';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useLazyQuery, useMutation } from '@apollo/client';
import AddNewRatings from './AddNewRatings';
import Dropout from './Dropout';
import useViewTraineeRatings from './hooks/useViewTraineeRatings';
import Button from '../Buttons';
import { UPDATE_RATING } from '../../Mutations/Ratings';
import { DEFAULT_GRADE } from '../../Mutations/MakeDefault';

function ViewSprintRatings({
  traineeName,
  traineeEmail,
  traineeId,
  traineeCohort,
  traineeStatus,
}: any) {
  const [selectSprint, setSelectSprint] = useState<number | null>(null);
  const [openModel, setOpenModel] = useState<boolean>(true);
  const [editRatingFormVisible, setEditRatingFormVisible] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');
  const [defaultGrading, setDefaultGrading] = useState<any[]>([]);
  const [loggedUserRole, setloggedUser] = useState(null);

  const [showActions, setShowActions] = useState(false);
  const navigate = useNavigate();
  const {
    onClose,
    t,
    maxSprint,
    selectViewSprint,
    setSelectViewSprint,
    currentSprint,
    sprintOptions,
    selectedSprintRatings,
    deviceWidth,
    successMessage,
    setViewAddNewRating,
    viewAddNewRating,
    organizationToken,
    refetch,
    setSuccessMessage,
    loading,
  } = useViewTraineeRatings({ traineeEmail, selectSprint, setOpenModel });

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    DefaultGrade({
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        setDefaultGrading(data?.getDefaultGrading[0]?.grade);
      },

      onError: (error) => {
        toast.error(error?.message || 'Failed to load the data');
      },
    });

    const storedAuth = localStorage.getItem('auth');

    if (storedAuth) {
      const auth = JSON.parse(storedAuth);
      const { role } = auth;
      if (role) {
        setloggedUser(role);
      }
    }
  }, []);

  const [DefaultGrade] = useLazyQuery(DEFAULT_GRADE, {});
  const [updateRatings, { loading: updateRatingLoading, data, error }] =
    useMutation(UPDATE_RATING);

  const openEditRatingForm = () => {
    setEditRatingFormVisible(true);
  };

  const [rows, setRows] = useState<any>({});

  useEffect(() => {
    if (maxSprint > 0 && selectedSprintRatings) {
      const ratingChosen: any = selectedSprintRatings[0];
      setRows({
        quality: ratingChosen.quality,
        qualityremark: '',
        quantity: ratingChosen.quantity,
        quantityremark: '',
        feedback: '',
        professional: ratingChosen.professional_Skills,
        professionalRemark: '',
        bodyQuantity: '',
        bodyQuality: '',
        bodyProfessional: ratingChosen.professionalRemark,
        sprint: ratingChosen.sprint,
        username: '',
        user: {},
        id: '',
      });
    }
  }, [editRatingFormVisible]);

  useEffect(() => {
    if (updateMessage) {
      const time = setTimeout(() => {
        setUpdateMessage('');
      }, 1500);
    }
  }, [updateMessage]);

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    try {
      const ratingsData = {
        user: traineeId,
        sprint: rows.sprint,
        quantity: rows?.quantity,
        quantityRemark: rows?.quantityremark,
        quality: rows?.quality,
        qualityRemark: rows?.qualityremark,
        professionalSkills: rows?.professional,
        professionalRemark: rows?.professionalRemark,
        orgToken: organizationToken,
      };
      await updateRatings({ variables: { ...ratingsData } });

      setUpdateMessage('Rating updated successfully');
    } catch (error: any) {
      toast.error(error.message || 'something went wrong');
      setShowActions(true);
    }
    setEditRatingFormVisible(false);
    setUpdateMessage('Waiting for the Admin to Approve');
    setOpenModel(true);
  };
  return (
    <Dialog open={openModel} onClose={onClose}>
      <div className="flex flex-col border-black w-full bg-[#E0E7FF] dark:bg-[#4B4B4B] px-8">
        <div className=" relative py-8 ">
          <h3 className="w-11/12 text-[16px] font-bold text-center dark:text-white">
            {t('Trainee')} : {traineeName}
          </h3>
          <h1
            className="absolute right-0 top-2 text-red-500   transform rotate-45 w-120 h-120 text-5xl cursor-pointer"
            onClick={() => {
              navigate('/trainees');
            }}
          >
            +
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[#5F49AC] dark:text-[#C7B9F9] font-semibold">
            {t('Sprint Ratings')}
          </h1>
          <div className="">
            {maxSprint !== 0 ? (
              <div className="flex gap-4 rounded-2xl border-[#707070] border-2 w-fit px-4">
                <button
                  type="button"
                  onClick={() =>
                    maxSprint !== 0
                      ? setSelectViewSprint(!selectViewSprint)
                      : setSelectViewSprint(false)
                  }
                  className="inline-flex font-light justify-center w-full rounded-md "
                >
                  {currentSprint}
                  <svg
                    className="-mr-1 ml-3 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              ''
            )}

            {selectViewSprint ? (
              <div className="fixed mt-1 w-56 rounded-md shadow-lg bg-white z-99">
                <div className="py-1">
                  {sprintOptions.map((sprint) => (
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    <p
                      key={sprint}
                      onClick={() => {
                        setSelectSprint(sprint);
                        setSelectViewSprint(!selectViewSprint);
                      }}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                    >
                      Sprint {sprint}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
        {maxSprint !== 0 ? (
          <div>
            {selectedSprintRatings?.map((rating: any) => (
              <div key={rating.sprint} className="py-6 ">
                <div className="rounded-[15px] shadow-lg overflow-hidden bg-white w-full">
                  {deviceWidth <= 580 ? (
                    <table className="w-full">
                      <tbody className="bg-[#F5F8FF] dark:bg-[#868686] dark:text-black">
                        <tr>
                          <th className="px-6 py-2 text-left">Sprint</th>
                          <th className="px-6 py-2">Sprint {rating.sprint}</th>
                        </tr>
                      </tbody>
                      <tbody className=" bg-white dark:bg-[#202020] dark:text-white">
                        <tr className="border-t-[#C7C7C7]">
                          <td className="px-6 py-2 text-left border-t-[#C7C7C7]">
                            {t('Quality')}
                          </td>
                          <td className="px-6 py-2 text-center border-t-[#C7C7C7]">
                            {rating.quality}
                          </td>
                        </tr>
                      </tbody>
                      <tbody className=" bg-white dark:bg-[#202020] dark:text-white ">
                        <tr className="border-t-[#C7C7C7]">
                          <td className="px-6 py-2 text-left border-t-[#C7C7C7]">
                            {t('Quantity')}
                          </td>
                          <td className="px-6 py-2 text-center  border-t-[#C7C7C7]">
                            {rating.quantity}
                          </td>
                        </tr>
                      </tbody>
                      <tbody className=" bg-white dark:bg-[#202020] dark:text-white ">
                        <tr className="border-t-[#C7C7C7]">
                          <td className="px-6 py-2 text-left border-t-[#C7C7C7]">
                            {t('Professionalism')}
                          </td>
                          <td className="px-6 py-2 text-center">
                            {rating.professional_Skills}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    <table className="w-full">
                      <tbody className="bg-[#F5F8FF] dark:bg-[#868686] dark:text-black">
                        <tr>
                          <th className="px-6 py-2">Sprint</th>
                          <th className="px-6 py-2">{t('Quality')}</th>
                          <th className="px-6 py-2">{t('Quantity')}</th>
                          <th className="px-3 py-2 ">{t('Professionalism')}</th>
                        </tr>
                      </tbody>
                      <tbody className=" bg-white dark:bg-[#202020] dark:text-white">
                        <tr className="border-t-[#C7C7C7]">
                          <td className="px-6 py-2 text-center border-t-[#C7C7C7]">
                            Sprint {rating.sprint}
                          </td>
                          <td className="px-6 py-2 text-center border-t-[#C7C7C7]">
                            {rating.quality}
                          </td>
                          <td className="px-6 py-2 text-center border-t-[#C7C7C7]">
                            {rating.quantity}
                          </td>
                          <td className="px-6 py-2 text-center">
                            {rating.professional_Skills}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
                <div className="pt-6 flex gap-4">
                  {t('Feedback')} :
                  <div>
                    {rating.feedbacks.length !== 0
                      ? rating.feedbacks[0].content
                      : 'No feedback provided'}
                  </div>
                </div>
              </div>
            ))}
            <div />
          </div>
        ) : (
          <div className="md:w-[466px] p-3 flex justify-center items-end">
            {loading ? (
              <p>Loading ...</p>
            ) : (
              <p>There are no Ratings Available</p>
            )}
          </div>
        )}

        {traineeStatus.status === 'active' ? (
          <div>
            <div
              className={` ${
                updateMessage || successMessage
                  ? 'flex justify-between'
                  : 'flex justify-end'
              } py-4`}
            >
              {updateMessage || successMessage ? (
                <p className="text-green-500 text-[20px]">
                  {updateMessage || successMessage}
                </p>
              ) : (
                ''
              )}
            </div>
            <div>
              {!viewAddNewRating &&
                !editRatingFormVisible &&
                loggedUserRole === 'coordinator' && (
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    style="inline-flex justify-center float-left rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    onClick={openEditRatingForm}
                  >
                    {t('Edit Rating')}
                  </Button>
                )}
            </div>
            <div>
              {!viewAddNewRating &&
                !editRatingFormVisible &&
                loggedUserRole === 'coordinator' && (
                  <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    style="inline-flex justify-center float-right rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    onClick={() => setViewAddNewRating(true)}
                  >
                    {t('Add Rating')}
                  </Button>
                )}
            </div>
          </div>
        ) : (
          <Dropout traineeStatus={traineeStatus} />
        )}

        {editRatingFormVisible && maxSprint !== 0 && (
          <form onSubmit={handleUpdate}>
            <hr className="bg-[#868686] h-[2px]" />
            <h1 className="text-[#5F49AC] dark:text-[#C7B9F9] font-semibold">
              {t('Update Rating')}
            </h1>
            <div className=" my-2 mt-6 md:mt-4 flex flex-col gap-3 md:flex-row ">
              <div className=" w-40 h-28 flex flex-col gap-2 md:flex-col justify-start items-center ">
                <div className="w-full font-medium">{t('Quality')}:</div>
                <select
                  name="quality"
                  value={rows.quality}
                  onChange={(e) => {
                    setRows({
                      ...rows,
                      quality: e.target.value,
                    });
                  }}
                  id="qualityRating"
                  className="rounded-md appearance-none relative block w-full px-0 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
                >
                  <option value="-1" disabled>
                    {t('Select rating')}
                  </option>
                  <>
                    {defaultGrading?.map((grade: any) => (
                      <option key={grade}>{grade}</option>
                    ))}
                  </>
                </select>
              </div>
              <div className="w-40 h-28 flex flex-col gap-2 md:flex-col justify-start items-center  ">
                <div className="w-full font-medium">{t('Quantity')}:</div>
                <select
                  name="quantity"
                  id="quantityRating"
                  value={rows.quantity}
                  onChange={(e) =>
                    setRows({
                      ...rows,
                      quantity: e.target.value,
                    })
                  }
                  className="rounded-md appearance-none relative block w-full px-0 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
                >
                  <option value="-1" disabled>
                    {t('Select rating')}
                  </option>
                  <>
                    {defaultGrading?.map((grade: any) => (
                      <option key={grade}>{grade}</option>
                    ))}
                  </>
                </select>
              </div>
              <div className="w-40 h-28 flex flex-col gap-2 md:flex-col justify-start items-center ">
                <div className="w-full font-medium">
                  {t('Professionalism')}:
                </div>
                <select
                  name="professional"
                  id="propfessionalismRating"
                  value={rows.professional}
                  onChange={(e) =>
                    setRows({
                      ...rows,
                      professional: e.target.value,
                    })
                  }
                  className="rounded-md appearance-none relative block w-full px-0 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
                >
                  <option value="-1" disabled>
                    {t('Select rating')}
                  </option>
                  <>
                    {defaultGrading?.map((grade: any) => (
                      <option key={grade}>{grade}</option>
                    ))}
                  </>
                </select>
              </div>
            </div>
            <div className="">
              <h1 className="pb-3 font-medium">{t('Feedback')}</h1>
              <textarea
                name="Feedback"
                value={rows.professionalRemark}
                onChange={(e) =>
                  setRows({
                    ...rows,
                    professionalRemark: e.target.value,
                  })
                }
                className="h-32 w-full dark:bg-[#6F6F6F] rounded-xl px-3 py-2"
                placeholder="Feedback in general about performance"
              />

              <div className="mt-4 md:mt-8 flex justify-end">
                <Button
                  type="button"
                  variant="primary"
                  size="sm"
                  style="inline-flex justify-center float-right rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  onClick={() => {
                    onClose();
                  }}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  style="inline-flex justify-center float-left rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  loading={updateRatingLoading}
                >
                  {t('Submit')}
                </Button>
              </div>
            </div>
          </form>
        )}
        <AddNewRatings
          viewAddNewRating={viewAddNewRating}
          t={t}
          setViewAddNewRating={setViewAddNewRating}
          traineeCohort={traineeCohort}
          traineeId={traineeId}
          maxSprint={maxSprint}
          organizationToken={organizationToken}
          refetchQuery={refetch}
          setSuccessMessage={setSuccessMessage}
        />
      </div>
    </Dialog>
  );
}

export default ViewSprintRatings;

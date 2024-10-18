import React, { useState, Fragment } from 'react';
import { Listbox, Combobox, Transition, Dialog } from '@headlessui/react';
import { CheckIcon, SelectorIcon, PlusIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';
import { sprint } from '../../dummyData/ratings';
import Button from '../../components/Buttons';

function classNames(...classes: any) {
  /* istanbul ignore next */
  return classes.filter(Boolean).join(' ');
}

type Props = {
  createRatings: any;
  trainee: any;
  query: any;
  setQuery: any;
  selectedSprint: any;
  setSelectedSprint: any;
  defaultGrading: any;
  setDefaultGrading: any;
  disable: boolean;
  ratingData: any;
  setRatingData: any;
};

function AddRatings({
  createRatings,
  trainee,
  query,
  setQuery,
  selectedSprint,
  setSelectedSprint,
  defaultGrading,
  setDefaultGrading,
  disable,
  ratingData,
  setRatingData,
}: Props) {
  const { t } = useTranslation();

  const [selectedUser, setSelectedUser] = useState<any>('');
  const [isOpen, setIsOpen] = useState(false);

  /* istanbul ignore next */
  const filteredTrainees =
    query === ''
      ? trainee
      : trainee.filter((trainee: any) =>
          trainee?.email
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  const openModal = () => {
    setIsOpen(true);
  };

  /* istanbul ignore next */
  const handleSubmit = (e: any) => {
    e.preventDefault();
    createRatings()?.then(() => {
      setSelectedUser('');
    });
    setIsOpen(false);
  };

  /* istanbul ignore next */
  const handleRatingChange = (e: any) => {
    setRatingData((prevRatingData: any) => ({
      ...prevRatingData,
      [e.target?.name]: e.target.value,
    }));
  };

  /* istanbul ignore next */
  const closeCancel = () => {
    setIsOpen(false);
  };

  /* istanbul ignore next */
  return (
    <>
      <div className="mt-2">
        <button
          type="button"
          onClick={openModal}
          data-testid="addRatingButton"
          className="rounded-md w-40 text-base flex flex-row bg-primary p-3 font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {t('Add New Rating')}
          <PlusIcon className="w-4 mt-1" />
        </button>
      </div>
      {/* ADD NEW RATINGS MODAL START */}
      <Transition
        appear
        show={isOpen}
        as={Fragment}
        data-testid="modalTransistion"
      >
        <Dialog as="div" className="relative z-10" onClose={closeCancel}>
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
                  <form onSubmit={handleSubmit}>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 dark:text-dark-text-fill"
                    >
                      {t('Add New Trainee Rating')}
                    </Dialog.Title>
                    {/* SELECT TRAINEE DROPDOWN START */}
                    <div className="mt-10 md:mt-12 grid grid-cols-4">
                      <Combobox
                        value={selectedUser}
                        onChange={(e) => {
                          /* istanbul ignore next */
                          setSelectedUser(e?.email);
                          /* istanbul ignore next */
                          setRatingData({
                            ...ratingData,
                            userEmail: e.id,
                          });
                        }}
                        data-testid="traineesCombo"
                      >
                        <div className="flex flex-col col-span-6 md:col-span-1">
                          <Combobox.Label className="text-lg  font-bold pr-2 ">
                            {t('Trainee')}
                          </Combobox.Label>
                          <div className="relative mt-0 md:mt-4">
                            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-primary text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm">
                              <Combobox.Input
                                /* istanbul ignore next */
                                placeholder={t('Select trainee')}
                                className="w-full border-none py-2 pl-3 pr-10 text-sm placeholder:text-white leading-5 bg-primary text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                                displayValue={trainee.map((i: any) => i?.email)}
                                onChange={(event) => {
                                  setQuery(event.target.value);
                                }}
                                data-testid="traineeComboInput"
                              />
                              <Combobox.Button
                                className="absolute inset-y-0 right-0 flex items-center pr-2"
                                data-testid="traineeList"
                              >
                                <SelectorIcon
                                  className="h-5 w-5 text-white"
                                  aria-hidden="true"
                                />
                              </Combobox.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              /* istanbul ignore next */
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                              afterLeave={() => setQuery('')}
                            >
                              <Combobox.Options className="z-20 absolute mt-1 ml-auto max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                <Combobox.Option
                                  key={trainee.id}
                                  className="relative cursor-default select-none py-2 pl-10 pr-4 bg-gray-200 text-gray-900"
                                  value={trainee.id}
                                  disabled
                                >
                                  <span className="block truncate font-medium">
                                    {t('Select Trainee')}
                                  </span>
                                </Combobox.Option>
                                {filteredTrainees?.length === 0 &&
                                query !== '' ? (
                                  <div
                                    className="relative cursor-default select-none py-2 px-4 text-gray-700"
                                    data-testid="notFoundDiv"
                                  >
                                    {t('No trainee found.')}
                                  </div>
                                ) : (
                                  filteredTrainees?.map((trainee: any) => (
                                    <Combobox.Option
                                      data-testid="traineeOption"
                                      key={trainee?.id}
                                      className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                          active
                                            ? 'bg-primary text-white'
                                            : 'text-gray-900'
                                        }`
                                      }
                                      value={trainee}
                                      /* istanbul ignore next */
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <span
                                            className={`block truncate ${
                                              selected
                                                ? 'font-medium'
                                                : 'font-normal'
                                            }`}
                                          >
                                            {trainee?.email}
                                          </span>
                                          {selected ? (
                                            <span
                                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active
                                                  ? 'text-white'
                                                  : 'text-primary'
                                              }`}
                                            >
                                              <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Combobox.Option>
                                  ))
                                )}
                              </Combobox.Options>
                            </Transition>
                          </div>
                        </div>
                      </Combobox>
                      {/* SELECT TRAINEE DROPDOWN END */}

                      {/* SELECT SPRINT  DROPDOWN START */}
                      <div className="flex flex-col ml-auto col-span-0 md:col-span-3">
                        <Listbox
                          value={selectedSprint}
                          onChange={setSelectedSprint}
                        >
                          {({ open }) => (
                            <>
                              <Listbox.Label className="block text-lg font-bold mt-2">
                                {t(' Sprint')}
                              </Listbox.Label>
                              <div className="relative mt-1 w-full">
                                <Listbox.Button
                                  data-testid="sprintList"
                                  className="relative w-full cursor-default rounded-md border border-primary bg-primary py-2 pl-3 pr-10 text-left shadow-sm focus:border-white focus:outline-none focus:ring-1 focus:ring-white sm:text-sm"
                                >
                                  <span className="flex items-center">
                                    <span className="ml-3 block truncate text-white">
                                      {selectedSprint?.name}
                                    </span>
                                  </span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <SelectorIcon
                                      className="h-5 w-5 text-white"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </Listbox.Button>
                                <Transition
                                  show={open}
                                  as={Fragment}
                                  leave="transition ease-in duration-100"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {sprint.map((s: any) => (
                                      <Listbox.Option
                                        key={s.id}
                                        className={({ active }) =>
                                          classNames(
                                            active
                                              ? 'text-white bg-primary'
                                              : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9',
                                          )
                                        }
                                        value={s}
                                      >
                                        {({ selected, active }) => (
                                          <>
                                            <div className="flex items-center">
                                              <span
                                                className={classNames(
                                                  selected
                                                    ? 'font-semibold'
                                                    : 'font-normal',
                                                  'ml-3 block truncate',
                                                )}
                                              >
                                                {s?.name}
                                              </span>
                                            </div>
                                            {selected ? (
                                              <span
                                                className={classNames(
                                                  active
                                                    ? 'text-white'
                                                    : 'text-primary',
                                                  'absolute inset-y-0 right-0 flex items-center pr-4',
                                                )}
                                              >
                                                <CheckIcon
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                  </Listbox.Options>
                                </Transition>
                              </div>
                            </>
                          )}
                        </Listbox>
                      </div>

                      {/* SELECT SPRINT DROPDOWN END. */}
                    </div>

                    <div className="bg-gray-100 dark:bg-dark-frame-bg rounded-md p-2 my-2 mt-6 md:mt-8 flex flex-col md:flex-row">
                      <div className="mx-0 md:mx-2 my-1 w-full flex flex-col md:flex-col justify-start items-center ">
                        <Button
                          variant="default"
                          size="md"
                          style="text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2"
                        >
                          {t(' Quality')}
                        </Button>
                        <div className="flex flex-col justify-start items-start w-full my-0 md:my-2">
                          <select
                            /* istanbul ignore next */
                            name="quality"
                            value={ratingData.quality}
                            onChange={(e) =>
                              setRatingData({
                                ...ratingData,
                                quality: e.target.value,
                              })
                            }
                            id="qualityRating"
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
                          >
                            <option value="" disabled>
                              {t('Select rating')}
                            </option>
                            <>
                              {defaultGrading?.map((grade: any) => (
                                <option key={grade}>{grade}</option>
                              ))}
                            </>
                          </select>
                        </div>
                        <textarea
                          onChange={(e) =>
                            setRatingData({
                              ...ratingData,
                            })
                          }
                          id=""
                          rows={5}
                          className="rounded-md w-full my-1 md:my-3  p-3 border dark:bg-dark-bg sm:text-sm  dark:text-dark-text-fill dark:border-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10"
                          placeholder={t('Quality ratings remark')}
                          name="qualityDescription"
                          data-testid="qualityDescriptionTextArea"
                        />
                      </div>
                      <div className="mx-0 md:mx-2  my-1 w-full flex flex-col md:flex-col justify-start items-center ">
                        <Button
                          variant="default"
                          size="md"
                          style="text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2"
                        >
                          {t('Quantity')}
                        </Button>
                        <div className="flex flex-col justify-start items-start w-full my-0 md:my-2">
                          <select
                            name="quantity"
                            id="quantityRating"
                            value={ratingData.quantity}
                            onChange={(e) =>
                              setRatingData({
                                ...ratingData,
                                quantity: e.target.value,
                              })
                            }
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
                          >
                            <option value="" disabled>
                              {t('Select rating')}
                            </option>
                            <>
                              {defaultGrading?.map((grade: any) => (
                                <option key={grade}>{grade}</option>
                              ))}
                            </>
                          </select>
                        </div>
                        <textarea
                          name="quantityDescription"
                          id=""
                          onChange={(e) =>
                            setRatingData({
                              ...ratingData,
                              // quantityRemark: e.target.value,
                            })
                          }
                          rows={5}
                          className="rounded-md w-full  my-1 md:my-3  p-3 border dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white"
                          placeholder={t('Quantity rating remark')}
                        />
                      </div>
                      <div className="mx-0 md:mx-2 my-1 w-full flex flex-col md:flex-col justify-start items-center ">
                        <Button
                          variant="default"
                          size="md"
                          style="text-center w-full rounded-lg bg-gray-700 text-white focus:outline-none p-1 md:p-2"
                        >
                          {t('Professionalism')}
                        </Button>
                        <div className="flex flex-col justify-start items-start w-full my-0 md:my-2">
                          <select
                            name="professional"
                            id="qualityRating"
                            value={ratingData.professional}
                            onChange={handleRatingChange}
                            className="rounded-md appearance-none relative block w-full px-3 py-2 border dark:bg-dark-bg border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white "
                          >
                            <option value="" disabled>
                              {t('Select rating')}
                            </option>
                            <>
                              {defaultGrading?.map((grade: any) => (
                                <option key={grade}>{grade}</option>
                              ))}
                            </>
                          </select>
                        </div>
                        <textarea
                          name="proffessionalDescription"
                          id=""
                          onChange={(e) =>
                            setRatingData({
                              ...ratingData,
                              // professionalRemark: e.target.value,
                            })
                          }
                          rows={5}
                          className="rounded-md w-full my-1 md:my-3  p-3 border dark:bg-dark-bg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white"
                          placeholder={t('Professional rating remark')}
                        />
                      </div>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        onClick={closeCancel}
                      >
                        {t('Cancel')}
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center float-right rounded-md border border-transparent  bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        disabled={disable}
                      >
                        {t('Save ratings')}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default AddRatings;

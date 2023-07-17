import { Transition, Dialog } from '@headlessui/react';
import React, { Fragment, useEffect, useState } from 'react';
import { useSubscription } from '@apollo/client';
import Frame from './frame';
import { GET_FEEDBACK_SUBSCRIPTION } from '../../Mutations/Ratings';

type props = {
  showRemarks: boolean;
  closeModal: (..._: any) => any;
  rows: any;
};

function CoordinatorRemarks({ showRemarks, closeModal, rows }: props) {
  const [allFeeds, setAllFeeds] = useState<any[]>(rows?.feedbacks);

  useEffect(() => {
    setAllFeeds(rows?.feedbacks);
  }, [rows]);

  useSubscription(GET_FEEDBACK_SUBSCRIPTION, {
    onData: ({ data }) => {
      setAllFeeds((p) => [...p, data.data.newfeedback]);
    },
    variables: {
      sprint: `${rows.sprint}`,
      user: `${rows.id}`,
    },
  });

  return (
    <Transition
      appear
      show={showRemarks}
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                <Frame rows={rows} allFeeds={allFeeds} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CoordinatorRemarks;

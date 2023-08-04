import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import { Phase } from './Phases';

export const DeletePhase = gql`
  mutation DeletePhase($deletePhaseId: ID!, $orgToken: String) {
    deletePhase(id: $deletePhaseId, orgToken: $orgToken) {
      id
    }
  }
`;

export default function DeletePhaseModal({
  deletePhaseModal,
  currentPhase,
  removeModel,
  refetch,
}: {
  deletePhaseModal: boolean;
  currentPhase: Phase | undefined;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();
  const [deletePhaseMutation, { loading }] = useMutation(DeletePhase, {
    onError(error) {
      /* istanbul ignore next */
      removeModel();
      toast.error(error.message.toString());
    },
    onCompleted() {
      /* istanbul ignore next */
      refetch();
      removeModel();
      toast.success(t("Phase deleted successfully")  as TFunction);
    },
  });
  const orgToken = localStorage.getItem('orgToken');

  async function deletePhase() {
    const data: any = {};

    data.deletePhaseId = currentPhase?.id;
    orgToken && (data.orgToken = orgToken);

    await deletePhaseMutation({ variables: data });
  }

  return (
    <div
      className={`h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${
        deletePhaseModal === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-indigo-100 dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
            {t('Delete Phase')}
          </h3>
          <hr className=" bg-primary border-gray-400 my-3 w-full" />
        </div>
        <div className="card-body">
          <form className=" py-3 px-8">
            <div>
              <h2 className="text-base dark:text-white text-center m-4">
                {t('do you really want to remove this Phase?')}
              </h2>
            </div>
            <div className="w-full flex justify-between">
              <Button
                variant="info"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans"
                data-testid="delete"
                onClick={() => removeModel()}
              >
                {t('Cancel')}
              </Button>
              <Button
                variant="danger"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans"
                data-testid="confirmDeleteBtn"
                onClick={() => {
                  deletePhase();
                }}
                loading={loading}
              >
                {t('Delete')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

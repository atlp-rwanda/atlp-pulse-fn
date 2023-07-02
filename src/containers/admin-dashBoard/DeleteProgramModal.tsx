import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import { Program } from './Programs';

export const DeleteProgram = gql`
  mutation DeleteProgram($deleteProgramId: ID!, $orgToken: String) {
    deleteProgram(id: $deleteProgramId, orgToken: $orgToken) {
      id
    }
  }
`;

export default function DeleteProgramModal({
  deleteProgramModal,
  currentProgram,
  removeModel,
  refetch,
}: {
  deleteProgramModal: boolean;
  currentProgram: Program | undefined;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();
  const [deleteProgramMutation, { loading }] = useMutation(DeleteProgram, {
    onError(error) {
      /* istanbul ignore next */
      toast.error(error.message.toString());
    },
    onCompleted() {
      /* istanbul ignore next */
      refetch();
      removeModel();
<<<<<<< HEAD
      toast.success(t("Program deleted")  as TFunction);

=======
      toast.success(t('Program deleted'));
>>>>>>> af2151e (create dashboard cards)
    },
  });
  const orgToken = localStorage.getItem('orgToken');

  async function deleteProgram() {
    const data: any = {};

    data.deleteProgramId = currentProgram?.id;
    orgToken && (data.orgToken = orgToken);

    await deleteProgramMutation({ variables: data });
  }

  return (
    <div
      className={`h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${
        deleteProgramModal === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
            {t('Delete Program')}
          </h3>
          <hr className=" bg-primary border-b my-3 w-full" />
        </div>
        <div className="card-body">
          <form className=" py-3 px-8">
            <div>
              <h2 className="text-base dark:text-white text-center m-4">
                {t('reallyRemoveProgram')}
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
                  deleteProgram();
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

import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Buttons';
import Loader2 from '../../components/loaders/loader2';

export default function DeleteGradingsModal({
  deleteGradingModal,
  removeModel,
  deleteFunc,
  setValue,
  loading,
}: {
  deleteGradingModal: boolean;
  removeModel: Function;
  deleteFunc: Function;
  setValue: Function;
  loading?: boolean;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`h-screen w-screen bg-black fixed bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto mt-10 p-4 ${
        deleteGradingModal === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-indigo-100 dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-xl dark:text-white text-center w-11/12">
            {t('Delete Grading System')}
          </h3>
          <hr className=" bg-primary border-gray-400 my-3 w-full" />
        </div>
        <div className="card-body">
          <form className=" py-3 px-8">
            <div>
              <h2 className="text-base dark:text-white text-center m-4">
                {t('reallyRemoveGrading')}
              </h2>
            </div>
            {!loading ? (
              <div className="w-full flex justify-between">
                <Button
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans mx-0 my-2 px-4 border border-current text-violet-500 hover:text-violet-600 hover:bg-violet-600 hover:bg-opacity-5"
                  data-testid="delete"
                  /* istanbul ignore next */
                  onClick={() => removeModel()}
                >
                  {t('Cancel')}
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans"
                  data-testid="confirmDeleteBtn"
                  /* istanbul ignore next */
                  onClick={() => {
                    deleteFunc();
                    setValue('');
                  }}
                >
                  {t('Delete')}
                </Button>
              </div>
            ) : (
              <div className='"w-full flex justify-center'>
                <Loader2 />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

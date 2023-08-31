import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Buttons';
import Loader2 from '../../components/loaders/loader2';

export default function MakeDefaultModal({
  makeDefaultModal,
  removeModel,
  makeDefaultFunc,
  loading,
}: {
  makeDefaultModal: boolean;
  removeModel: Function;
  makeDefaultFunc: Function;
  loading: boolean;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`h-screen w-screen bg-black fixed top-0 left-0 z-20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center overflow-auto mt-10 p-4 ${
        makeDefaultModal === true ? 'block' : 'hidden'
      }`}
    >
      <div className="w-screen p-4 pb-8 bg-indigo-100 rounded-lg dark:bg-dark-bg md:w-1/2 xl:w-4/12">
        <div className="flex flex-wrap items-center justify-center w-full card-title ">
          <h3 className="w-11/12 text-xl font-bold text-center dark:text-white">
            {t('MakeDefaultTitle')}
          </h3>
          <hr className="w-full my-3 border-gray-400  bg-primary" />
        </div>
        <div className="card-body">
          <form className="px-8 py-3 ">
            <div>
              <h2 className="m-4 text-base text-center dark:text-white">
                {t('reallyMakeDefaultGrading')}
              </h2>
            </div>
            {!loading ? (
              <div className="flex justify-between w-full">
                <Button
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans mx-0 my-2 px-4 border border-current text-violet-500 hover:text-violet-600 hover:bg-violet-600 hover:bg-opacity-5"
                  data-testid="delete"
                  onClick={
                    /* istanbul ignore next */
                    () => removeModel()
                  }
                >
                  {t('No')}
                </Button>
                <Button
                  size="sm"
                  style="w-[30%] md:w-1/4 text-sm font-sans mx-0 my-2 px-4 bg-violet-500 text-white hover:bg-violet-600"
                  data-testid="confirmDeleteBtn"
                  onClick={
                    /* istanbul ignore next */
                    () => {
                      /* istanbul ignore next */
                      makeDefaultFunc();
                    }
                  }
                >
                  {t('Yes')}
                </Button>
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <Loader2 />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

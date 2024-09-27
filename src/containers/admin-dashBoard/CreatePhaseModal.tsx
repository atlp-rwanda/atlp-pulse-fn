import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';

export const AddPhase = gql`
  mutation AddPhase($name: String!, $description: String!, $orgToken: String!) {
    addPhase(name: $name, description: $description, orgToken: $orgToken) {
      id
    }
  }
`;

export default function CreatePhaseModal({
  createPhaseModel,
  removeModel,
  refetch,
}: {
  createPhaseModel: boolean;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
    control,
  } = useForm();
  const [addPhaseMutation, { loading }] = useMutation(AddPhase, {
    /* istanbul ignore next */
    onError(error) {
      toast.error(error.message.toString());
    },
    /* istanbul ignore next */
    onCompleted() {
      refetch();
      removeModel();
    },
  });

  /* istanbul ignore next */
  async function addPhase(data: any) {
    /* istanbul ignore next */
    const newData = { ...data };
    /* istanbul ignore next */
    /* istanbul ignore next */
    Object.keys(newData).forEach((field) => {
      if (!newData[field] || newData[field] === '') {
        delete newData[field];
      }
    });
    /* istanbul ignore next */
    await addPhaseMutation({
      /* istanbul ignore next */
      variables: { orgToken: localStorage.getItem('orgToken'), ...newData },
      /* istanbul ignore next */
      onCompleted() {
        reset();
        refetch();
        setTimeout(() => {
          removeModel();
        }, 1000);
        toast.success(t('Phase Created successfully') as TFunction);
      },
    });
  }

  return (
    <div
      className={`h-screen w-screen bg-black bg-opacity-30 backdrop-blur-sm fixed top-0 left-0 z-20 flex items-center justify-center px-4 ${
        createPhaseModel === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-indigo-100 dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
            {t('Add Phase')}
          </h3>
          <hr className=" bg-primary border-gray-400 my-3 w-full" />
        </div>
        <div className="card-body">
          <form className=" py-3 px-8">
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="text"
                  className="border border-primary rounded outline-none px-5 dark:bg-dark-bg-frame dark:text-white font-sans text-xs py-2 w-full"
                  placeholder={t('name')}
                  {...register('name', {
                    required: `${t('The Phase name is required')}`,
                  })}
                />
              </div>
              {errors?.name && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.name?.message?.toString()}
                </p>
              )}
            </div>

            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="text"
                  className="border border-primary py-2 dark:bg-dark-bg-frame dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                  placeholder={t('Description')}
                  {...register('description', {
                    required: `${t('The Description is required')}`,
                  })}
                />
              </div>
              {errors?.description && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.description?.message?.toString()}
                </p>
              )}
            </div>

            <div className="w-full flex justify-between">
              <Button
                variant="info"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans"
                data-testid="remove"
                onClick={() => {
                  removeModel();

                  /* istanbul ignore next */
                  reset();
                }}
                disabled={loading}
              >
                {' '}
                {t('cancel')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans p-0"
                /* istanbul ignore next */
                onClick={handleSubmit(addPhase)}
                loading={loading}
              >
                {' '}
                {t('save')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

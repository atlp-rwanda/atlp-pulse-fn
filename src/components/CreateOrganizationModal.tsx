import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TFunction, useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Button from './Buttons';

export const AddOrganization = gql`
  mutation AddOrganization(
    $organizationInput: OrganizationInput
    $action: String
  ) {
    addOrganization(organizationInput: $organizationInput, action: $action) {
      id
    }
  }
`;

export default function CreateOrganizationModal({
  createOrganizationModel,
  removeModel,
  refetch,
}: {
  createOrganizationModel: boolean;
  removeModel: Function;
  refetch: Function;
}) {
  const { t } = useTranslation();
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm();
  const [addOrganizationMutation, { loading }] = useMutation(AddOrganization, {
    onError(error) {
      toast.error(error.message.toString());
    },
    onCompleted() {
      toast.success(t('Organization added successfully') as TFunction);
      refetch();
      reset();
      removeModel();
    },
  });

  async function addOrganization(data: any) {
    await addOrganizationMutation({
      variables: { organizationInput: data, action: 'new' },
    });
  }

  return (
    <div
      className={`font-serif h-screen w-screen bg-black fixed top-0 left-0 z-20 bg-opacity-30 backdrop-blur-sm flex items-center justify-center overflow-auto p-4 ${
        createOrganizationModel === true ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white dark:bg-dark-bg w-screen md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
          <h3 className="font-bold text-sm dark:text-white text-center w-11/12 uppercase">
            {t('Add Organization')}
          </h3>
          <hr className=" bg-primary border-b my-3 w-full" />
        </div>
        <div className="card-body">
          <form className=" py-3 px-8">
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="text"
                  className="border border-primary rounded outline-none px-5 dark:bg-dark-frame-bg dark:text-white font-sans text-xs py-2 w-full"
                  placeholder={t('name')}
                  {...register('name', {
                    required: `${t('The Organization name is required')}`,
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
                  className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
                  placeholder={t('Organization admin Email')}
                  {...register('email', {
                    required: `${t('The Email is required')}`,
                  })}
                />
              </div>
              {errors?.email && (
                <p className="font-thin text-[12px] text-red-300">
                  {errors?.email?.message?.toString()}
                </p>
              )}
            </div>
            <div className="input my-5 h-9 ">
              <div className="grouped-input flex items-center h-full w-full rounded-md">
                <input
                  type="text"
                  className="border border-primary py-2 dark:bg-dark-frame-bg dark:text-white rounded outline-none px-5 font-sans text-xs w-full"
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
                  reset();
                }}
                disabled={loading}
              >
                {' '}
                {t('Cancel')}
              </Button>
              <Button
                variant="primary"
                size="sm"
                style="w-[30%] md:w-1/4 text-sm font-sans p-0"
                onClick={handleSubmit(addOrganization)}
                loading={loading}
              >
                {' '}
                {t('Save')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

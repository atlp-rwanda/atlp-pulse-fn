import React from 'react';
import { useTranslation } from 'react-i18next';
import { UseFormRegister } from 'react-hook-form';
import TextArea from '../ratings/textarea';
import Button from '../../components/Buttons';
import css from './style.module.css';

export interface GradeFormData {
  id: number;
  grade: string;
  min: number;
  max: number;
  description: string;
}

export interface FormData {
  name: string;
  grades: GradeFormData[];
  isPercentageRequired: boolean;
  isDescriptionRequired: boolean;
}

export const initialGrade: Omit<GradeFormData, 'id'> = {
  grade: '',
  min: 0,
  max: 100,
  description: '',
};

interface GradeItemProps {
  gradeItem: GradeFormData;
  register: UseFormRegister<FormData>;
  index: number;
  errors?: any;
  percentageRequired?: boolean;
  descriptionRequired?: boolean;
  removable?: boolean;
  onRemove?: (id?: number) => void;
  validationRules: {
    grade: any;
    percentage: any;
    description: any;
  };
  registerMinMax: {
    min: any;
    max: any;
  };
}

function GradeItem({
  gradeItem,
  register,
  index,
  errors,
  percentageRequired,
  descriptionRequired,
  removable = true,
  onRemove,
  validationRules,
  registerMinMax
}: GradeItemProps) {
  const { t } = useTranslation();

  const remove = () => {
    if (onRemove && gradeItem.id !== undefined) {
      onRemove(gradeItem.id);
    }
  };

  return (
    <div className="box font-serif">
      <div>
        <div className="flex flex-col gap-2 p-3 bg-gray-700 bg-opacity-5 dark:bg-neutral-700 dark:bg-opacity-25 rounded-md">
          <div className="flex flex-col gap-4">
            <input
              {...register(`grades.${index}.grade`, validationRules.grade)}
              placeholder={t('Grade')}
              className="rounded-md appearance-none relative block w-full px-4 py-2 border bg-light-bg bg-opacity-95 dark:bg-neutral-700 border-indigo-200 dark:border-neutral-700 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-1 dark:ring-0 focus:ring-indigo-400 focus:border-indigo-400 focus:z-10 sm:text-sm dark:text-dark-text-fill"
            />
            {errors?.grade && (
              <p className="text-red-500 text-xs">{errors.grade.message}</p>
            )}

            {percentageRequired && (
              <div className={`flex justify-between gap-3 items-center flex-wrap ${percentageRequired && css.firstHeight}`}>
                <p className="text-center" style={{ flex: 1 }}>
                  {t('Percentage')}
                </p>
                <div className="flex justify-between gap-2 items-center flex-wrap max-w-full" style={{ flex: 99999 }}>
                  <div className="flex-1">
                    <input
                      {...registerMinMax.min}
                      placeholder={t('Minimum')}
                      type="number"
                      className={`rounded-md appearance-none relative block w-full px-3 py-2 border bg-light-bg bg-opacity-95 dark:bg-neutral-700 
                        ${errors?.min ? 'border-red-500' : 'border-indigo-200'}
                        dark:border-neutral-700 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-1 dark:ring-0 
                        focus:ring-indigo-400 focus:border-indigo-400 focus:z-10 sm:text-sm dark:text-dark-text-fill`}
                    />
                    {errors?.min && (
                      <p className="text-red-500 text-xs mt-1">{errors.min.message}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      {...registerMinMax.max}
                      placeholder={t('Maximum')}
                      type="number"
                      className={`rounded-md appearance-none relative block w-full px-3 py-2 border bg-light-bg bg-opacity-95 dark:bg-neutral-700 
                        ${errors?.max ? 'border-red-500' : 'border-indigo-200'}
                        dark:border-neutral-700 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-1 dark:ring-0 
                        focus:ring-indigo-400 focus:border-indigo-400 focus:z-10 sm:text-sm dark:text-dark-text-fill`}
                    />
                    {errors?.max && (
                      <p className="text-red-500 text-xs mt-1">{errors.max.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <TextArea
              {...register(`grades.${index}.description`, {
                ...(descriptionRequired ? validationRules.description : {})
              })}
              className="w-full h-auto rounded-md appearance-none relative block px-3 py-2 border bg-light-bg bg-opacity-95 dark:bg-neutral-700 border-indigo-200 dark:border-neutral-700 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-1 dark:ring-0 focus:ring-indigo-400 focus:border-indigo-400 focus:z-10 sm:text-sm dark:text-dark-text-fill"
              resize="vertical"
              placeholder={t('description')}
              required={descriptionRequired}
            />
            {errors?.description && (
              <p className="text-red-500 text-xs">{errors.description.message}</p>
            )}
          </div>
          {removable && gradeItem.id !== undefined && (
            <div className="flex justify-end">
              <Button
                type="button"
                size="sm"
                style="bg-red-600 text-white m-0 px-3 py-0.5"
                onClick={remove}
              >
                {t('Remove')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GradeItem;

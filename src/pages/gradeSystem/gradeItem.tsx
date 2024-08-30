/* eslint-disable no-param-reassign */
import React from 'react';
import { useTranslation } from 'react-i18next';
import TextArea from '../ratings/textarea';
import Button from '../../components/Buttons';
import css from './style.module.css';

export const initialGrade = {
  grade: '',
  min: undefined,
  max: undefined,
  description: '',
};

export type gradeType = {
  grade: string;
  min: number | undefined;
  max: number | undefined;
  description: string;
};

type props = {
  gradeItem: gradeType;
  id?: any;
  percentageRequired?: boolean;
  descriptionRequired?: boolean;
  removable?: boolean;
  onRemove?: (id?: any) => any;
};

function GradeItem({
  gradeItem,
  id,
  percentageRequired,
  descriptionRequired,
  removable = true,
  onRemove,
}: props) {
  const { t } = useTranslation();

  /* istanbul ignore next */
  const remove = () => {
    typeof onRemove === 'function' && onRemove(id);
  };

  return (
    <div className="box font-serif">
      <div>
        <div className="flex flex-col gap-2 p-3 bg-gray-700 bg-opacity-5 dark:bg-neutral-700 dark:bg-opacity-25 rounded-md">
          <div className="flex flex-col gap-4 ">
            <input
              placeholder={t('Grade')}
              defaultValue={gradeItem.grade}
              className="rounded-md appearance-none relative block w-full px-4 py-2 border bg-light-bg bg-opacity-95 dark:bg-neutral-700 border-indigo-200 dark:border-neutral-700 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-1 dark:ring-0 focus:ring-indigo-400 focus:border-indigo-400 focus:z-10 sm:text-sm  dark:text-dark-text-fill"
              onChange={(e) => {
                gradeItem.grade = e.target.value;
              }}
              required
            />
            {percentageRequired && (
              <div
                className={`flex justify-between gap-3 items-center flex-wrap ${percentageRequired && css.firstHeight
                  }`}
              >
                <p className="text-center" style={{ flex: 1 }}>
                  {t('Percentage')}
                </p>
                <div
                  className="flex justify-between gap-2 items-center flex-wrap max-w-full"
                  style={{ flex: 99999 }}
                >
                  <input
                    placeholder={t('Minimum')}
                    type="number"
                    defaultValue={gradeItem.min}
                    className="rounded-md appearance-none relative block max-w-full flex-1 px-3 py-2 border bg-light-bg bg-opacity-95 dark:bg-neutral-700 border-indigo-200 dark:border-neutral-700 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-1 dark:ring-0 focus:ring-indigo-400 focus:border-indigo-400 focus:z-10 sm:text-sm  dark:text-dark-text-fill"
                    onChange={(e) => {
                      gradeItem.min = Number(e.target.value);
                    }}
                    required
                  />
                  <input
                    placeholder={t('Maximum')}
                    type="number"
                    defaultValue={gradeItem.max}
                    className="rounded-md appearance-none relative block max-w-full flex-1 px-3 py-2 border bg-light-bg bg-opacity-95 dark:bg-neutral-700 border-indigo-200 dark:border-neutral-700 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-1 dark:ring-0 focus:ring-indigo-400 focus:border-indigo-400 focus:z-10 sm:text-sm  dark:text-dark-text-fill"
                    onChange={(e) => {
                      gradeItem.max = Number(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
            )}
            <TextArea
              className="w-full h-auto rounded-md appearance-none relative block px-3 py-2 border bg-light-bg bg-opacity-95 dark:bg-neutral-700 border-indigo-200 dark:border-neutral-700 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-1 dark:ring-0 focus:ring-indigo-400 focus:border-indigo-400 focus:z-10 sm:text-sm  dark:text-dark-text-fill"
              resize="vertical"
              defaultValue={gradeItem.description}
              onChange={(e) => {
                gradeItem.description = e.target.value;
              }}
              placeholder={t('description')}
              required={descriptionRequired}
            />
          </div>
          {removable && ![null, undefined].includes(id) && (
            <div className="flex justify-end">
              <Button
                type="button"
                size="sm"
                style="bg-red-600 text-white m-0 px-3 py-0.5 "
                onClick={remove}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GradeItem;

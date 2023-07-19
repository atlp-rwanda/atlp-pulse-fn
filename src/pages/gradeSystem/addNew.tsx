import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MutationFunction } from '@apollo/client';
import Button from '../../components/Buttons';
import GradeItem, { gradeType, initialGrade } from './gradeItem';
import Loader2 from '../../components/loaders/loader2';
import css from './style.module.css';

type Props = {
  removeModel: any;
  setValue: any;
  loading?: boolean;
  create: MutationFunction;
};

interface NewGrade extends gradeType {
  id: number | any;
}

function AddGradingSystem({ removeModel, setValue, loading, create }: Props) {
  const { t } = useTranslation();

  const [required, setRequired] = useState({
    percentage: true,
    description: false,
  });
  const [data, setData] = useState({
    name: '',
  });
  const [grades, setGrades] = useState<NewGrade[]>([
    {
      id: 0,
      ...initialGrade,
    },
  ]);

  /* istanbul ignore next */
  const addGrade = () => {
    setGrades((prev) => [
      ...prev,
      { id: (prev[prev.length - 1]?.id || 0) + 1, ...initialGrade },
    ]);
  };

  /* istanbul ignore next */
  const removeGrade = (id: number | any) => {
    setGrades((prev) => {
      if (prev.length <= 1) return prev;
      return prev.filter((grade) => grade.id !== id);
    });
  };

  /* istanbul ignore next */
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const info = {
      name: data.name,
      grade: grades.map(({ grade: val }) => val),
      description: grades.map(
        ({ description: val }) => val || 'No description',
      ),
      percentage: grades.map(({ min, max }) =>
        required.percentage ? `${min} - ${max}` : 'No percentage',
      ),
    };

    create({
      variables: { ...info, orgToken: localStorage.getItem('orgToken') },
    }).then(() => {
      setData({
        name: '',
      });
      setGrades([
        {
          id: 0,
          ...initialGrade,
        },
      ]);
      (e.target as any)?.reset();
      removeModel();
    });
  };

  return (
    <div className=" bg-indigo-100 dark:bg-neutral-900 w-full md:w-3/4 xl:w-5/12 rounded-lg p-0 sm:p-4 pb-8 overflow-auto max-h-full">
      <div className="card-title w-full flex flex-wrap justify-center items-center ">
        <h3 className="font-bold text-base dark:text-white text-center w-11/12 ">
          {t('Add Grading System')}
        </h3>
      </div>
      <div className="card-body">
        <form onSubmit={onSubmit} className="py-3 px-4 md:px-8">
          <div className="input my-4 ">
            <div className="grouped-input flex items-center w-full rounded-md">
              <input
                type="text"
                name="name"
                className="border bg-light-bg dark:bg-neutral-700 bg-opacity-95 border-indigo-200 dark:border-neutral-700 rounded focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 dark:ring-0 outline-none px-5 font-sans text-sm py-2 w-full"
                placeholder={t('Label eg: Name of grading system')}
                defaultValue={data.name}
                onChange={(e) =>
                  /* istanbul ignore next */
                  setData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <label className={`${css.sm_card} flex-1 min-w-max`}>
              <input
                type="checkbox"
                defaultChecked={required.percentage}
                onClick={() => {
                  /* istanbul ignore next */
                  setRequired((p) => ({
                    ...p,
                    percentage: !p.percentage,
                  }));
                }}
              />
              <div className={`${css.label}`}>
                <div className={`${css.check}`}> </div>
                <span>{t('Add Percentage')}</span>
              </div>
            </label>
            <label className={`${css.sm_card} flex-1 min-w-max`}>
              <input
                type="checkbox"
                defaultChecked={required.description}
                onClick={() => {
                  /* istanbul ignore next */
                  setRequired((p) => ({
                    ...p,
                    description: !p.description,
                  }));
                }}
              />
              <div className={`${css.label}`}>
                <div className={`${css.check}`}> </div>
                <span>{t('Require Description')}</span>
              </div>
            </label>
          </div>
          {grades.map(({ id }, index, all) => (
            <div className="my-4" key={id}>
              <GradeItem
                gradeItem={all[index]}
                id={id}
                percentageRequired={required.percentage}
                descriptionRequired={required.description}
                removable={all.length > 1}
                onRemove={removeGrade}
              />
            </div>
          ))}
          <div className="flex justify-between flex-wrap">
            <div className="flex justify-start">
              <Button
                type="button"
                size="sm"
                style="text-sm font-sans mx-0 my-2 px-4 bg-violet-500 text-white hover:bg-violet-600"
                onClick={addGrade}
              >
                Add Grade
              </Button>
            </div>
            <div className="flex justify-end gap-2 flex-1">
              {!loading ? (
                <>
                  <Button
                    data-testid="removeModel"
                    size="sm"
                    style="text-sm font-sans mx-0 my-2 px-4 border border-current text-violet-500 hover:text-violet-600 hover:bg-violet-600 hover:bg-opacity-5"
                    onClick={() => {
                      removeModel();
                      setValue('');
                    }}
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    type="submit"
                    data-testid="saveGrade"
                    size="sm"
                    style="text-sm font-sans mx-0 my-2 px-4 bg-violet-500 text-white hover:bg-violet-600"
                  >
                    {t('Save')}
                  </Button>
                </>
              ) : (
                <div className="w-full flex justify-center">
                  <Loader2 />
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddGradingSystem;

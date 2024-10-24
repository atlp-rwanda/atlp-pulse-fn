import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MutationFunction } from '@apollo/client';
import { useForm, useFieldArray, UseFormRegister, FieldArrayWithId } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '../../components/Buttons';
import GradeItem from './gradeItem';
import Loader2 from '../../components/loaders/loader2';
import css from './style.module.css';

export interface GradeFormData {
  id: number;
  grade: string;
  description: string;
  min: number;
  max: number;
}

interface FormData {
  name: string;
  grades: GradeFormData[];
  isPercentageRequired: boolean;
  isDescriptionRequired: boolean;
}

interface Props {
  removeModel: () => void;
  setValue: (value: string) => void;
  loading?: boolean;
  create: MutationFunction;
}

export interface GradeItemProps {
  gradeItem: FieldArrayWithId<FormData, "grades">;
  register: UseFormRegister<FormData>;
  index: number;
  errors?: any;
  percentageRequired: boolean;
  descriptionRequired: boolean;
  removable: boolean;
  onRemove: () => void;
  validationRules: typeof VALIDATION_RULES;
}

export const initialGrade: Omit<GradeFormData, 'id'> = {
  grade: '',
  description: '',
  min: 0,
  max: 100,
};

const DEFAULT_VALUES: FormData = {
  name: '',
  grades: [{ ...initialGrade, id: 0 }],
  isPercentageRequired: true,
  isDescriptionRequired: false,
};

const VALIDATION_RULES = {
  name: {
    required: 'Name cannot be empty',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters'
    }
  },
  grade: {
    required: 'Grade cannot be empty',
    minLength: {
      value: 1,
      message: 'Grade cannot be empty'
    }
  },
  percentage: {
    min: {
      message: 'Minimum percentage cannot be negative'
    },
    max: {
      message: 'Maximum percentage cannot exceed 100'
    }
  },
  description: {
    minLength: {
      value: 3,
      message: 'Description must be at least 3 characters'
    }
  }
};

function AddGradingSystem({ removeModel, setValue, loading = false, create }: Props) {
  const { t } = useTranslation();
  
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    trigger,
    setError,
    clearErrors
  } = useForm<FormData>({
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange'
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'grades'
  });

  const isPercentageRequired = watch('isPercentageRequired');
  const isDescriptionRequired = watch('isDescriptionRequired');
  const grades = watch('grades');

  const validateMinMax = useCallback((index: number) => {
    const grade = grades[index];
    if (grade && grade.min > grade.max) {
      setError(`grades.${index}.min`, {
        type: 'manual',
        message: 'Minimum grade cannot be greater than maximum grade'
      });
      return false;
    }
    clearErrors(`grades.${index}.min`);
    return true;
  }, [grades, setError, clearErrors]);

  const addGrade = useCallback(() => {
    append({
      ...initialGrade,
      id: fields.length > 0 ? fields[fields.length - 1].id + 1 : 0
    } as GradeFormData);
  }, [append, fields]);

  const removeGrade = useCallback((index: number) => {
    if (fields.length > 1) {
      remove(index);
    }
  }, [remove, fields.length]);

  const onSubmit = async (data: FormData) => {
    const isValid = data.grades.every((_, index) => validateMinMax(index));
    if (!isValid) {
      return;
    }

    try {
      const formattedData = {
        name: data.name,
        grade: data.grades.map(({ grade }) => grade),
        description: data.grades.map(({ description }) => 
          description || 'No description'
        ),
        percentage: data.grades.map(({ min, max }) =>
          isPercentageRequired ? `${min} - ${max}` : 'No percentage'
        ),
      };

      await create({
        variables: {
          ...formattedData,
          orgToken: localStorage.getItem('orgToken')
        }
      });

      reset(DEFAULT_VALUES);
      removeModel();
      setValue('');
    } catch (error) {
      toast.error(t('Failed to create grading system') as string);
    }
  };

  const registerMinMax = (index: number) => ({
    min: {
      ...register(`grades.${index}.min`, {
        valueAsNumber: true,
        onChange: () => validateMinMax(index),
      })
    },
    max: {
      ...register(`grades.${index}.max`, {
        valueAsNumber: true,
        onChange: () => validateMinMax(index),
      })
    }
  });

  return (
    <div className="bg-indigo-100 dark:bg-neutral-900 w-full md:w-3/4 xl:w-5/12 rounded-lg p-0 sm:p-4 pb-8 overflow-auto max-h-full">
      <div className="card-title w-full flex flex-wrap justify-center items-center">
        <h3 className="font-bold text-base dark:text-white text-center w-11/12">
          {t('Add Grading System')}
        </h3>
      </div>
      
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)} className="py-3 px-4 md:px-8">
          <div className="input my-4">
            <div className="grouped-input flex items-center w-full rounded-md">
              <input
                {...register('name', VALIDATION_RULES.name)}
                type="text"
                className={`border bg-light-bg dark:bg-neutral-700 bg-opacity-95 
                  ${errors.name ? 'border-red-500' : 'border-indigo-200'}
                  dark:border-neutral-700 rounded focus:outline-none focus:ring-1 
                  focus:ring-indigo-400 focus:border-indigo-400 dark:ring-0 
                  outline-none px-5 font-sans text-sm py-2 w-full`}
                placeholder={t('Label eg: Name of grading system')}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1" role="alert">
                {errors.name.message as string}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <label className={`${css.sm_card} flex-1 min-w-max`}>
              <input
                type="checkbox"
                {...register('isPercentageRequired')}
                aria-label={t('Toggle percentage requirement')}
              />
              <div className={css.label}>
                <div className={css.check} />
                <span>{t('Add Percentage')}</span>
              </div>
            </label>
            
            <label className={`${css.sm_card} flex-1 min-w-max`}>
              <input
                type="checkbox"
                {...register('isDescriptionRequired')}
                aria-label={t('Toggle description requirement')}
              />
              <div className={css.label}>
                <div className={css.check} />
                <span>{t('Require Description')}</span>
              </div>
            </label>
          </div>

          {fields.map((field, index) => (
            <div className="my-4" key={field.id}>
              <GradeItem
                gradeItem={field}
                register={register}
                index={index}
                errors={errors.grades?.[index]}
                percentageRequired={isPercentageRequired}
                descriptionRequired={isDescriptionRequired}
                removable={fields.length > 1}
                onRemove={() => removeGrade(index)}
                validationRules={VALIDATION_RULES}
                registerMinMax={registerMinMax(index)}
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
                disabled={isSubmitting}
              >
                {t('Add Grade')}
              </Button>
            </div>
            
            <div className="flex justify-end gap-2 flex-1">
              {!loading ? (
                <>
                  <Button
                    data-testid="removeModel"
                    type="button"
                    size="sm"
                    style="text-sm font-sans mx-0 my-2 px-4 border border-current text-violet-500 hover:text-violet-600 hover:bg-violet-600 hover:bg-opacity-5"
                    onClick={() => {
                      reset(DEFAULT_VALUES);
                      removeModel();
                      setValue('');
                    }}
                    disabled={isSubmitting}
                  >
                    {t('Cancel')}
                  </Button>
                  
                  <Button
                    type="submit"
                    data-testid="saveGrade"
                    size="sm"
                    style="text-sm font-sans mx-0 my-2 px-4 bg-violet-500 text-white hover:bg-violet-600"
                    disabled={isSubmitting}
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
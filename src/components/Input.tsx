import React from 'react';
import { useTranslation } from 'react-i18next';
import { RegisterOptions } from 'react-hook-form';

type DefaultProps = {
  customClass?: string;
};

const inputDefaultProps = {
  customClass: '',
} as DefaultProps;

type inputProps = {
  // eslint-disable-next-line  no-unused-vars
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
  register: any;
  errors: any;
  readOnly?: boolean
  validationRules?: RegisterOptions;
};

function Input({
  labelFor,
  labelText,
  id,
  name,
  type,
  errors,
  placeholder,
  customClass,
  isRequired=false,
  register,
  handleChange,
  readOnly = false,
  validationRules = {},
}: inputProps & DefaultProps) {
  const { t } = useTranslation();

  /* Format error message to remove the tick and capitilize the first letter */
  let fieldName = name.replace(/-/gi, ' ');
  fieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
  /* Format error message end */

   return (
    <div className="flex flex-col items-start justify-start font-serif w-full">
      <label
        htmlFor={labelFor}
        className="mb-[2px] font-semibold text-[.84rem] md:text-[.87rem]"
      >
        {t(labelText)}
      </label>
      <input
        {...register(name, {
          required: {
            value: isRequired,
            message: `${t(`${fieldName} is required`)}`,
          },
        })}
        id={id}
        type={type}
        className={`text-[.84rem] placeholder:text-[.85rem] rounded-[3px] appearance-none relative block w-full px-3 py-[5px] border border-gray-100 placeholder-gray-700 dark:placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 dark:text-dark-text-fill dark:border-neutral-700 ${
          readOnly ? 'bg-gray-100 cursor-not-allowed' : ''
        } ${customClass}`}
        placeholder={placeholder}
        onChange={handleChange}
        readOnly={readOnly}
      />
      <div className="text-[.78rem] md:text-[.83rem]">
        <small className="text-red-600">
          {errors[name] && errors[name].message}
        </small>
      </div>
    </div>
  );
}

Input.defaultProps = inputDefaultProps;

export default Input;
import React from 'react';
import { useTranslation } from 'react-i18next';

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
  isRequired,
  register,
}: inputProps & DefaultProps) {
  const { t } = useTranslation();

  /* Format error message to remove the tick and capitilize the first letter */
  let fieldName = name.replace(/-/gi, ' ');
  fieldName = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
  /* Format error message end */

  return (
    <div className="flex flex-col items-start justify-start">
      <label htmlFor={labelFor} className="mb-2 font-semibold">
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
        className={`rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary focus:z-10 sm:text-sm  dark:text-dark-text-fill dark:border-white  ${customClass}`}
        placeholder={placeholder}
      />
      <div className="">
        <small className="text-red-600">
          {errors[name] && errors[name].message}
        </small>
      </div>
    </div>
  );
}

Input.defaultProps = inputDefaultProps;

export default Input;

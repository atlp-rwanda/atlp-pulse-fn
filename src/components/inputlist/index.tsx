/* eslint-disable no-useless-escape */

import React, { Dispatch, FC, SetStateAction, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import css from './style.module.css';

const validateEmail = (email: string) =>
  email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

interface props {
  name?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  values: string[];
  setValues: Dispatch<SetStateAction<string[]>>;
}
function InputList({
  name = '',
  type = 'text',
  placeholder = '',
  label,
  values = [],
  setValues,
}: props) {
  const { t } = useTranslation();
  const input = useRef<HTMLInputElement>(null);

  const change = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!input.current) return;

    const key = e.key.trim().toLowerCase();
    if ([',', 'enter'].includes(key)) {
      const val: string[] = input.current.value
        .split(',')
        .map((one) => one.trim());
      const valid: string[] = val.filter((one) => validateEmail(one));
      setValues((prev) => [...new Set([...valid, ...prev])]);

      const inValid: string[] = val.filter((one) => !validateEmail(one));
      input.current.value = inValid.map((one) => one.trim()).join(', ');
    }
  };

  const remove = (email: string) => {
    setValues((prev) => [...prev.filter((one) => one !== email)]);
  };

  return (
    <div className={`${css.container}`}>
      {typeof label === 'string' && (
        <small className={css.label}>{label}</small>
      )}
      <input
        ref={input}
        type={type}
        name={name}
        className={`dark:bg-dark-tertiary dark:text-white border border-primary rounded outline-none px-5 font-sans text-xs py-2 w-full ${css.input}`}
        placeholder={t(placeholder)}
        onKeyUp={change}
      />
      {values.map((one: string) => (
        <div key={one} className={`${css.item}`}>
          <p>{one}</p>
          <button
            type="button"
            onClick={() => remove(one)}
            className={css.remove}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default InputList;

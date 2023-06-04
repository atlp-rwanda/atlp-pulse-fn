/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import {
  Control,
  Controller,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form';
import Select from 'react-select';

const customStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : '#148FB6',
  }),
  valueLabel: (styles: any) => ({
    ...styles,
    text: 'white',
  }),
  control: (styles: any) => ({
    ...styles,
    height: 20,
    // height: '30px',
    width: '100%',
    backgroundColor: '#374151',
    borderColor: 'rgb(20 143 182)',
    text: 'white',
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

function CustomSelect({
  placeholder,
  name,
  value,
  defaultValue,
  options,
  onChange,
  ...props
}: any) {
  return (
    <Select
      value={defaultValue?defaultValue: value}
      className="my-react-select-container"
      classNamePrefix="my-react-select"
      styles={customStyles}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      isSearchable
      {...props}
    />
  );
}

export default function ControlledSelect({
  options,
  defaultValue,
  placeholder = 'Select...',
  register,
  noRegister,
  ...props
}: {
  options?: { value?: any; label?: any }[];
  defaultValue?: any;
  placeholder?: string;
  register?: { control: Control; name: string; rules?: { [a: string]: any } };
  noRegister?: { onChange: (e?: any) => void };
}) {
  let onChange: () => void;
  let name: string = '';
  let control: Control = [] as unknown as Control;
  let rules: { [a: string]: any } | undefined;

  noRegister && ({ onChange } = noRegister);
  register && ({ control, name, rules } = register);

  return register ? (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { value, onChange } }) => (
        <CustomSelect
          placeholder={placeholder}
          options={options}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    />
  ) : (
    <CustomSelect
      placeholder={placeholder}
      defaultValue={defaultValue!}
      name={name!}
      onChange={onChange!}
      options={options}
      {...props}
    />
  );
}

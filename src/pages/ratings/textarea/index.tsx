import React, { useCallback, useEffect, useRef, useState } from 'react';
import useAutosizeTextArea from './autosize';

type props = {
  resize?: 'none' | 'horizontal' | 'vertical' | 'both';
  required?: boolean;
  disabled?: boolean;
  name?: string;
  defaultValue?: string;
  id?: string;
  className?: string;
  minHeight?: string;
  maxHeight?: string;
  placeholder?: string;
  onChange?: (arg: React.ChangeEvent<HTMLTextAreaElement>) => any;
};

function TextArea({
  resize = 'both',
  placeholder,
  onChange,
  className = '',
  id,
  disabled,
  minHeight,
  maxHeight,
  defaultValue = '',
  name,
  required,
  ...other
}: props) {
  const [value, setValue] = useState<string | undefined>(undefined);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);
  useEffect(() => {
    setValue(() => defaultValue);
  }, [defaultValue]);

  const textAreaValueChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue((e.target as HTMLTextAreaElement).value);
      if (typeof onChange === 'function') onChange(e);
    },
    [onChange],
  );

  return (
    <textarea
      ref={textAreaRef}
      id={id}
      style={{
        resize,
        minHeight: minHeight ?? '4pc',
        maxHeight: maxHeight ?? 'auto',
      }}
      placeholder={placeholder}
      className={className}
      required={required}
      onChange={textAreaValueChange}
      disabled={disabled}
      name={name}
      {...other}
      data-testid="input-element"
      defaultValue={defaultValue}
    />
  );
}

export default TextArea;

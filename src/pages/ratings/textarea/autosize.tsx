/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';

const useAutosizeTextArea = (textAreaRef: HTMLElement | null, value: any) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = '1em';
      const scrollHeight = textAreaRef?.scrollHeight;
      textAreaRef.style.height = `${scrollHeight}px`;
    }
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;

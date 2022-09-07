/* eslint-disable */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const WithClickOutside = (WrappedComponent: any) => {
  const Component = ({ styles }: any) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const ref = useRef<any>(null);

    const clickOutside = () => {
      /* istanbul ignore next */
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
    };

    const setRef = useCallback(() => {
      clickOutside();
      return [ref];
    }, []);

    useEffect(() => {
      /* istanbul ignore next */
      if (open) setOpen(false);
    }, [location.key]);
    const [newRef] = setRef();

    return (
      <WrappedComponent
        open={open}
        setOpen={setOpen}
        ref={newRef}
        styles={styles}
      />
    );
  };
  return Component;
};
export default WithClickOutside;

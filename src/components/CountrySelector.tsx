/* eslint-disable */
import React, { MutableRefObject, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COUNTRIES, SelectMenuOption } from '../constants/countries';
import { AnimatePresence, motion } from 'framer-motion';

const CountrySelector = React.forwardRef<
  HTMLDivElement,
  {
    id: string;
    open: boolean;
    onToggle: () => void;
    onChange: (value: any) => void; //eslint-disable-line
    selectedValue: SelectMenuOption;
  }
>((props, ref) => {
  useEffect(() => {
    const mutableRef = ref as MutableRefObject<HTMLDivElement | null>;

    const handleClickOutside = (event: any) => {
      if (
        mutableRef.current &&
        !mutableRef.current.contains(event.target) &&
        props.open
      ) {
        props.onToggle();
        setQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const [query, setQuery] = useState('');
  const { t } = useTranslation();

  return (
    <div ref={ref} data-testid="countries" className="w-full">
      <div className="relative font-serif">
        <button
          type="button"
          data-testid="country-selector-button"
          className="bg-white  dark:bg-black/45 relative w-full border border-gray-300  rounded-[3px] shadow-sm pl-2 pr-1 py-[5px] text-left cursor-default focus:outline-none focus:ring-1  focus:ring-primary focus:border-primary focus:z-10 text-[.8rem] md:text-[.85]  dark:text-dark-text-fill dark:border-neutral-700  darksm:text-sm"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={props.onToggle}
        >
          <span
            className="truncate flex items-center"
            data-testid="country-selector-title"
          >
            <img
              alt={`${props.selectedValue?.value || ''}`}
              data-testid="country-selector-flag"
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${props.selectedValue?.value}.svg`}
              className={'inline mr-2 h-3 md:h-4 rounded-sm'}
            />
            {props.selectedValue?.title || 'Select a country'}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <AnimatePresence>
          {props.open && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute z-10  w-full bg-white dark:bg-[#1A1A1A] shadow-lg max-h-80 rounded-md text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
            >
              <div className="sticky top-0 z-10 bg-white dark:bg-[#1A1A1A]">
                <li className=" text-gray-900 dark:text-dark-text-fill cursor-default select-none relative py-2 px-3">
                  <input
                    type="search"
                    name="search"
                    data-testid="countrySearch"
                    autoComplete={'off'}
                    className="rounded-[3px] w-full px-2 py-1 border border-gray-300 placeholder-gray-700 dark:placeholder-gray-300 focus:outline-none  text-[.8rem] md:text-[.85rem] dark:text-white text-dark-bg dark:border-neutral-700 bg-transparent"
                    placeholder={t('Search a country')}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </li>
                <hr />
              </div>

              <div
                className={
                  'h-44 md:h-64 scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-600 scrollbar-thumb-rounded scrollbar-thin overflow-y-scroll custom-scrollbar'
                }
              >
                {COUNTRIES.filter((country) =>
                  country.title.toLowerCase().startsWith(query.toLowerCase()),
                ).length === 0 ? (
                  <li
                    className="text-gray-900  dark:text-dark-text-fill cursor-default select-none relative py-2 pl-3 pr-9"
                    data-testid="no-country-option"
                  >
                    {t(' No countries found')}
                  </li>
                ) : (
                  COUNTRIES.filter((country) =>
                    country.title.toLowerCase().startsWith(query.toLowerCase()),
                  ).map((value, index) => {
                    return (
                      <li
                        key={`${props.id}-${index}`}
                        className="text-[.8rem] md:text-[.85rem] text-gray-900 dark:text-dark-text-fill cursor-default select-none relative py-[6px] md:py-2 pl-3 pr-9 flex items-center hover:bg-gray-200 dark:hover:text-dark-bg transition"
                        id="listbox-option-0"
                        role="option"
                        onClick={() => {
                          props.onChange(value.value);
                          setQuery('');
                          props.onToggle();
                        }}
                        data-testid="country-selector-option"
                      >
                        <img
                          alt={`${value.value}`}
                          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value.value}.svg`}
                          className={'inline mr-2 h-[10px] md:h-4 rounded-sm'}
                        />

                        <span className="font-normal truncate">
                          {value.title}
                        </span>
                        {value.value === props.selectedValue?.value ? (
                          <span className="text-blue-600 absolute inset-y-0 right-0 flex items-center pr-8">
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        ) : null}
                      </li>
                    );
                  })
                )}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
});

export default CountrySelector;

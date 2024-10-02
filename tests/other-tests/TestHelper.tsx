/* eslint-disable */
import { render } from '@testing-library/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MemoryRouter } from 'react-router';

/**
 * Testing Library utility function to wrap tested component in React Hook Form
 * @param {ReactElement} ui A React component
 * @param objectParameters
 * @param {Object} objectParameters.defaultValues Initial form values to pass into
 * React Hook Form, which you can then assert against
 * @param {Array} objectParameters.toPassBack React Hook Form method names which we'd
 * like to pass back and use in tests.  A primary use case is sending back 'setError',
 * so we can manually setErrors on React Hook Form components and test error handling
 */
export function renderWithReactHookForm(
  ui: any,
  { defaultValues = {}, toPassBack = [] } = {},
) {
  let reactHookFormMethods = {};

  const Wrapper = ({ children }: any) => {
    const methods = useForm({ defaultValues });
    for (let reactHookFormItem of toPassBack) {
      reactHookFormMethods[reactHookFormItem] = methods[reactHookFormItem];
    }
    return (
      <MemoryRouter>
        <FormProvider {...methods}>{children}</FormProvider>
      </MemoryRouter>
    );
  };

  return {
    ...render(ui, { wrapper: Wrapper }),
    reactHookFormMethods,
  };
}

export default renderWithReactHookForm;

import React, { useEffect } from 'react';

const APP_ID = 'com.atlp.pulseapp';

export default function RedirectHandler() {
  const buildQueryString = (params: URLSearchParams) => {
    let queryParams = '?';
    const ignoredKeys = ['path', 'dest', 'fallback'];

    params.forEach((value, key) => {
      if (ignoredKeys.includes(key)) return;

      if (!queryParams?.endsWith('?') && !queryParams?.endsWith('&'))
        queryParams += '&';

      queryParams += `${key}=${value}`;
    });

    return queryParams;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryParams = buildQueryString(params);
    const path = params.get('path');
    const destnation = params.get('dest');
    const fallback = params.get('fallback');

    if (path != null) {
      if (destnation === 'web') {
        return window.location.replace(path + queryParams);
      }

      if (destnation === 'app') {
        setTimeout(
          () => window.location.replace(`${APP_ID}://${path}${queryParams}`),
          500,
        );
        window.location.replace(fallback ? fallback + queryParams : '/');
      }

      window.location.replace(fallback ? fallback + queryParams : '/');
    } else {
      // eslint-disable-next-line no-console
      console.error('Invalid redirect data');
    }

    return () => {};
  }, []);

  return (
    <div className=" dark:bg-dark-frame-bg flex flex-col py-8 px-5  items-center justify-center grow h-full w-full">
      <p>Redirecting...</p>
    </div>
  );
}

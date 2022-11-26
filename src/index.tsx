/* eslint-disable */

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import fetch from 'cross-fetch'
import { setContext } from '@apollo/client/link/context';
import React, { Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Skeleton from './components/Skeleton';
import './i18n'
import './index.css';

import { onError } from '@apollo/client/link/error';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './hook/useAuth';
import { t } from 'i18next';
const App = React.lazy(() => import('./App'));

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      if (extensions?.code === 'JWT_EXPIRED') {
        window.location.pathname = '/users/login';
        localStorage.removeItem('auth');
        localStorage.removeItem('auth_token');
        toast.error(`${t('You have not been using the website for a while')}`);
        return;
      } else if (extensions?.code === 'ORG_JWT_EXPIRED') {
        window.location.pathname = '/login/org';
        localStorage.removeItem('orgTpken');
        localStorage.removeItem('orgName');
        localStorage.removeItem('auth');
        localStorage.removeItem('auth_token');
        toast.error(`${t('Your Org token has expired, try to login again')}`);
        return;
      }
    });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  uri: process.env.BACKEND_URL || 'http://localhost:4000',fetch
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth_token');

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});

const container = document.getElementById('tree')!;
const root = ReactDOMClient.createRoot(container).render(
  <ApolloProvider client={client}>
    <Suspense fallback={<Skeleton />}>
      <UserProvider>
        <App />
        <ToastContainer theme="colored" />
      </UserProvider>
    </Suspense>
  </ApolloProvider>,
);

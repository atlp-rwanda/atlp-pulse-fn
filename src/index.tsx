/* eslint-disable */

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Skeleton from './components/Skeleton';
import './i18n.ts';
import './index.css';

import { onError } from '@apollo/client/link/error';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './hook/useAuth';
const App = React.lazy(() => import('./App'));

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      if (extensions?.code === 'JWT_EXPIRED') {
        window.location.pathname = '/users/login';
        window.localStorage.clear();
        toast.error('You have not been using the website for a while');
        return;
      }
    });
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
  uri: process.env.BACKEND_URL || 'http://localhost:4000',
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

// render the app using apolloprovider
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

/* eslint-disable */

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
  split,
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
import { WebSocketLink } from '@apollo/client/link/ws';
import { t } from 'i18next';
import { getMainDefinition } from '@apollo/client/utilities';
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
  uri: process.env.BACKEND_URL || 'http://localhost:4000',
});

const wsLink = new WebSocketLink({
  uri: process.env.WS_BACKEND_URL || 'ws://localhost:4000',
  options: {
    reconnect: true,
  },
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

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  from([errorLink, authLink.concat(httpLink)]),
);

export const client = new ApolloClient({
  link: splitLink,
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
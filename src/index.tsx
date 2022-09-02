/* eslint-disable */

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Skeleton from './components/Skeleton';
import './i18n.ts';
import './index.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './hook/useAuth';
const App = React.lazy(() => import('./App'));

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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

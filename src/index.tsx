/* eslint-disable */

import React, { Suspense } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './i18n.js';
import './index.css';
import Skeleton from './components/Skeleton';

import UserProvider from './hook/useAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = React.lazy(() => import('./App'));
const client = new ApolloClient({
  uri: 'http://54.147.153.168',
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

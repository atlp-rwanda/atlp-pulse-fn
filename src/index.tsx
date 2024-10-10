import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './i18n';
import './index.css';
import { onError } from '@apollo/client/link/error';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { t } from 'i18next';
import { getMainDefinition } from '@apollo/client/utilities';
import createUploadLink from 'apollo-upload-client/public/createUploadLink.js';
import UserProvider from './hook/useAuth';
import App from './App';
import ThemeProvider from './hook/ThemeProvider';

const specificMessagesToLogout = [
  'User not authenticated',
  'User account does not exist or has been deleted',
  'User with this token no longer exist!!',
  'suspend',
  'please contact your organization admin for assistance',
];
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      if (
        specificMessagesToLogout.some((errorMessage) =>
          message.includes(errorMessage),
        )
      ) {
        const encodedMessage = encodeURIComponent(message); // Encode the message
        window.location.href = `/users/login?redirect_message=${encodedMessage}`;
        localStorage.removeItem('auth');
        localStorage.removeItem('auth_token');
        toast.error(message);
      }

      if (extensions?.code === 'JWT_EXPIRED') {
        window.location.pathname = '/users/login';
        localStorage.removeItem('auth');
        localStorage.removeItem('auth_token');
        toast.error(`${t('You have not been using the website for a while')}`);
      } else if (extensions?.code === 'ORG_JWT_EXPIRED') {
        window.location.pathname = '/login/org';
        localStorage.removeItem('orgToken');
        localStorage.removeItem('orgName');
        localStorage.removeItem('auth');
        localStorage.removeItem('auth_token');
        toast.error(`${t('Your Org token has expired, try to login again')}`);
      }
    });
  }

  if (networkError) toast.error(`[Network error]: ${networkError}`);
});

// Create upload link
const uploadLink = createUploadLink({
  uri: process.env.BACKEND_URL || 'https://devpulse-backend.onrender.com/',
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: process.env.WS_BACKEND_URL || 'wss://devpulse-backend.onrender.com/',
    connectionParams: {
      authToken: localStorage.getItem('auth_token'),
    },
  }),
);

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('auth_token');

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
      'apollo-require-preflight': 'true',
    },
  };
});

// Use splitLink to handle both WebSocket and HTTP requests
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  from([errorLink, authLink.concat(uploadLink)]),
);

const cache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        profile: {
          merge(existing, incoming) {
            return { ...existing, ...incoming };
          },
        },
      },
    },
  },
});

// Initialize Apollo Client
export const client = new ApolloClient({
  link: splitLink,
  cache,
});

// Render the app using ApolloProvider
const container = document.getElementById('tree')!;

const root = ReactDOMClient.createRoot(container).render(
  <ApolloProvider client={client}>
    <ThemeProvider>
      <UserProvider>
        <App />
        <ToastContainer theme="colored" />
      </UserProvider>
    </ThemeProvider>
  </ApolloProvider>,
);

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'http://54.147.153.168',
  cache: new InMemoryCache(),
});

// render the app using apolloprovider
const container = document.getElementById('tree')!;

const root = ReactDOMClient.createRoot(container).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

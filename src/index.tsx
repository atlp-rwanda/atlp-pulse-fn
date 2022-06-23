import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import {ApolloCache, ApolloClient, InMemoryCache, useQuery, gql} from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

client.query({
  query: gql`
    query shake {
      hello
    } `
})
.then(result => console.info(result))
const container = document.getElementById('tree')!;

const root = ReactDOMClient.createRoot(container)
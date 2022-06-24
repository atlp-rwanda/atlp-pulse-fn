import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import {ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql} from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://54.147.153.168',
  cache: new InMemoryCache()
})

// create an app component
const App = () => {
  const {data, loading, error} = useQuery(gql`
    query shake {
      hello
    } `)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  return <p>{data.hello}</p>
}


// render the app using apolloprovider
const container = document.getElementById('tree')!;

const root = ReactDOMClient.createRoot(container).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import {ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql} from "@apollo/client"

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

// test the graphql server
client.query({
  query: gql`
    query shake {
      hello
    } `
})
.then(result => console.info(result))
.catch(error => console.error(error))

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

import React from 'react'
import { useQuery, gql } from "@apollo/client"
import Header from './components/Header'
import LandingPageBody from './components/LandingPageBody'
import Footer from './components/Footer'

const App = () => {
    // const { data, loading, error } = useQuery(gql`
    //   query shake {
    //     hello
    //   } `)
    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error: {error.message}</p>
    return (
        <div>
            <Header />
            <LandingPageBody />
            <Footer />
        </div>
    )
}
export default App;

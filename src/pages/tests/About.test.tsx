import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from "react-test-renderer"
import "@testing-library/jest-dom"
import { About } from '../About'
import { MockedProvider as ApolloProvider } from "@apollo/client/testing";

describe('About page',()=>{

    it('renders the about page',()=>{
        const elem = renderer.create(
            <MemoryRouter>
                <ApolloProvider>
                    <About/>
                </ApolloProvider>
            </MemoryRouter>
        )

        expect(elem.toJSON()).toMatchSnapshot()
    })

})

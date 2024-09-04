import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import LandingPage from "../Home"

describe('Home page',()=>{
    it('renders the landing page',()=>{
        const elem = renderer.create(
            <MemoryRouter>
                <ApolloProvider>
                    <LandingPage/>
                </ApolloProvider>
            </MemoryRouter>
        )

        expect(elem.toJSON()).toMatchSnapshot()
    })
})
  
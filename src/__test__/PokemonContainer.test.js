import React from 'react';
import ReactDOM from 'react-dom';
import { PokemonContainer } from '../containers/PokemonContainer';
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient,InMemoryCache } from '@apollo/client';

it("renders without crashing" , () => {
    const div = document.createElement("div");
    const client = new ApolloClient({
        uri:'https://graphql-pokemon2.now.sh',
        cache: new InMemoryCache()
      });
    ReactDOM.render(
    <ApolloProvider client={client}>
    <PokemonContainer></PokemonContainer>
    </ApolloProvider>, div);
})

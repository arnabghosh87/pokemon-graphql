import React from 'react';
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonContainer } from './containers/PokemonContainer';
import Header from './components/Header';
import "./App.scss";

function App() {
  const client = new ApolloClient({
    uri:'https://graphql-pokemon2.now.sh',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <PokemonContainer/>
    </ApolloProvider>
    
  );
}

export default App;


import React from 'react';
import ApolloCliente from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';

import PokemonContainer from './containers/PokemonContainer';


function App() {

  const client = new ApolloCliente({
    uri: 'https://graphql-pokemon.now.sh'
  });

  return (
    <ApolloProvider client={client}>
      <main>
          <PokemonContainer/>
      </main>
    </ApolloProvider>
  );
}

export default App;

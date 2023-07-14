import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://wingie-case.netlify.app:4000/graphql/',
    cache: new InMemoryCache()
  });
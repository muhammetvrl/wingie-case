import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: "/.netlify/functions/graphql",
    cache: new InMemoryCache()
  });
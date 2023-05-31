import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const client = new ApolloClient({
  uri: graphqlAPI,
  cache: new InMemoryCache(),
});

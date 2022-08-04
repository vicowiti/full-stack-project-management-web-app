import React from "react";
import NavBar from "./components/Navbar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <NavBar />
        <div className="container">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
};

export default App;

import React from "react";
import NavBar from "./components/Navbar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import NewClientModal from "./components/NewClientModal";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <NewClientModal />
            <Projects />
            <Clients />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
};

export default App;

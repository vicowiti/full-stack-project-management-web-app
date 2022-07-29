import React from "react";
import NavBar from "./components/Navbar";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <NavBar />
        <div className="container">ff</div>
      </ApolloProvider>
    </>
  );
};

export default App;

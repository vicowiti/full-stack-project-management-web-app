import React from "react";
import { gql, useQuery } from "@apollo/client";
import Card from "react-bootstrap/Card";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";
import Spinnerr from "./Spinner";

const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinnerr />;
  if (error) return <p>Something went wrong</p>;
  if (data) {
    const { clients } = data;

    return (
      <div>
        <h1>Clients</h1>
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <ClientRow client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Clients;

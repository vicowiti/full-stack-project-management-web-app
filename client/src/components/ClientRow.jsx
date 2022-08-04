import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { REMOVE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";

const ClientRow = ({ client }) => {
  const [removeClient] = useMutation(REMOVE_CLIENT, {
    variables: {
      id: client.id,
    },
    // refetchQueries: [{ query: GET_CLIENTS }],
    update(cache, { data: { removeClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter((client) => client.id !== removeClient.id),
        },
      });
    },
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-sm btn-danger" onClick={removeClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;

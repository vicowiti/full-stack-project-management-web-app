import { gql } from "@apollo/client";

export const REMOVE_CLIENT = gql`
  mutation removeClient($id: ID!) {
    removeClient(id: $id) {
      name
      id
      email
      phone
    }
  }
`;

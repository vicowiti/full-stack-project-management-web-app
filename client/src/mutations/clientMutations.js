import { gql } from "@apollo/client";

export const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

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

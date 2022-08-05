import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      name
      id
      status
      client {
        name
        id
        phone
      }
    }
  }
`;

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      name
      id
      description
      status
      client {
        name
        phone
        email
        id
      }
    }
  }
`;

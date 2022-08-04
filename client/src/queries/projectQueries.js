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

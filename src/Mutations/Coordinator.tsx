import { gql } from '@apollo/client';


export const GetAllCoordinatorUsers = gql`
  query GetCoordinatorUsers($orgToken: String) {
    getAllCoordinatorUsers(orgToken: $orgToken) {
      id
      email
      profile {
        name
      }
    }
  }
  
`;
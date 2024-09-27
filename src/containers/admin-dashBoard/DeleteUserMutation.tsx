import { gql } from '@apollo/client';

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      message
    }
  }
`;

export default DELETE_USER_MUTATION;

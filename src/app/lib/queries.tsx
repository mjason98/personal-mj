import { gql } from 'graphql-request';

export const GET_LAST_PERSONAL_INFO = gql`
query Program {
  personalInfos(last: 1) {
    id
    name
    linkedin
    desc
    faceFoto {
      id
      url
    }
  }
}
`;
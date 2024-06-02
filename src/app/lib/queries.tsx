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


export const GET_PROJECTS = gql`
query Projects {
  personalProjects {
    id
    name
    desc
    thumbnail {
      id
      url
    }
  }
}
`;

export const GET_SINGLE_PROJECT = gql`
query Project ($id: ID!) {
  personalProject(where: {id: $id}) {
    id
    name
    desc
    url
    thumbnail {
      id
      url
      width
      height
    }
    personalPosts {
      id
      image {
        url
      }
      text
      title
    }
  }
}
`;
import { gql } from 'graphql-request';

export const GET_LAST_PERSONAL_INFO = gql`
query Program {
  personalInfos(first: 1, orderBy: publishedAt_DESC) {
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


export const GET_ARTICLES = gql`
query Articles {
  personalArticles {
    id
    title
    url
    keywords
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

export const GET_RECIENT_POSTS = gql`
query Recient {
  personalPosts(first: 2, orderBy: publishedAt_DESC) {
    id
    title
    image {
      url
    }
  }
}
`;

export const GET_GAMEDEV_POSTS = gql`
query DevPosts($tag: String!) {
  personalPosts(where: {tag: $tag}) {
    id
    image {
      url
      width
      height
    }
    text
    title
  }
}
`;
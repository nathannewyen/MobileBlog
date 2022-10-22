import { gql } from "apollo-server";
const typeDefs = gql`
  type Post {
    id: Int!
    title: String
    description: String
    author: String
    image: String
    likes: Int
    createdAt: String
  }

  type Query {
    posts: [Post]
  }

  type Mutation {
    addPost(
      title: String!
      description: String!
      image: String!
      author: String!
    ): Post

    deletePost(id: Int!): Boolean

    likePost(id: Int!): Boolean
  }
`;

export default typeDefs;

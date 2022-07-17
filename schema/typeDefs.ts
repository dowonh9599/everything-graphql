import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    height: Float!
    isMarried: Boolean
    nationality: String
    friends: [User]
    movieLiked: [Movie]
    latestMovie(id: ID!): Movie
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
    isInTheater: Boolean!
  }

  type Query {
    users: [User!]
    user(id: ID!): User
    movies: [Movie!]
    movie(name: String!): Movie
  }
  input CreateUserInput {
    name: String!
    username: String!
    age: Int = 18
    height: Float!
    isMarried: Boolean
    nationality: String
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): [User!]
  }
`;

export { typeDefs };

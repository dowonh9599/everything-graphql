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

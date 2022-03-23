const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveVideoGame(videoGameData: VideoGameInput!): User
  removeVideoGame(videoGameId: ID!): User
}
type User {
    _id: ID!
    username: String!
    email: String
    videoGameCount: Int
    savedVideoGames: [VideoGame]
  }
type VideoGame {
    videoGameId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }
input VideoGameInput {
    authors: [String]
    description: String!
    videoGameId: String!
    image: String
    link: String
    title: String!
  }
type Query {
    me: User
  }
  type Auth {
    token: ID!
    user: User
  }`;

module.exports = typeDefs;
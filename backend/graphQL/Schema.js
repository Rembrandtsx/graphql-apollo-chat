const graphqlTools = require('graphql-tools')
const resolvers = require('./Resolvers')
const typeDefs = `
type User {
 id: ID!
 name: String!
 messages: [Message]
}
type Message {
 id: ID!
 text: String!
 user: User
}
# This type specifies the entry points into our API. In this case
# there are two. messages and users
type Query {
  messages: [Message]
  users(id: ID!): User
}
type Mutation{
 sendMessage(text: String!, user: String): Message
}
`
module.exports = graphqlTools.makeExecutableSchema({ typeDefs, resolvers })

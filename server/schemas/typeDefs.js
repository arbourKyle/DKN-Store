const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    cart: [Product]
  }

  type Product {
    _id: ID!
    name: String!
    short_desc: String!
    long_desc: String
    price: Int
    image: String!
    category: String!
    rating: Int    
  }
  Auth {
    token: ID
    user: User
  }
  type Query {
    products: [Product]
    product(_id: String): Product
    matchups(_id: String): [Matchup]
  }
  type Mutation {
    createProduct(
      name: String!
      short_desc: String!
      long_desc: String
      price: Int
      image: String!
      category: String!
      rating: Int    
    ): Product
    createUser(email: String! password: String!): Auth
    login(email: String! password: String!): Auth
  }
`;

module.exports = typeDefs;
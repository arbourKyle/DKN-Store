const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    password: String!
    cart: [Product]
  }
  type Category {
    id: ID
    name: String
  }
  type Product {
    id: ID!
    name: String!
    short_desc: String
    long_desc: String
    price: Float
    units: String
    image: String!
    category: [Category]
    rating: Int    
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    products: [Product]
    product(id: ID!): [Product]
  }
  type Mutation {
    createProduct(
      name: String!
      short_desc: String
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
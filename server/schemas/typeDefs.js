const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    password: String!
    cart: [Product]
  }
  type Category {
    _id: ID
    name: String
  }
  type Product {
    _id: ID!
    name: String!
    short_desc: String
    long_desc: String
    price: Int
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
    product(_id: String): Product
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
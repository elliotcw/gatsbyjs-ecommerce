import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Subscriber {
    email: String
  }

  type Product {
    id: ID!
    title: String
    slug: String
    status: String
  }

  type Order {
    id: ID!
    product: Product
    orderId: String
    createTime: String
    customerCountry: String
    customerName: String
    customerAddress1: String
    customerAddress2: String
    customerCity: String
    customerState: String
    customerPostcode: String
    customerEmail: String
    customerTelephone: String
    customerNotes: String
  }

  type Mutation {
    createOrder(
      tokenId: String!
      orderId: String!
      productId: String!
      customerCountry: String!
      customerName: String!
      customerAddress1: String!
      customerAddress2: String
      customerCity: String!
      customerState: String!
      customerPostcode: String!
      customerEmail: String!
      customerTelephone: String!
      customerNotes: String
    ): Order
    subscribe(email: String!): Subscriber
    contact(email: String!, name: String!, message: String!): Subscriber
  }
`;

export default typeDefs;
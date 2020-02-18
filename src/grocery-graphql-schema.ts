import { GraphQLSchema, buildSchema } from "graphql";

export const GROCERY_GRAPHQL_SCHEMA: GraphQLSchema = buildSchema(`
  type Query {
    categories(ids: [ID]!): [GroceryCategory]!
  }

  type GroceryCategory {
    id: ID!
    name: String!
    tags: [String]!
    units: String
    items: [GroceryItem]!
  }

  type GroceryItem {
    id: ID!
    associatedTrip: ID
    name: String!
    count: Float!
    expiration: String
    UPC: String
  }

  type GroceryTrip {
    id: ID!
    purchaser: ID!
    name: String!
    description: String
    date: String
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`);
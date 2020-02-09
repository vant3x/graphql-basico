'use strict'

const { graphql, buildSchema } = require('graphql');

// definir el esquema 
const schema  = buildSchema(`
  type Query {
    hello: String
  }
`)

// ejecutar el query
graphql(schema, '{ hello }').then((data) => {
  console.log(data);
});
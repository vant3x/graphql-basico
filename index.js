'use strict';

const { graphql, buildSchema } = require('graphql');

// definir el esquema 
const schema  = buildSchema(`
  type Query {
    hello: String
    saludo: String
  }
`)

// Configurar los resolvers
const resolvers = {
  hello: () => {
    return 'Hola Mealanie'
  },
  saludo: () => {
    return 'que hay pa hacer pues'
  }
}

// ejecutar el query
graphql(schema, '{ hello, saludo }', resolvers).then((data) => {
  console.log(data);
});


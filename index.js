'use strict';

const { graphql, buildSchema } = require('graphql');
const express = require('express'); 
const gqlMiddleware = require('express-graphql');

const app = express();
const port = process.env.port || 4000;

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

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});

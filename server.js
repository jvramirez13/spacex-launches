const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Turns on GraphIQL tool to debug graphql
  })
);

const PORT = process.env.PORT || 5000; //set environment variable

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

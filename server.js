const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Turns on GraphIQL tool to debug graphql
  })
);

const PORT = process.env.PORT || 5000; //set environment variable

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

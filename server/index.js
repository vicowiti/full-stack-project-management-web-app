const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv").config();
const colors = require("colors");
const PORT = process.env.PORT || 5000;
const schema = require("./src/schema/schema");

const connectDB = require("./src/config/db");
//Connect to database
connectDB();

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

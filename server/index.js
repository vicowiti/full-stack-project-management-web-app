const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv").config();
const colors = require("colors");
const PORT = process.env.PORT;
const schema = require("./src/schema/schema");
const cors = require("cors");

const connectDB = require("./src/config/db");
//Connect to database
connectDB(process.env.MONGO);

const app = express();
app.use(cors());

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

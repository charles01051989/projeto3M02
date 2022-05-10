require("dotenv").config();
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const path = require("path");
const app = express();
const routes = require("./src/routes/routes");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000 ")
);



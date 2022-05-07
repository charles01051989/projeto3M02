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

//Rotas
// app.get("/", (req, res) => {
//   res.render("index", { pokedexList, pokemon });
// });
// app.post("/newP", (req, res) => {
//   const pokemon = req.body;
//   pokemon.id = pokedexList.length + 1;
//   pokedexList.push(pokemon);
//   res.redirect("/");
// });
// app.get("/infP/:id", (req, res) => {
//   const id = +req.params.id;
//   pokemon = pokedexList.find((pokemon) => pokemon.id === id)
//   // pokemon = pokedexList.at(id-1)
//   res.redirect("/");
// });
// app.post("/upP/:id", (req, res) => {
//   const id = +req.params.id -1;
//   const cadPokemon = req.body;
//   cadPokemon.id = id +1
//   pokedexList[id] = cadPokemon
//   pokemon = undefined;
//   res.redirect("/");
// });
// // app.get("/delete/:id", (req, res) => {
// //   const id = +req.params.id-1;
// //   delete pokedexList[id];
// //   res.redirect("/");
// // });

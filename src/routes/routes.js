const routes = require("express").Router();

const PokemonController = require("../controllers/PokemonController");

routes.get("/", PokemonController.getAll);
routes.get("/register", PokemonController.register);
routes.post("/create", PokemonController.create);

module.exports = routes;

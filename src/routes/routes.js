const routes = require("express").Router();

const PokemonController = require("../controllers/PokemonController");

routes.get("/", PokemonController.getAll);
routes.get("/register", PokemonController.register);
routes.post("/create", PokemonController.create);
routes.get("/details/:id", PokemonController.details)
routes.get("/getById/:id/:method", PokemonController.getById)

module.exports = routes;

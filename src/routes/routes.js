const routes = require("express").Router();

const UecController = require("../controllers/UecController");

routes.get("/", UecController.getAll);
routes.get("/register", UecController.register);
routes.post("/create", UecController.create);
routes.get("/details/:id", UecController.details);
routes.get("/getById/:id/:method", UecController.getById);
routes.post("/update/:id", UecController.update);
routes.get("/remove/:id/", UecController.remove);

module.exports = routes;

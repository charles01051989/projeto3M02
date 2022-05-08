const Uec = require("../models/Uec");

const getAll = async (req, res) => {
  try {
    const uecs = await Uec.findAll();
    res.render("index", {uecs});
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const register = (req, res) => {
  try {
    res.render("register");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
const create = async (req, res) => {
  try {
    const uec = req.body;
    if (!uec) {
      return res.redirect("/register");
    }
    await Uec.create(uec);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const details = async (req, res) => {
  try {
    const uec = await Uec.findByPk(req.params.id);
    res.render("details", {uec, uecPut: null,
      uecDel:null})
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const uecs = await Uec.findAll();
    const uec = await Uec.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        uecs,
        uecPut: uec,
        uecDel: null,
      });
    } else {
      res.render("index", {
        uecs,
        uecPut: null,
        uecDel: uec,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
  create,
  register,
  details,
  getById,
};

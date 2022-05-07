const Uec = require("../models/Uec");

const getAll = async (req, res) => {
  try {
    const uecs = await Uec.findAll();
    res.render("index", { uecs, pokemon: undefined });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const register = (req, res) => {
  try{
    res.render("register");
  }catch (err) {
    res.status(500).send({ err: err.message });
  }
}

const create = async(req, res) => {
  try{
    const uec = req.body;
    if(!uec){
      return res.redirect("/register")
    }

    await Uec.create(uec);
    res.redirect("/")

  }catch(err) {
    res.status(500).send({ err: err.message });
  }
}

module.exports = {
    getAll,
    register,
    create,
};
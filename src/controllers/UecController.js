const res = require("express/lib/response");
const Uec = require("../models/Uec");


let message = "";
let type = "";
const getAll = async (req, res) => {
  try {
    setTimeout(()=> {
      message = ""
      type = ""
    },1000)
    const uecs = await Uec.findAll();
    res.render("index", {uecs, message, type});
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const register = (req, res) => {
  try {
    res.render("register", {message,type});
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
const create = async (req, res) => {
  try {
    const uec = req.body;
    if (!uec.nome||!uec.imagem||!uec.descricao||!uec.visitacao||!uec.biomas||!uec.localizacao) {
    message = "Preencha todos os campos!";
    type = "danger";
      return res.redirect("/register");
      
    }
    await Uec.create(uec);
    message = "Cadastrado com sucesso!";
    type = "sucess";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const details = async (req, res) => {
  try {
    const uec = await Uec.findByPk(req.params.id);
    res.render("details", {uec, uecPut: null,
      uecDel:null, message, type})
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
      res.render("details", {
        uec,
        uecs,
        uecPut: uec,
        uecDel: null,
        message,
        type,
      });
    } else {
      res.render("details", {
        uec,
        uecs,
        uecPut: null,
        uecDel: uec,
        message,
        type,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async(req, res) => {
  try {
    const uec = req.body;
    await Uec.update(uec, {where: { id: req.params.id } })
    message = "Atualizado com sucesso!";
    type = "sucess";
    res.redirect("/")
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
}

const remove = async(req, res) => {
  try {
    await Uec.destroy({where: { id: req.params.id } });
    message = "Removido com sucesso!";
    type = "sucess";
    res.redirect("/");
  }catch (err) {
    res.status(500).send({ err: err.message });
  }
}

module.exports = {
  getAll,
  create,
  register,
  details,
  getById,
  update,
  remove,
};

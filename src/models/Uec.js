const Sequelize = require("sequelize");
const connection = require("../database/db");


const Uec = connection.define(
  "uec",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    visitacao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    biomas: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    localizacao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
module.exports = Uec;

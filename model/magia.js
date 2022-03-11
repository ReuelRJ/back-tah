const Sequelize = require("sequelize");
const { sequelize, Magia, Personagem } = require("./database");

Magia.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ponto: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    atributo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipoAlcance: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "magia",
    timestamps: false,
  }
);

Magia.belongsTo(Personagem, { onDelete: "cascade" });

module.exports = Magia;

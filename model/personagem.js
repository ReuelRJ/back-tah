const Sequelize = require("sequelize");
const {
  sequelize,
  Personagem,
  Magia,
  Habilidade,
  VantagemDesvantagem,
} = require("./database");

Personagem.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomeReal: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nomePersonagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nomeApp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    raca: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nivel: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    xp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pxp: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    foca: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    destreza: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sorte: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    inteligencia: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    carisma: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    constituicao: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sabedoria: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pv: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    vida: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    mana: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    folego: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "habilidade",
    timestamps: true,
  }
);

Personagem.hasMany(Magia);

module.exports = Personagem;

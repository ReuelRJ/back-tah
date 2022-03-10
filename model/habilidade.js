const Sequelize = require('sequelize');
const { sequelize, Habilidade } = require('./database');

Habilidade.init({
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type:Sequelize.STRING,
        allowNull: false
    },
    custoModFol: {
        type:Sequelize.INTEGER,
        allowNull: false
    },
    tipoAlcance: {
        type:Sequelize.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: "habilidade",
    timestamps: false
})

module.exports = Habilidade
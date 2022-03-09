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
    mana: {
        type:Sequelize.INTEGER,
        allowNull: false
    },
    tipoMagia: {
        type:Sequelize.STRING,
        allowNull: false
    },    
    tipoDano: {
        type:Sequelize.STRING,
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
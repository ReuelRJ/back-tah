const Sequelize = require('sequelize');
const { sequelize, VantagemDesvantagem } = require('./database');

VantagemDesvantagem.init({
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type:Sequelize.STRING,
        allowNull: false
    },
    ponto: {
        type:Sequelize.INTEGER,
        allowNull: false
    },
    atributo: {
        type:Sequelize.STRING,
        allowNull: false
    },
    vd: {
        type:Sequelize.BOOLEAN,
        allowNull:true
    }
},{
    sequelize,
    modelName: "vantagem-desvantagem",
    timestamps: false
})

module.exports = VantagemDesvantagem
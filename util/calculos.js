const math = require("math")

function calculaPontos (pontos) {
    return pontos.map(item => item['tarefas.point']).reduce((total, next) => total + next)
    
}

module.exports = {
    calculaPontos
}
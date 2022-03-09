const moment = require("moment");
require("moment/locale/pt-br");

function timeNow () {
    return moment().format('LTS')
}

function dateNow(){
    return moment().format("DD-MM-YYYY")
}

module.exports = {
    timeNow,
    dateNow
}
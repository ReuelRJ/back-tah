const mysql = require("mysql2");

class commons {
  objAdress = { host: "localhost", dialect: process.env.DIALECT };


  async connectMysql(ambiente) {
    if (global.connection && global.connection.state !== "disconnected") {
      return global.connection;
    }
    const connection = await mysql.createConnection(ambiente);
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
  }

}

module.exports = commons;

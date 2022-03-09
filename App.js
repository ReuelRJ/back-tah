const express = require('express');
const app = express();
const cors = require('cors');
const habilidade = require("./routes/habilidade.routes")

app.use(cors());
app.use(express.json());
app.use("/habilidade", habilidade)

app.get('/', function (req, res) {
  res.send('Ficha dos jogadores de RPG: Terras de alem do horizonte');
});

app.listen(process.env.PORT , () => {
  console.log(`Ficha dos jogadores de RPG: Terras de alem do horizonte. Porta:`, process.env.PORT);
});
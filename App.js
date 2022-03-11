const express = require('express');
const app = express();
const cors = require('cors');
const habilidade = require("./routes/habilidade.routes")
const magia = require("./routes/magia.routes")
const vantagemDesvantagem = require("./routes/vantagem-desvantagem.routes")
const personagem = require("./routes/personagem.routes")


app.use(cors());
app.use(express.json());
app.use("/habilidade", habilidade)
app.use("/magia", magia)
app.use("/vd", vantagemDesvantagem)
app.use("/personagem", personagem)

app.get('/', function (req, res) {
  res.send('Ficha dos jogadores de RPG: Terras de alem do horizonte');
});

app.listen(process.env.PORT , () => {
  console.log(`Ficha dos jogadores de RPG: Terras de alem do horizonte. Porta:`, process.env.PORT);
});
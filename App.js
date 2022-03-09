const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Ficha dos jogadores de RPG: Terras de alem do horizonte');
});

app.listen(process.env.PORT , () => {
  console.log(`Ficha dos jogadores de RPG: Terras de alem do horizonte. Porta:`, process.env.PORT);
});
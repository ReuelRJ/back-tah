const PersonagemDAO = require("../model/personagem");

function create(
  nomeReal,
  nomePersonagem,
  nomeApp,
  raca,
  nivel,
  xp,
  pxp,
  forca,
  destreza,
  sorte,
  inteligencia,
  carisma,
  constituicao,
  sabedoria,
  pv,
  vida,
  mana,
  folego
) {
  return new Promise((resolve, reject) => {
    PersonagemDAO.sync()
      .then(() =>
        PersonagemDAO.create({
          nomeReal: nomeReal,
          nomePersonagem: nomePersonagem,
          nomeApp: nomeApp,
          raca: raca,
          nivel: nivel,
          xp: xp,
          pxp: pxp,
          forca: pxp,
          destreza: destreza,
          sorte: sorte,
          inteligencia: inteligencia,
          carisma: carisma,
          constituicao: constituicao,
          sabedoria: sabedoria,
          pv: pv,
          vida: vida,
          mana: mana,
          folego: folego,
        })
      )
      .then((personagem) => resolve(personagem))
      .catch((error) => {
        console.log("ERROR: " + error);
        reject(error);
      });
  });
}

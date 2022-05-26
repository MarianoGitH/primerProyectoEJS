const path = require("path");

const about = {
  title: "Probando..",
  description: "Esto es una prueba",
  history: "Alguna info",
  menu: "Nuestro menú disponible",
};

const menuDelDia = [
  {
    id: 1,
    title: "Carpaccio fresco",
    description: "Entrada Carpaccio de salmón con cítricos",
    price: "U$S 65.50",
  },

  {
    id: 2,
    title: "Risotto de berenjena",
    description: "Risotto de berenjena y queso de cabra",
    price: "U$S 47.00",
  },

  {
    id: 3,
    title: "Mousse de arroz",
    description: "Mousse de arroz con leche y aroma de azahar",
    price: "U$S 27.50",
  },

  {
    id: 4,
    title: "Espárragos blancos",
    description: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    price: "U$S  37.50",
  },

];

const mainController = {
  index: (req, res) => {
    res.render("index", { about: about, menu: menuDelDia })},

  detail: (req, res) => {
    let plato = menuDelDia.find(plato => plato.id == req.params.menuDelDia)
    console.log(plato);
    res.render('detailMenu', {plato: plato});
  }
  },

 

  // about: (req, res) => {
  //   res.sendFile(path.join(__dirname, "../views/about.html"));
  // },
};

module.exports = mainController;

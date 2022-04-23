const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    description: "Determina si muestra la lista o no en consola 'true/false'",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    description: "Numero hasta donde va la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Se requiere en la base un numero!";
    }
    return true;
  }).argv;

module.exports = {
  argv,
};

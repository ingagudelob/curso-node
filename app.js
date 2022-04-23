const { crearArchivo } = require("./helpers/multiplicar");
const { argv } = require("./config/yargs");

// const base = 8;

// const [, , baseArg] = process.argv;
// const [, base = 5] = baseArg.split("=");

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado!"))
  .catch((err) => console.log(err));

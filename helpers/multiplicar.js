const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
  try {
    console.log("=======================".blue);
    console.log("==== Tabla del".red, base, "=====".red);
    console.log("=======================".blue);
    let resultado,
      salidaTxt = "";
    let nombreArchivo = `tabla-${base}.txt`;

    for (let index = 1; index <= hasta; index++) {
      resultado += `${base} ${"X".red} ${index} = ${base * index}\n`;
      salidaTxt += `${base} X ${index} = ${base * index}\n`;
    }

    //   fs.writeFile("tabla-5.txt", resultado, (err) => {
    //     if (err) throw console.log("NO tiene permisos de escritura!");
    //     console.log("Archivo creado exitosamente!");
    //   });

    fs.writeFileSync(nombreArchivo, salidaTxt);
    listar && console.log(resultado);

    return nombreArchivo;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  crearArchivo,
};

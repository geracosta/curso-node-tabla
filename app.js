const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();
  
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(('Se creó el archivo ' + nombreArchivo).red.underline))
    .catch( err => console.log(err))
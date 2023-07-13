//crearArchivo es la propiedad del objeto que se está exportando en 'multiplicar.js'
//Entonces se destructura y se ocupa en nuestro app.js
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs'); //Importa la configuracion de yargs

const colors = require('colors/safe');

console.clear(); //Limpiar la consola

// //process.argv devuelve un arreglo con los argumentos que capta la consola para nuestro programa codificado
// console.log(process.argv);

console.log(argv); //Mediante Yargs devuelve un objeto y cada cosa que se le pasa a la consola la agrega como una propiedad del objeto { _: [], base: 5, '$0': 'app' }

// const [ , , arg3 = 'base=5' ] = process.argv; //Desestructurando el arreglo
// const [, base = 5 ] = arg3.split('='); //Con la ayuda de la desestructuracion, se obtiene solo el numero de la base

//Para que funcione, se debe de mandar, por ejemplo --base=9

// node app -b 5 -l --hasta=20
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(colors.green(`${nombreArchivo} %s`), 'creado') )
    .catch( err => console.log(colors.red(err)) );
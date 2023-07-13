const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en la consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Define un limite para la tabla de multiplicar'
        }
    })
    .check( (argv, options) => {
        // argv es nuestro objeto y lo checamos para que tengan cosas validad
        if( isNaN(argv.b) ) { //Recordando que argv es un objeto y se esta checando la propiedad b
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv; // --base=5; -b 5

module.exports = argv;
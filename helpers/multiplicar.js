// import * as fs from 'node:fs'; ECMAScriptModule
const fs = require('node:fs'); //CommonJSModule

const colors = require('colors/safe');

// Con AsyncAwait
const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {

    //Si no se manda la base, la tabla del 5 será la que arrojará por defecto

    try {

        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} ${colors.yellow('x')} ${i} = ${colors.magenta(base * i)}\n`;
        }

        // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log('tabla-5.txt creado');
        // })

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida.replace(/\u001b\[\d{1,2}m/g, "") ); // \u001b es para el delimitador de consola ESC

        if( listar ) {
            console.log(colors.magenta('=================='));
            // console.log(`   Tabla del ${base}   `);
            console.log(colors.yellow('   Tabla del %s'), base);
            console.log(colors.magenta('=================='));

            console.log(salida);
        }

        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }

}

// Con Promise
// const crearArchivo = ( base = 5 ) => {

//     //Si no se manda la base, la tabla del 5 será la que arrojará por defecto

//     return new Promise((resolve, reject) => {
//         console.log('==================');
//         // console.log(`   Tabla del ${base}   `);
//         console.log('   Tabla del', base);
//         console.log('==================');
    
//         let salida = '';
    
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }
    
//         // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
//         //     if (err) throw err;
//         //     console.log('tabla-5.txt creado');
//         // })
    
//         fs.writeFileSync( `tabla-${base}.txt`, salida );
//         console.log(salida);
        
//         resolve(`tabla-${base}.txt`);
//     })

// }

//module es un objeto global que existe en node
//Esto se hace porque no se puede exportar de la manera mas nueva con ECMAScript
//Ya que así es node
module.exports = { 
    crearArchivo: crearArchivo
 }
const fs = require('fs');
const colores = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {

    try {
        

        let salida = '';
        let consola = '';
    
        for ( let i = 1; i <= hasta; i++ ) {
            consola = consola + `${ colores.grey( base ) } ${ 'X'.grey } ${ colores.grey( i ) } ${ '='.grey } ${ colores.red( base*i ) }\n`;
            salida = salida + `${ base } X ${ i } = ${ base*i }\n`;
        }
        
        if ( listar ) {

            console.log('============='.red);
            console.log(' Tabla del'.red,base);
            console.log('============='.red);
            console.log(consola);

        };
    
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }


};

module.exports = {
    crearArchivo
}
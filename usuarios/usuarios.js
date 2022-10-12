/* 

funcion bloqueante, tiene que ejecutarse el while

*/

const getUsuarioSync = ( id ) => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000 ) {
        // Esperando...
        // Haciendo fetch de base de datos...
        // Obteniendo datos...
    }

    return {
        id,
        nombre: `Usuario ${ id }`
    }; 
}


 /* 
 
 funcion no bloqueante, recibe el callback y devuelve un objeto(usuario)

 */

const getUsuario = (id, callback ) => {
    const usuario = {
        id,
        nombre: `Usuario ${ id }`
    };
    
    setTimeout(() => {
        callback( usuario );
    }, 3000);
}

module.exports = {
    getUsuario,
    getUsuarioSync
}
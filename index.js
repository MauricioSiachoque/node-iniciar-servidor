import express from 'express';
import router from  './rutas.js';

function main(){
    const app = express();

    app.use(express.json())                                 // <- esta sirve para recibir JSON
    app.use(express.urlencoded({extended:false}))           // <- SIRVE PARA NO RECIBIR OBEJTOS EN LA URL           MEDIDAS DE SEGURIDAD
    app.use(router);

    app.listen(3000);

    console.log("servidor iniciado en el puerto 3000")
}


main();
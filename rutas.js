import { Router } from "express";

const router = Router()

                                                       // PARA DEFINIR LAS RUTAS
router.get('/api/holacliente',function(req,res){
    res.send("<h1>Hola Cliente</h1>")        
})

router.get('/api/adioscliente',function(req,res){
    res.json({"mensaje":"Vuelva pronto"})        
})

router.get('/api/elementos',function(req,res){
    const elementos = ["piedra","papel","tijeras"]                                   // esta linea es para hacerlo de otra manera mas personalizada, de colocar el nombre en la url
    res.json(elementos)       
})

//api/juego/tijeras/papel
router.get('/api/juego/:elemento1/:elemento2',function(req,res){
    let elemento1 = req.params.elemento1
    let elemento2 = req.params.elemento2

    if(elemento1 === elemento2){
        res.send(`<h1>Empate</h1>`)
        return;
    }


})

export default router;           // exportar las configuraciones al index 
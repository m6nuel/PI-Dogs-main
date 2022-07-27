const { Router } = require('express');
const { Raza, Temperamento } = require('../db');

const router = Router();

router.post('/', async ( req, res ) => {
    let { Nombre, Altura, Peso, AñosDeVida, Image } = req.body;

    try {
        const newRaza = await Raza.create({
            Nombre, 
            Altura,
            Peso, 
            AñosDeVida, 
            Image
        })
        res.json(newRaza);
    } catch (e) {
        res.send(e);
    }
    
});


module.exports = router;

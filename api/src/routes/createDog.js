const { Router } = require('express');
const { Raza, Temperamento } = require('../db');

const router = Router();

router.post('/', async ( req, res ) => {
    let { 
        Nombre, 
        A_min, 
        A_max, 
        P_min, 
        P_max, 
        A_vida, 
        Temperament, 
        Image
    } = req.body;

    const arrAlt = [];
    const Amin = A_min;
    const Amax = A_max;
    arrAlt.push(Amin,Amax);

    const arrPeso = []
    const Pmin = P_min;
    const Pmax = P_max;
    arrPeso.push(Pmin, Pmax)

    let newRaza = await Raza.create({
        Nombre, 
        Altura: arrAlt,
        Peso: arrPeso, 
        A_vida, 
        Image,
        Temperament
    })
    
    // let associatedTem = await Temperamento.findAll({
    //     where: { Nombre }
    // })
    

    // newRaza.addTemperament( associatedTem );

    res.status(200).json(newRaza);



    
});


module.exports = router;

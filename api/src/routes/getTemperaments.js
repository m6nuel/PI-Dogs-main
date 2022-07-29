const { Router } = require('express');
const { getApi } = require('../controllers/getApi');
const { Temperamento } = require('../db');

const router = Router();

router.get('/temperaments', async ( req, res ) => {

    const dogs = await getApi();

    const allTemperaments = dogs.map(t => t.Temperamento); 
    const tempts = allTemperaments.toString().split(",");
    console.log(tempts)
    const tempSinRepetir = {};
    const unicos = tempts.filter( temp => {
        return tempSinRepetir.hasOwnProperty(temp) ? false : (tempSinRepetir[temp] = true);
    })
    console.log(unicos);

        unicos.forEach(t => {
            let i = t.trim();
            Temperamento.findOrCreate({
                where: { Nombre: i }
            })
        })

        const allTemp = await Temperamento.findAll();
        res.json( allTemp );
});


module.exports = router;

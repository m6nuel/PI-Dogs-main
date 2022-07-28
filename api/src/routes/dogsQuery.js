const { Router } = require('express');
const { getApiAndDb } = require('../controllers/getApiAndDb');
const { getApiByName } = require('../controllers/getApiByName');
const router = Router();

router.get('/', async ( req, res ) => {
    let {name} = req.query;
    
    const allDogs = await getApiAndDb();

    if (name) {
        try {
            const dogsByName = allDogs.filter( dog => dog.Nombre.toLowerCase().includes(name.toLowerCase()) );
            res.json( dogsByName.length > 0 ? dogsByName : "Raza no encontrada" )
        } catch (e) {
            res.send(e);
        }
    }

        



    // if(name){
    //     try {
    //         let data = await getApiByName(name); 
    //         res.json( data ? data : "No se encontro esa Raza de Perro");
    //     } catch(e){
    //         res.send(e);
    //     }        
    // }
});


module.exports = router;

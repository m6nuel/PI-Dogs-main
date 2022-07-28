const { Router } = require('express');
const { getApiByName } = require('../controllers/getApiByName');
const router = Router();

router.get('/', async ( req, res ) => {
    let {name} = req.query;
    if(name){
        try {
            let data = await getApiByName(name); 
            res.json( data ? data : "No se encontro esa Raza de Perro");
        } catch(e){
            res.send(e);
        }        
    }
});


module.exports = router;

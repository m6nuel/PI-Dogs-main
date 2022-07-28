const { Router } = require('express');
const { getApiForDetail } = require('../controllers/getApiForDetail');
const router = Router();

router.get('/:id', async ( req, res ) => {
    let {id} = req.params;

    const allDogs = await getApiForDetail();

    if (id) {
        try {
            const dogById = allDogs.filter( dog => dog.id == id );
            res.json( dogById.length > 0 ? dogById : "El id que ingresaste no corresponde a ninguna raza" );
        } catch (e) {
            res.send(e);
        }
    }
});


module.exports = router;

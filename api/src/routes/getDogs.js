const { Router } = require('express');
const { getApiAndDb } = require('../controllers/getApiAndDb');

const router = Router();

router.get('/', async ( req, res ) => {
    try {
        let data = await getApiAndDb();
        res.json(data)
        console.log(data)
    } catch (e) {
        res.send(e)
    }
});


module.exports = router;

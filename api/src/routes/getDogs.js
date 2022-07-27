const { Router } = require('express');
const { getApi } = require('../controllers/getApi');

const router = Router();

router.get('/', async ( req, res ) => {
    try {
        let data = await getApi();
        res.json(data)
    } catch (e) {
        res.send(e)
    }
});


module.exports = router;

const { Router } = require('express');

const router = Router();

router.get('/', ( req, res ) => {
    try {
        res.json('hecho00')
    } catch (e) {
        res.send(e)
    }
});


module.exports = router;

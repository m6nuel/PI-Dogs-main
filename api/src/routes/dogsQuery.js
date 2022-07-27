const { Router } = require('express');

const router = Router();

router.get('/', ( req, res ) => {
    let { name } = req.query;
    res.send(name);
});


module.exports = router;

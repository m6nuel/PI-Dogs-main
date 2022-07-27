const { Router } = require('express');

const router = Router();

router.get('/:id', ( req, res ) => {
    let {id} = req.params;
    res.json(id);
});


module.exports = router;

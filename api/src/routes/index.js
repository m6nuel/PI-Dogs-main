const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require('./getDogs');
const dogsQuery = require('./dogsQuery');
const getDogsId = require('./getDogsId');
const createDog = require('./createDog');
const getTemperaments = require('./getTemperaments');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', getDogs);
router.use('/dog', dogsQuery);
router.use('/dog', getDogsId);
router.use('/dogs', createDog);
router.use('/dogs', getTemperaments)

module.exports = router;

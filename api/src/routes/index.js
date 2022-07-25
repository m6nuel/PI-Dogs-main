const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', ( req, res) => {
    
    
    res.send('En proceso')

// Imagen
// Nombre
// Temperamento
// Peso
});

module.exports = router;

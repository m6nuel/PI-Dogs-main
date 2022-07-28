const { Raza, Temperamento } = require('sequelize');

const getDogsDb = async () => {
    return await Raza.findAll({
        include: {
            model: Temperamento,
            attributes: ['Nombre'],
            through: {
                attributes: [],
            }
        }
    })
}

module.exports = { getDogsDb };


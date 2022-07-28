const { Raza, Temperamento } = require("../db");

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


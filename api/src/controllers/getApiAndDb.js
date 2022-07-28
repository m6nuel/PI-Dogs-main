const { getApi } = require("./getApi");
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

const getApiAndDb = async () => {
    const dataApi = await getApi();
    const dataDb = await getDogsDb();

    const allData = [ ...dataApi, ...dataDb ];
    return allData;
}

module.exports = { getApiAndDb };
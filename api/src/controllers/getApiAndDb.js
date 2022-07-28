const { getApi } = require("./getApi");
const { getDogsDb } = require("./getDogsDb");

const getApiAndDb = async () => {
    const dataApi = await getApi();
    const dataDb = await getDogsDb();

    const allData = [ ...dataApi, ...dataDb ];
    return allData;
}

module.exports = { getApiAndDb };
require("dotenv").config();
const { API_KEY } = process.env;
const axios = require('axios');

const getApiByName = async (raza) => {

    let url = `https://api.thedogapi.com/v1/breeds/search?name=${raza}`;

    let razaName = await axios.get(url);
    console.log(razaName.data);
    let razaList = [];
    razaName.data.map( (dog) => {
        razaList.push({
            id : dog.id,
            Nombre: dog.name,
            Temperamento: dog.temperament,
            Peso: dog.weight,
        })
    })
    return razaList;
    // return razaName.data;
}

module.exports = { getApiByName };
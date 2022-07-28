require("dotenv").config();
const { API_KEY } = process.env;
const axios = require('axios');

const getApi = async () => {

    let url = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
    let dogs = [];
    // let dataApi = await axios.get(url);
    // return dataApi.data;
    let dataApi = await axios.get(url);
    
    dataApi.data.map((dog) =>{
        let temperamentArr = [];
        if (dog.temperament) {
            temperamentArr = dog.temperament.split(", ");
        }
        dogs.push({
            id: dog.id,
            Nombre: dog.name,
            temperamentArr,
            Peso: dog.weight,
            Imagen: dog.image.url
        })
    })

    return dogs;
}

module.exports = { getApi };

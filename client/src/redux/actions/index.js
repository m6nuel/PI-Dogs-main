import axios from 'axios';
import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, SEARCH_DOGS } from '../types';

const url = 'http://localhost:3001';

export const getAllDogs = () => {
  return async (dispatch) => {
    let dogs = await axios.get(`${url}/dogs`);

    return dispatch({
      type: GET_ALL_DOGS,
      payload: dogs.data
    })
  }
};

export const getTemperaments = () => {
  return async (dispatch) => {
    let Temperaments = await axios.get(`${url}/dogs/temperaments`);
    let temps = Temperaments.data.filter( temp => temp.Nombre !== '' );

    return dispatch({
      type: GET_ALL_TEMPERAMENTS,
      payload: temps
    })
  }
}

export const searchDogs = (raza) => {
  return async (dispatch) => {
    try {
      let dogs = await axios.get(`${url}/dog?name=${raza}`);
      return dispatch({
        type: SEARCH_DOGS,
        payload: dogs.data
      })
    } catch (error) {
      console.log(error)
    }
  }
};


import axios from 'axios';
import { DETAILS, FILTER_TEMPS, FILTER_WEIGHT, GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, ORDER_ALPH, SEARCH_DOGS } from '../types';

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

export const orderAlpha = ( payload ) => {
  return {
    type: ORDER_ALPH,
    payload
  }
}

export const filterTemps = ( payload ) => {
  return {
    type: FILTER_TEMPS,
    payload
  }
}

export const filterWeight = ( payload ) => {
  return {
    type: FILTER_WEIGHT,
    payload
  }
}

export const details = ({id}) => {
  return async (dispatch) =>{
    try {
      var detail = await axios.get(`${url}/dog/${id}`);

      return dispatch({
        type: DETAILS,
        payload: detail.data
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const createDog = ( payload ) => {
  return async () => {
    const newDog = await axios.post(`${url}/dogs`, payload);
    return newDog;
  }
}
import axios from 'axios';
import { GET_ALL_DOGS } from '../types';

const url = 'http://localhost:3001';

export const getAllDogs = () => {
  return async function(dispatch) {
    var dogs = await axios.get(`${url}/dogs`);
    
    console.log(dogs)
    return dispatch({
      type: GET_ALL_DOGS,
      payload: dogs.data
    })
  }
};


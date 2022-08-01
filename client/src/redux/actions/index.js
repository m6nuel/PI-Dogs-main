import axios from 'axios';
import { types } from '../types';

const url = 'http://localhost:3001';

export function starGetAllDogs() {
    return async function(dispatch) {
      var dogs = await axios.get(`${url}/dogs`);
      
      console.log(dogs)
      return dispatch({
        type: types.getAllDogs,
        payload: dogs.data
      })
    }
  };

  export const getAllDogs = () => ({
    type: types.getAllDogs, 
  })
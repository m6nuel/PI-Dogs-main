import { GET_ALL_DOGS } from "../types";

const initialState = {
    allDogs: []
};

export default function rootReducers  ( state = initialState, { type, payload } ) {
    switch (type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: payload
            }
            
    
        default:
            return state;
    }
}


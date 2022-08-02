import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, SEARCH_DOGS } from "../types";

const initialState = {
    dogs: [],
    temperaments: []
};

export default function rootReducers  ( state = initialState, { type, payload } ) {
    switch (type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: payload
            }
        case GET_ALL_TEMPERAMENTS:
            return {
                ...state,
                temperaments: payload
            }
        case SEARCH_DOGS:
            return {
                ...state,
                dogs: payload
            }
            
    
        default:
            return state;
    }
}


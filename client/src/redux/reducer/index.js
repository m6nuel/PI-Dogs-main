import { GET_ALL_DOGS } from "../types";

const initialState = {
    dogs: []
};

export default function rootReducers  ( state = initialState, { type, payload } ) {
    switch (type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: payload
            }
            
    
        default:
            return state;
    }
}


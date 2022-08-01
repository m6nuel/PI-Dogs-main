import { types } from "../types";

const initialState = {
    allDogs: []
};

export const rootReducers = ( state = initialState, action ) => {
    switch (action.types) {
        case types.getAllDogs:
            return {
                ...state,
                allDogs: action.payload
            }
            
    
        default:
            return state;
    }
}


import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, ORDER_ALPH, SEARCH_DOGS } from "../types";

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
        case ORDER_ALPH:
            const dogOrder = (payload === 'az')
                                ?
                            state.dogs.sort((a,b) => {
                                if (a.Nombre > b.Nombre) {
                                    return 1;
                                }
                                if (a.Nombre < b.Nombre) {
                                    return -1;
                                }
                                return 0;
                            })
                                :
                            state.dogs.sort((a,b) => {
                                if (a.Nombre > b.Nombre) {
                                    return -1;
                                }
                                if (a.Nombre < b.Nombre) {
                                    return 1;
                                }
                                return 0;
                            });
            return{
                ...state,
                dogs: dogOrder
            }
            
    
        default:
            return state;
    }
}


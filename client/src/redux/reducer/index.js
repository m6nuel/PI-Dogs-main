import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, ORDER_ALPH, SEARCH_DOGS } from "../types";

const initialState = {
    dogs: [],
    temperaments: [],
    auxDogs: []
};

export default function rootReducers  ( state = initialState, { type, payload } ) {
    switch (type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: payload,
                auxDogs: payload
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
                            state.auxDogs.sort((a,b) => {
                                if (a.Nombre > b.Nombre) {
                                    return 1;
                                }
                                if (b.Nombre > a.Nombre) {
                                    return -1;
                                }
                                return 0;
                            })
                                :
                            state.auxDogs.sort((a,b) => {
                                if (a.Nombre > b.Nombre) {
                                    return -1;
                                }
                                if (b.Nombre < a.Nombre) {
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


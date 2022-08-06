import { FILTER_TEMPS, FILTER_WEIGHT, GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, ORDER_ALPH, SEARCH_DOGS } from "../types";

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
        case FILTER_TEMPS:
            const allDogs = state.auxDogs;
            let filterTemps = [];
            if (payload === 'all') {
                filterTemps = allDogs;
            } else {
                for (let i = 0; i < allDogs.length; i++) {
                    let filter = allDogs[i].Temperamento.find( t => t === payload );
                    if (filter) {
                        filterTemps.push(allDogs[i]);
                    }
                    
                }
            }
            console.log(filterTemps)
            return {
                ...state,
                dogs: filterTemps
            }
        case FILTER_WEIGHT:
            console.log(state.auxDogs)
            const filterWeight = ( payload === 'min' )
                    ?
                state.auxDogs.sort((a, b) => {
                    if (parseInt(a.Peso[1]) > parseInt(b.Peso[1])) {
                        
                        return 1;
                    }
                    if (parseInt(b.Peso[1]) > parseInt(a.Peso[1])) {
                        return -1;
                    }
                    return 0
                })
                    :
                state.auxDogs.sort((a,b) => {
                    if (parseInt(a.Peso[1]) > parseInt(b.Peso[1])) {
                        return -1;
                    }
                    if (parseInt(b.Peso[1]) > parseInt(a.Peso[1])) {
                        return 1;
                    }
                    return 0
                })
                return {
                    ...state,
                    dogs: filterWeight
                }
    
        default:
            return state;
    }
}


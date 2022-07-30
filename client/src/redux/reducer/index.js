const initialState = {
    dogs: []
};

export const reducers = ( state = initialState, actions ) => {
    switch (actions.types) {
        case 'getAllDogs':
            return {
                ...state
            }
            
    
        default:
            return state;
    }
}


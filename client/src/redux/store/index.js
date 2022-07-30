import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {reducers} from "../reducer";

const rootReducers = combineReducers({
    getDogs: reducers
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    rootReducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )

);
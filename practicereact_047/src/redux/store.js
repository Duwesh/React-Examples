import {createStore , combineReducers} from "redux"

import {Counterreducer} from "./Counter-redux/reducer"

import {Todoreducer} from "./Todos-redux/reducer"

const oneReducer = combineReducers({ 
    counter : Counterreducer,
    todos : Todoreducer
})

export const store = createStore(oneReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


console.log("Entire data:" , store.getState())
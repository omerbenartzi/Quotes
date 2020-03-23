import React, {createContext, useReducer, useContext} from 'react';
import {initialState, rootReducer} from './reducers';


const store = createContext(initialState);

export const useStore = () => useContext(store);

const Provider = ({children}) => {

    const [state, dispatch] = useReducer(rootReducer, initialState);

    return (
        <store.Provider value={{state, dispatch}}>
            {children}
        </store.Provider>
    )
}

export default Provider;
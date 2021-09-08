//creating datalayer
//context API hooks
import {createContext, useContext, useReducer} from 'react';

//prepare datalayer
export const StateContext = createContext();

//higher order component to wrap the data layer
export const StateProvider = ({reducer, initialState, children}) =>  (
<StateContext.Provider value={useReducer(reducer,initialState)}>
{children} 
</StateContext.Provider>
);

// to pull data from data layer
export const useStateValue = () => useContext(StateContext);
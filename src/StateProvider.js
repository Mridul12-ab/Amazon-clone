import React, { createContext, useContext, useReducer } from "react";

//Prepare the dataLayer
export const StateContext = createContext();

//Wrap out App and provide the dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from the data Layer
export const useStateValue = () => useContext(StateContext);
"use client"
import React, { createContext, useContext, useReducer } from 'react';

interface State {
    theme: string,
}
type ActionType = 
    | { type: "SET_THEME", value: string }
    | { type: "SET_CART" }

const initialState = {
    theme : 'light'
}

const uiReducer = (state : State, action: ActionType) => {
    switch(action.type){
        case "SET_THEME":
            return {
            ...state,
            theme: action.value
        }
        default:
            return {
                ...state
        }
    }
}


const UIContext = createContext<State | any>(initialState);
UIContext.displayName = "UIContext";

export const UIProvider : React.FC<{children: React.ReactNode}> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, initialState);

    const setTheme = (value:string) => dispatch({ type: "SET_THEME", value:value });

    const value = React.useMemo( () => ({
        ...state,
        setTheme
    }),[state]);

    return <UIContext.Provider value={value}> {children} </UIContext.Provider>;
}



export const useUI = () => {
    const state = useContext(UIContext);
    return state;
}
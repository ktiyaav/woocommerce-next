"use client"
import React, { createContext, useContext, useReducer } from 'react';


interface State {
    theme: string;
    cart: {
        product_id: number;
        variation_id: number | null;
        quantity: number;
    }[];
}
type ActionType = 
    | { type: "SET_THEME", value: string }
    | { type: "SET_CART" }
    | { type: "ADD_TO_CART", value: any }
    | { type: "CLEAR_CART" }

const initialState = {
    theme : 'light',
    cart: [
        {
            "product_id": 12560,
            "variation_id": 1,
            "quantity": 5
        },
        {
            "product_id": 12076,
            "variation_id": 1,
            "quantity": 3
        },
        {
            "product_id": 12078,
            "variation_id": 1,
            "quantity": 1
        }
    ]
}

const uiReducer = (state : State, action: ActionType) => {
    switch(action.type){
        case "SET_THEME":
            return {
            ...state,
            theme: action.value
            }
        case "ADD_TO_CART":
            if (action.value.product_id !== null) {
                const existingItemIndex = state.cart?.findIndex((item: any) => item.product_id === action.value.product_id);
                if (existingItemIndex !== -1) {
                    const updatedCart = [...state.cart];
                    console.log(updatedCart[existingItemIndex].quantity)
                    updatedCart[existingItemIndex].quantity = Number(updatedCart[existingItemIndex].quantity) + 1;
                    return {
                        ...state,
                        cart: updatedCart
                    };
                } else {
                    return {
                        ...state,
                        cart: [...state.cart, action.value]
                    };
                }
            }
            return state;
        case "CLEAR_CART":
            return {
            ...state,
            cart: []
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
    const addToCart = (value: { product_id: number; variation_id: number | null; quantity: number }) => dispatch({ type: "ADD_TO_CART", value:value });
    const clearCart = () => dispatch({ type: "CLEAR_CART" });

    const value = React.useMemo( () => ({
        ...state,
        setTheme,
        addToCart,
        clearCart
    }),[state]);

    return <UIContext.Provider value={value}> {children} </UIContext.Provider>;
}



export const useUI = () => {
    const state = useContext(UIContext);
    return state;
}
// app/context/cartContext.tsx
"use client"
import React, { createContext, useReducer } from "react"

// Define the initial cart state
const initialState = {
    items: [],
    total: 0
}

// Define the cart reducer function
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            // Check if the item already exists in the cart
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            )
            if (existingItem) {
                // Increment the quantity of the existing item
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    total: state.total + action.payload.price
                }
            } else {
                // Add the new item to the cart
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: 1 }],
                    total: state.total + action.payload.price
                }
            }
        case "REMOVE_ITEM":
            // Find the item to be removed
            const itemToRemove = state.items.find(item => item.id === action.payload)
            if (itemToRemove) {
                // Subtract the item's price from the total
                return {
                    ...state,
                    items: state.items.filter(item => item.id !== action.payload),
                    total: state.total - itemToRemove.price * itemToRemove.quantity
                }
            } else {
                // Return the original state if the item is not found
                return state
            }
        case "CLEAR_CART":
            // Reset the cart state to the initial state
            return initialState
        default:
            // Return the original state if the action is not recognized
            return state
    }
}

// Create the cart context with the initial state and a dummy dispatch function
const CartContext = createContext({
    state: initialState,
    dispatch: () => null
})

// Create a custom provider component that wraps the children with the cart context provider
const CartProvider = ({ children }) => {
    // Use the useReducer hook to get the current state and dispatch function
    const [state, dispatch] = useReducer(cartReducer, initialState)

    // Return the provider component with the value prop set to the state and dispatch
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

// Export the cart context and provider component
export { CartContext, CartProvider }

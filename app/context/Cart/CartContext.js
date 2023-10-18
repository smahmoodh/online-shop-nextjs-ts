// app/context/cartContext.tsx
"use client"
import React, { useEffect, createContext, useReducer, useState } from "react"

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
            const { product, quantity = 1 } = action.payload;
            const existingItemIndex = state.items.findIndex(
                item => item._id === product._id
            );
            var itemPrice = (product.hasDiscount ? product.discountPrice : product.price);
            if (existingItemIndex !== -1) {
                // Increment the quantity of the existing item
                const updatedItems = state.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                    
                    // index === existingItemIndex
                    //     ? { ...item, quantity: item.quantity + 1 }
                    //     : item
                );

                return {
                    ...state,
                    items: updatedItems,
                    total: state.total + (itemPrice * quantity)
                };
            } else {
                // Add the new item to the cart
                return {
                    ...state,
                    items: [...state.items, { ...product, quantity }],
                    total: state.total + (itemPrice * quantity)
                };
            }
        case "REMOVE_ITEM":
            // Find the item to be removed
            const itemToRemove = state.items.find(item => item._id === action.payload._id);
            var itemPrice = (itemToRemove.hasDiscount ? itemToRemove.discountPrice : itemToRemove.price);
            if (itemToRemove) {
                // Subtract the item's price from the total
                return {
                    ...state,
                    items: state.items.filter(item => item._id !== action.payload._id),
                    total: state.total - itemPrice * itemToRemove.quantity
                }
            } else {
                // Return the original state if the item is not found
                return state
            }
        // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
        case "INCREASE":
            state.items[
                state.items.findIndex((item) => item.id === action.payload.id)
            ].quantity++;
            var item = state.items[
                state.items.findIndex((item) => item.id === action.payload.id)
            ];
            var itemPrice = (item.hasDiscount ? item.discountPrice : item.price);
            return {
                ...state,
                total: state.total + itemPrice,
                items: [...state.items],
            };
        // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
        case "DECREASE":
            const item = state.items.find(item => item._id === action.payload._id);
            var itemPrice = item.hasDiscount ? item.discountPrice : item.price;
            if (item.quantity > 1) {
                item.quantity--;
                return {
                    ...state,
                    total: state.total - itemPrice,
                    items: [...state.items]
                };
            } else {
                return {
                    ...state,
                    items: state.items.filter(item => item._id !== action.payload._id),
                    total: state.total - itemPrice
                };
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
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [context, setContext] = useState({ state, dispatch });

    // اگر state یا dispatch تغییر کنند، مقدار context را به روز کنید
    useEffect(() => {
        setContext({ state, dispatch });
    }, [state, dispatch]);

    const addToCart = (item) => {
        dispatch({ type: "ADD_ITEM", payload: item });
    };

    const removeFromCart = (item) => {
        dispatch({ type: "REMOVE_ITEM", payload: item });
    };

    const increaseCartItem = (item) => {
        dispatch({ type: "INCREASE", payload: item });
    }

    const decreaseCartItem = (item) => {
        dispatch({ type: "DECREASE", payload: item });
    }

    // Return the provider component with the value prop set to the state and dispatch
    return (
        <CartContext.Provider value={{ removeFromCart, addToCart, increaseCartItem, decreaseCartItem, ...context }}>
            {children}
        </CartContext.Provider>
    )
}

// Export the cart context and provider component
export { CartContext, CartProvider }

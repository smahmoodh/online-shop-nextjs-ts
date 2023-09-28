import React, { createContext, useReducer } from 'react';
import cartReducer from '@/app/context/Cart/CartReducer';

const initialState = {
    cart: [], // یک آرایه برای ذخیره آیتم‌ها در سبد خرید
};

const CartContext = createContext(initialState);

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // اضافه کردن توابع دیگر برای مدیریت سبد خرید
    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const removeFromCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    // دیگر توابع...

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addToCart,
                removeFromCart,
                // سایر توابع...
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };

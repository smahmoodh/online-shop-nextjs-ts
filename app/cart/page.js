"use client"
import React, { useContext } from 'react';
// import CartContext from "@/app/context/Cart/CartContext";
import { CartContext } from "@/app/context/Cart/CartContext";
// import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'


const ShoppingCart = () => {
    const { state } = useContext(CartContext)
    console.log('state');
    console.log(state);
  return (
      <>
          <Breadcrumbs id={''} type={"cart"} />
          <div className='grid grid-cols-12'>
              <div className='md:col-span-9 px-[15px]'>
                  <div className='cart__box'>
                      <div className='cart__box--header'>
                          
                      </div>
                      <div className='cart__box--body'></div>
                  </div>
              </div>
              <div className='md:col-span-3 px-[15px]'></div>
              <h2>سبد خرید</h2>
              {state.items.length > 0 ? (
                  <>
                      <ul>
                          {state.items.map(item => (
                              <li key={item.id}>
                                  {item.name} x {item.quantity} = ${item.price * item.quantity}
                              </li>
                          ))}
                      </ul>
                      <p>Total: ${state.total}</p>
                  </>
              ) : (
                  <p>Your cart is empty</p>
              )}
          </div>
      </>
  )
}

export default ShoppingCart
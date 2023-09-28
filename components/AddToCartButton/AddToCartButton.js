'use client'
import { useContext } from "react";
// import CartContext from "@/app/context/Cart/CartContext";
import { CartContext } from "@/app/context/Cart/CartContext";
import Link from "next/link";


const AddToCartButton = ({product}) => {
    // Get the dispatch function from the cart context
    const { dispatch, state, addToCart } = useContext(CartContext)

    // Define a handler function to add the product to the cart
    const handleAddToCart = () => {
        console.log(product);
        // Dispatch an action with the product details as the payload
        addToCart(product)
        // dispatch({ type: "ADD_ITEM", payload: { product } })
    }
  return (
      <>
          <button className="w-full btn btn-primary btn-lg btn-block" onClick={handleAddToCart}>
              افزودن به سبد خرید
          </button>
          <Link href='/cart'>Cart</Link>
      </>
  )
}

export default AddToCartButton
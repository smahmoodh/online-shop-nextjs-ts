'use client'
import { useContext, useState } from "react";
import { CartContext } from "@/app/context/Cart/CartContext";
import Toast from "../Toast/Toast";


const AddToCartButton = ({product}) => {
    // Get the dispatch function from the cart context
    const { dispatch, state, addToCart } = useContext(CartContext);
    const [showAlert, setShowAlert] = useState(false);

    // Define a handler function to add the product to the cart
    const handleAddToCart = async() => {
        console.log(product);
        // Dispatch an action with the product details as the payload
        // addToCart(product)
        // dispatch({ type: "ADD_ITEM", payload: { product } })

        try {
            await addToCart(product); // اجرای تابع در context
            const toast = new Toast({
                text: "کالا به سبد خرید اضافه شد.",
                position: "top-center",
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                type: 'success',
                hasIcon: true,
            })
        } catch (error) {
            console.error(error);
        }
    }
  return (
      <>
          <button className="w-full btn btn-primary btn-lg btn-block" onClick={handleAddToCart}>
              افزودن به سبد خرید
          </button>
      </>
  )
}

export default AddToCartButton
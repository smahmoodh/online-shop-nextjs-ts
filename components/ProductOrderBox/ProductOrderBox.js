'use client'

import { useState } from 'react'
import { calcDiscount, seperatNumber } from '@/utils/Utilities'
import AddToCartButton from '../AddToCartButton/AddToCartButton'
import ChangeQuantity from '../ChangeQualtity/ChangeQuantity'
import ProductBigBadge from '../ProductBigBadge/ProductBigBadge'

const ProductOrderBox = ({ product, propertiesToFill, productProperties }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

  return (
      <div className="product-order md:col-span-12 lg:col-span-6">
          <div className="p-4 md:p-0 md:rounded-lg md:border md:shadow-[0_3px_20px_0_rgba(94,100,114,0.08)] ">
              <div className="hidden invisible md:block md:visible md:leading-10 md:h-10">
                  {product.hasDiscount ? (
                      <ProductBigBadge />
                  ) : (
                      ""
                  )}
              </div>
              <div className="product-basket-top min-h-auto md:px-8 md:pb-8 md:mt-6 ">
                  <div className={`${propertiesToFill.length}`}>
                      {propertiesToFill.length > 0 &&
                          propertiesToFill.map((p) => (
                              <div
                                  key={p.name}
                                  className="flex items-center p-0 mb-4"
                              >
                                  <label className="w-[72px] m-0 text-sm flex-shrink-0 leading-7 font-normal">
                                      {p.name}
                                  </label>
                                  <select
                                      value={productProperties[p.name] || p.values[0]}
                                      className="h-[38px] py-[6px] px-3 block w-full leading-normal text-sm font-normal bg-white border  border-[#ced4da] rounded transition-[border-color_.15s_ease-in-out,box-shadow_.15s_ease-in-out"
                                  >
                                      {p.values.map((val, index) => (
                                          <option key={index} value={val}>
                                              {val}
                                          </option>
                                      ))}
                                  </select>
                              </div>
                          ))}
                  </div>
                  <div className="flex items-center mb-4">
                      <label
                          className="quantity-label w-[72px] m-0 text-sm flex-shrink-0"
                          htmlFor="quantity"
                      >
                          تعداد: 
                      </label>
                      <ChangeQuantity decreaseQuantity={handleQuantityChange} increaseQuantity={handleQuantityChange} />
                  </div>
              </div>
              <div className="price-area max-w-full flex flex-col mb-2">
                  <div className="mb-3 flex gap-x-1.5 leading-6 items-center justify-end font-dana-fanum md:justify-center">
                      {product.hasDiscount ? (
                          <>
                              <span className=" py-0 px-1 h-[20px] block text-primary bg-blue-100 text-[13px] font-bold rounded dir-ltr">
                                  {calcDiscount(
                                      product.price,
                                      product.discountPrice,
                                      1,
                                  )}{" "}
                                  %
                              </span>
                              <span className="pt-0.5 text-sm font-normal text-gray-400 line-through">
                                  {seperatNumber(product.price)}
                              </span>
                          </>
                      ) : (
                          ""
                      )}
                  </div>
                  <div className="flex gap-x-1 items-center justify-end font-dana-fanum md:justify-center ">
                      <span className="text-[20px] font-bold">
                          {product.hasDiscount
                              ? seperatNumber(product.discountPrice)
                              : seperatNumber(product.price)}
                      </span>
                      <span className="text-sm">تومان</span>
                  </div>
              </div>
              <div className="fixed left-0 right-0 bottom-0 p-4 bg-white backdrop-blur-lg shadow-[0_-1px_0_0_#e6e6e6] transition-all duration-300 ease-out delay-150 z-[900]
                            md:relative md:block md:left-auto md:right-auto md:bottom-auto md:bg-transparent md:border-none md:shadow-none md:backdrop-blur-none md:z-auto
                          ">
                  <AddToCartButton product={product} quantity={quantity} />
              </div>
          </div>
      </div>
  )
}

export default ProductOrderBox
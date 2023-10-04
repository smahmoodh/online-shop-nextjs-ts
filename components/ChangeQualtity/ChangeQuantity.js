'use client'
import React, { useState } from "react";

const ChangeQuantity = () => {
    const [productQuantity, setProductQuantity] = useState(1);

    const quantity = (type) => {
        if (type === 'add') {
            setProductQuantity(productQuantity + 1);
        } else if (type === 'min' && productQuantity > 1) {
            setProductQuantity(productQuantity - 1);
        }
    };

    return (
        <>
            <div className="input-group h-8 !w-[100px] leading-8 rounded-2xl border  border-gray-300 flex-row-reverse overflow-hidden items-center">
                <span className="h-full py-1 px-2 overflow-hidden leading-none bg-white">
                    <button type="button" aria-label="spin-down" className="" onClick={() => quantity('min')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        </svg>
                    </button>
                </span>
                <input type="text" className="h-8 border-none p-0 leading-8 text-center form-control" value={productQuantity} readOnly />
                <span className="h-full py-1 px-2 overflow-hidden leading-none bg-white">
                    <button type="button" aria-label="spin-down" className="" onClick={() => quantity('add')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </button>
                </span>
            </div>
        </>
    )
}

export default ChangeQuantity;

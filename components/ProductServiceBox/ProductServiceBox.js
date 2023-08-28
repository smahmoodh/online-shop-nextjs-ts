import Image from "next/image";

import guarantyImg from "@/public/assets/img/guaranty.svg";
import cartReturnImg from "@/public/assets/img/cart-return.svg";
import deliveryFastImg from "@/public/assets/img/delivery-fast.svg";
import paymentImg from "@/public/assets/img/payment.svg";

import './ProductServiceBox.css'

const ProductServiceBox = () => {
    return (
        <div className="product-services__container flex flex-wrap py-4 px-[10px]">
            <div className="product-services__item">
                <Image
                    src={cartReturnImg}
                    alt={"cart Return Img"}
                    width={24}
                    height={24}
                />
                <span>ضمانت بازگشت</span>
            </div>
            <div className="product-services__item">
                <Image
                    src={guarantyImg}
                    alt={"guaranty Img"}
                    width={24}
                    height={24}
                />
                <span>ضمانت اصالت</span>
            </div>
            <div className="product-services__item">
                <Image
                    src={deliveryFastImg}
                    alt={"delivery Fast Img"}
                    width={24}
                    height={24}
                />
                <span>تحویل اکسپرس</span>
            </div>
            <div className="product-services__item">
                <Image
                    src={paymentImg}
                    alt={"payment Img"}
                    width={24}
                    height={24}
                />
                <span>پرداخت در محل</span>
            </div>
        </div>
    )
}

export default ProductServiceBox
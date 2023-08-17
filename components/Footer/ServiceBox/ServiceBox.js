import Image from "next/image";
import guarantyImg from "@/public/assets/img/guaranty.svg";
import cartReturnImg from "@/public/assets/img/cart-return.svg";
import deliveryFastImg from "@/public/assets/img/delivery-fast.svg";
import paymentImg from "@/public/assets/img/payment.svg";

import "./ServiceBox.css";

const ServiceBox = () => {
  return (
    <div className={"rounded-sm border-[1px] border-[#e6e6e6] bg-[#fafafa]"}>
      <ul
        className="flex items-center justify-between text-center
                    [&>li]:py-[25px] [&>li]:px-[10px] [&>li]:border-l-[1px] [&>li]:border-[#e6e6e6] [&>li]:text-center [&>li]:block [&>li]:w-full
                    [&>li>span]:block [&>li>span]:text-center
                    [&>li>span>img]:max-w-full [&>li>span>img]:mx-auto [&>li>span>img]:mb-3
                    "
      >
        <li>
          <span>
            <Image
              src={guarantyImg}
              alt={"guarantyImg"}
              width={48}
              height={48}
            />
            <span className="title">ضمانت اصل بودن کالا</span>
            <span className="subtitle">تضمین اصالت و گارانتی</span>
          </span>
        </li>
        <li>
          <span>
            <Image
              src={cartReturnImg}
              alt={"cartReturnImg"}
              width={48}
              height={48}
            />
            <span className="title">ضمانت بازگشت</span>
            <span className="subtitle">بازگرداندن کالا در ۷ روز</span>
          </span>
        </li>
        <li>
          <span>
            <Image
              src={deliveryFastImg}
              alt={"deliveryFastImg"}
              width={48}
              height={48}
            />
            <span className="title">تحویل اکسپرس</span>
            <span className="subtitle">ساعته در اصفهان</span>
          </span>
        </li>
        <li>
          <span>
            <Image src={paymentImg} alt={"paymentImg"} width={48} height={48} />
            <span className="title">پرداخت در محل</span>
            <span className="subtitle">فقط در اصفهان</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ServiceBox;

import Link from "next/link";
import Image from "next/image";
import { calcDiscount, seperatNumber } from "@/utils/Utilities";

import "./Product.css";

const ProductItem = ({ product }) => {
  return (
    <div id="product-item-185804" className="price_on product-item-cont">
      <div className="product-item relative bg-white mr-0 p-3 rounded border  border-transparent transition-all duration-[.2s] ease-in-out md:p-6 md:mr-4 hover:border-gray-200 md:hover:shadow-[0_4px_8px_0_rgba(0,0,0,.08)]">
        <div className="item__thumb relative bg-white text-center -mx-2 mb-4 pt-6 md:-mx-3 md:mb-6">
          <ul
            className="
              thumb__badges absolute top-0 -right-1 left-auto md:-right-3 z-10
              [&>li]:relative [&>li]:bg-primary [&>li]:w-10 [&>li]:h-[18px] [&>li]:mb-1 [&>li]:leading-[18px] [&>li]:text-xs [&>li]:font-light [&>li]:text-white
              "
          >
            {product.hasDiscount ?
              <li className="badge__off"></li> : ''}
          </ul>
          <Link
            href={`/product/${product._id}`}
            className="thumb__link h-[166px] relative flex items-center justify-center m-0 md:h-[264px] "
            title={product.title}
          >
            <Image
              width={300}
              height={225}
              className="link__image block w-auto h-auto max-w-full max-h-full rounded"
              src={product.images?.[0]}
              data-src={product.images?.[0]}
              data-srcset={`${product.images?.[0]} 1x`}
              alt={product.title}
              srcSet={`${product.images?.[0]} 1x`}
            />
          </Link>
        </div>
        <div className="item__details">
          <Link
            className="details__title block mb-4"
            title={product.title}
            href={`/product/${product._id}`}
          >
            <span className="title__span h-[69px] overflow-hidden text-right text-xs font-normal leading-6 ">
              {product.title}
            </span>
          </Link>
          <div className="details__bottom flex flex-wrap items-end">
            <div className="bottom__price-area max-w-full min-h-[54px] flex flex-col-reverse basis-auto grow  ">
              <div className="price-area__price flex items-center font-dana-fanum leading-6 gap-x-1">
                <span className="price__amount text-lg font-semibold">
                  {product.hasDiscount
                    ? seperatNumber(product.discountPrice)
                    : seperatNumber(product.price)}
                </span>
                <span className="price__currency text-xs font-light">
                  تومان
                </span>
              </div>
              <div
                className={`price-area__old-price items-center mb-2 leading-6 font-dana-fanum gap-x-[6px] ${product.hasDiscount ? "flex" : "hidden"
                  }`}
              >
                <span className="old-price__off-percent block h-5 px-1 text-primary text-xs font-medium rounded bg-blue-50">
                  {calcDiscount(product.price, product.discountPrice, 1)}%
                </span>
                <span className="old-price__amount text-sm font-normal text-gray-300 line-through">
                  {seperatNumber(product.price)}
                </span>
              </div>
            </div>
            <div className="bottom__rate flex grow-0 flex-shrink-0 basis-auto w-auto max-w-full items-center flex-row-reverse font-dana-fanum [&>span]:block [&>span]:text-xs [&>span]:mr-0.5 [&>span]:mt-[3px] [&>span]:font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                fill="currentColor"
                className="w-4 h-4 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
              <span className="rate__star ">5</span>
              <span className="rate__reviewcount text-gray-300 text-[11px] font-light">
                (386)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
// ---------- V1 ---------------
{
  /*     ---------------- V1 -------------------
<div
      className="
        relative bg-white m-0 p-4 text-right rounded-md border-0 transition-all duration-[0.3s] shadow-[0_1px_2px_0_rgba(0,0,0,.15)]
        md:p-6 md:!pt-[30px] md:mr-4 md:border-[1px] md:border-transparent md:shadow-none
        hover:md:border-gray-300 hover:md:shadow-[0_4px_8px_0_rgba(0,0,0,0.08)]
        "
    >
      <ul
        className="
                mb-2 [&>li]:text-white
                md:absolute md:top-7 md:left-auto md:right-0 md:w-full md:m-0
            "
      >
        <li
          className="
                        badge-special bg-right py-1 px-[6px] bg-badge bg-no-repeat bg-contain w-[95px]
                        after:leading-3 after:text-right after:text-sm after:content-[var(--special-text)]
                    "
        ></li>
        <li></li>
      </ul>
      <div className="flex items-start justify-start md:flex-col md:justify-between">
        <Link
          className="basis-[70%] w-[50%] md:w-full md:basis-auto md:max-h-[275px] md:min-h-[275px]"
          href={`/product/${product._id}`}
        >
          <Image
            src={product.images?.[0]}
            alt={product.title}
            width={400}
            height={300}
            className="!h-[unset] max-h-[inherit] w-auto"
          />
        </Link>
        <Link
          className="h2 md:basis-auto md:w-full md:h-[67px] md:py-2 md:m-0 md:mt-6 md:text-sm md:text-gray-500 md:leading-5 md:block"
          href={`/product/${product._id}`}
        >
          {product.title}
        </Link>
      </div>

      <div className="flex items-end justify-between h-[55px] mt-[10px] md:flex-row-reverse">
        <div className="pt-[3px] flex items-center gap-1 md:flex-row-reverse">
          <span className="-top-[2px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              fill="currentColor"
              className="w-4 h-4 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </span>

          <span className="text-xs leading-4 text-gray-400">3.4</span>
          <span className="text-xs leading-4 text-gray-400">(386)</span>
        </div>
        <div className="">
          <span className="m-0 mb-1 block">
            <span className="text-right block">
              <span className="w-[35px] h-[20px] ml-[6px] rounded-[4px] bg-blue-500 bg-opacity-[0.1] text-xs font-bold font-dana-fanum leading-4 whitespace-normal text-center text-primary inline-block pt-1">
                {calcDiscount(product.price, product.price * 1.8, 1)}%
              </span>
              <span className="text-sm font-dana-fanum font-normal leading-4 text-right text-gray-400 line-through">
                {seperatNumber(product.price * 1.8)}
              </span>
            </span>
          </span>
          <span>
            <span className="mt-[5px] ml-1 text-[18px] text-right text-gray-500 font-dana-fanum font-bold leading-6">
              {seperatNumber(product.price)}
            </span>
            <span className="m-1 ml-0 text-sm text-right text-gray-500 font-normal leading-4">
              تومان
            </span>
          </span>
        </div>
      </div>
    </div>
*/
}

// ---------- V2 ---------------
{
  /*
<div
      className="
        relative bg-white m-0 p-4 text-right rounded-md border-0 transition-all duration-[0.3s] shadow-[0_1px_2px_0_rgba(0,0,0,.15)]
        md:p-6 md:!pt-[30px] md:mr-4 md:border-[1px] md:border-transparent md:shadow-none
        hover:md:border-gray-300 hover:md:shadow-[0_4px_8px_0_rgba(0,0,0,0.08)]
        "
    >
      <ul className="absolute top-4 left-auto right-0 w-full m-0 [&>li]:text-white">
        <li className="badge-special bg-right py-1 px-[6px] bg-badge bg-no-repeat bg-contain w-[95px] after:leading-3 after:text-right after:text-sm after:content-[var(--special-text)]"></li>
        <li></li>
      </ul>
      <div className="flex flex-col items-center justify-between">
        <Link
          className="basis-auto max-h-[275px] min-h-[275px]"
          href={`/product/${product._id}`}
        >
          <Image
            src={product.images?.[0]}
            alt={product.title}
            width={400}
            height={300}
            className="!h-[unset] max-h-[inherit] w-auto"
          />
        </Link>
        <Link
          className="h2 md:basis-auto md:w-full md:h-[67px] md:py-2 md:m-0 md:mt-6 md:text-sm md:text-gray-500 md:leading-5 md:block"
          href={`/product/${product._id}`}
        >
          {product.title}
        </Link>
      </div>

      <div className="flex items-end justify-between h-[55px] mt-[10px] md:flex-row-reverse">
        <div className="pt-[3px] flex items-center gap-1 md:flex-row-reverse">
          <span className="-top-[2px] relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              fill="currentColor"
              className="w-4 h-4 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </span>

          <span className="text-xs leading-4 text-gray-400">3.4</span>
          <span className="text-xs leading-4 text-gray-400">(386)</span>
        </div>
        <div className="">
          <span className="m-0 mb-1 block">
            <span className="text-right block">
              <span className="w-[35px] h-[20px] ml-[6px] rounded-[4px] bg-blue-500 bg-opacity-[0.1] text-xs font-bold font-dana-fanum leading-4 whitespace-normal text-center text-primary inline-block pt-1">
                {calcDiscount(product.price, product.price * 1.8, 1)}%
              </span>
              <span className="text-sm font-dana-fanum font-normal leading-4 text-right text-gray-400 line-through">
                {seperatNumber(product.price * 1.8)}
              </span>
            </span>
          </span>
          <span>
            <span className="mt-[5px] ml-1 text-[18px] text-right text-gray-500 font-dana-fanum font-bold leading-6">
              {seperatNumber(product.price)}
            </span>
            <span className="m-1 ml-0 text-sm text-right text-gray-500 font-normal leading-4">
              تومان
            </span>
          </span>
        </div>
      </div>
    </div>
*/
}

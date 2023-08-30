import React from "react";
import Link from "next/link";
import { mongooseConnect } from "@/lib/mongodb";

import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import ChangeQuantity from "@/components/ChangeQualtity/ChangeQuantity";
import ProductImageGallery from "@/components/ProductImageGallery/ProductImageGallery";
import ProductServiceBox from "@/components/ProductServiceBox/ProductServiceBox";

import { calcDiscount, seperatNumber } from "@/utils/Utilities";

import "./page.css";
import ProductSwiperList from "@/components/ProductSwiperList/ProductSwiperList";
import ProductInfoBox from "@/components/ProductInfoBox/ProductInfoBox";
import FiveRatingStar from "@/components/FiveRatingStar/FiveRatingStar";
import ProductCommentList from "@/components/ProductCommentList/ProductCommentList";

const Page = async ({ params }) => {
  await mongooseConnect();
  const comments = [
    {
      "name": "علی",
      "date": "سه شنبه 9 خرداد 1402 - 13:14",
      "message": "سلام، میشه بگید موجود میشه یا نه چون این مدل قابلیت بلوتوث و شارژ وایرلس داره و سایر مدل ها ندارند",
      "hasReply": true,
      "reply":
        [{
          "name": "مدیر",
          "date": "سه شنبه 9 خرداد 1402 - 15:14",
          "message": "سلام دوست عزیز\nدر تلاشیم موجود کنیم\nبا استفاده از گزینه موجود شد به من اطلاع بده از موجودی کالا در اسرع وقت اطلاع پیدا کنید.\nمیتونید از محصولات مشابه هم استفاده کنید",
          "hasReply": false
        },
        {
          "name": "مدیر",
          "date": "سه شنبه 9 خرداد 1402 - 15:14",
          "message": "سلام دوست عزیز\nدر تلاشیم موجود کنیم\nبا استفاده از گزینه موجود شد به من اطلاع بده از موجودی کالا در اسرع وقت اطلاع پیدا کنید.\nمیتونید از محصولات مشابه هم استفاده کنید",
          "hasReply": false
        }]
    },
    {
      "name": "علی",
      "date": "سه شنبه 9 خرداد 1402 - 13:14",
      "message": "سلام، میشه بگید موجود میشه یا نه چون این مدل قابلیت بلوتوث و شارژ وایرلس داره و سایر مدل ها ندارند",
      "hasReply": true,
      "reply": [{
        "name": "مدیر",
        "date": "سه شنبه 9 خرداد 1402 - 15:14",
        "message": "سلام دوست عزیز\nدر تلاشیم موجود کنیم\nبا استفاده از گزینه موجود شد به من اطلاع بده از موجودی کالا در اسرع وقت اطلاع پیدا کنید.\nمیتونید از محصولات مشابه هم استفاده کنید",
        "hasReply": false
      }]
    },
    {
      "name": "علی",
      "date": "سه شنبه 9 خرداد 1402 - 13:14",
      "message": "سلام، میشه بگید موجود میشه یا نه چون این مدل قابلیت بلوتوث و شارژ وایرلس داره و سایر مدل ها ندارند",
      "hasReply": true,
      "reply": [{
        "name": "مدیر",
        "date": "سه شنبه 9 خرداد 1402 - 15:14",
        "message": "سلام دوست عزیز\nدر تلاشیم موجود کنیم\nبا استفاده از گزینه موجود شد به من اطلاع بده از موجودی کالا در اسرع وقت اطلاع پیدا کنید.\nمیتونید از محصولات مشابه هم استفاده کنید",
        "hasReply": false
      }]
    }
  ];
  const { id } = params;
  let catInfo;
  let relatedProducts = [];
  const product = await Product.findById(id);
  const catId = product.category;
  product.category = await Category.findById(catId);
  const productProperties = product.properties;
  const propertiesToFill = [];
  const categories = await Category.find();

  function collectProperties(category) {
    const collectedProperties = [];

    if (category.properties) {
      // اگر دسته بندی فعلی properties داشته باشد، آن‌ها را به آرایه اضافه می‌کنیم
      collectedProperties.push(...category.properties);
    }

    if (category.parent) {
      // اگر دسته بندی فعلی parent داشته باشد، دسته بندی parent را پیدا می‌کنیم و properties آن را جمع‌آوری می‌کنیم
      const parentCategory = categories.find((cat) =>
        cat._id.equals(category.parent),
      );

      if (parentCategory) {
        collectedProperties.push(...collectProperties(parentCategory));
      }
    }

    return collectedProperties;
  }
  // console.log(categories);
  if (categories.length > 0 && product.category) {
    catInfo = categories.find(
      (category) => category._id.toString() === catId.toString(),
    );

    relatedProducts = await Product.find({ category: catId });
    const productIdToRemove = product._id.toString();
    relatedProducts = JSON.parse(
      JSON.stringify(
        relatedProducts.filter(
          (product) => product._id.toString() !== productIdToRemove,
        ),
      ),
    );

    propertiesToFill.push(...collectProperties(product.category));
  }

  const propertyHandler = (e) => { };

  return (
    <>
      <div>
        <Breadcrumbs id={params.id} type={"product"} />
        <main>
          <div
            className="relative mb-8 md:bg-white md:rounded md:shadow-[0_1px_2px_0_rgba(0,0,0,.15)]
              [&>div]:bg-white [&>div]:mb-4 [&>div]:rounded [&>div]:shadow-[0_1px_2px_0_rgba(0,0,0,.15)]
            "
          >
            <div className="">
              <div className="overflow-hidden leading-10 mb-5">
                {product.hasDiscount ? (
                  <span className="float-right py-0 px-3 text-center text-sm font-light leading-8 rounded-[0_4px_0_4px] bg-primary text-white">
                    تخفیف خورده
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="py-0 px-4">
                <h1 className="mb-2 leading-6 text-sm font-bold">
                  {product.title}
                </h1>
                <h2 className="mb-4 text-gray-400 text-xs leading-4 font-normal">
                  {product.title}
                </h2>
              </div>
              <div className="py-0 px-4 mb-4">
                <ProductImageGallery images={product.images} />
              </div>
              <div className="pb-4">
                <ul className="flex items-center leading-4 overflow-x-auto [&>li]:text-[11px] [&>li]:text-gray-400 [&>li]:py-0 [&>li]:px-[10px] [&>li]:whitespace-nowrap ">
                  <li className="!pr-4">
                    <span>کدکالا:</span>
                    <span className="mr-1">185927</span>
                  </li>
                  <li className="border-r border-gray-300">
                    <span>دسته بندی:</span>
                    <span className="mr-1 text-primary">
                      {product.category.name}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-y-0 gap-x-[10px] py-3 px-4">
              <div className="max-w-full flex items-center gap-x-4 flex-grow basis-0 text-gray-300 ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex flex-grow-0 flex-shrink-0 basis-auto w-auto max-w-full items-center flex-row-reverse font-dana-fanum">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs block mr-0.5 mt-[3px] font-normal">
                  5
                </span>
                <span className="text-xs block mr-0.5 mt-[3px] font-light text-gray-400">
                  (2)
                </span>
              </div>
            </div>
            <div className="product-order">
              <div className="p-4">
                <div className="product-basket-top min-h-auto ">
                  <div>
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
                    <ChangeQuantity />
                  </div>
                </div>
                <div className="price-area max-w-full flex flex-col mb-2">
                  <div className="mb-3 flex gap-x-1.5 leading-6 items-center justify-end font-dana-fanum">
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
                  <div className="flex gap-x-1 items-center justify-end font-dana-fanum ">
                    <span className="text-[20px] font-bold">
                      {product.hasDiscount
                        ? seperatNumber(product.discountPrice)
                        : seperatNumber(product.price)}
                    </span>
                    <span className="text-sm">تومان</span>
                  </div>
                </div>
                <div className="fixed left-0 right-0 bottom-0 p-4 bg-white backdrop-blur-lg shadow-[0_-1px_0_0_#e6e6e6] transition-all duration-300 ease-out delay-150 z-[900]">
                  <Link href="#" className="btn btn-primary btn-lg btn-block">
                    افزودن به سبد خرید
                  </Link>
                </div>
              </div>
            </div>

            <div className="product-services">
              <ProductServiceBox />
            </div>

          </div>
          <div>
            <ProductSwiperList
              products={relatedProducts}
              title={"محصولات مرتبط"}
              url={"#"}
              showMoreLink={false}
            />
          </div>
          <div className="product-bottom">
            <ProductInfoBox className={'features'} title={'ویژگی های محصول'}>
              <ul>
                {productProperties && Object.entries(productProperties).map(([key, value], index) => (
                  <li key={index}>
                    <span>{key}:&nbsp;</span><span>{value}</span>
                  </li>
                )

                )}
              </ul>
            </ProductInfoBox>
            <ProductInfoBox className={'desc'} title={'توضیحات محصول'}>
              <p className="text-justify text-sm">{product?.description}</p>
            </ProductInfoBox>
            <ProductInfoBox className={'attributes'} title={'مشخصات فنی'}>
              <ul className="">
                {productProperties && Object.entries(productProperties).map(([key, value], index) => (
                  <li key={index}>
                    <span className="mr-0.5 text-gray-400">{key}:&nbsp;</span><span>{value}</span>
                  </li>
                ))}
              </ul>
            </ProductInfoBox>
            <ProductInfoBox className={'comments'} title={'نظرات کاربران'}>
              <div className="rate flex flex-row-reverse gap-x-4 justify-between pb-3 border-b text-left" title="امتیاز 4.5 از 5 توسط 2 کاربر">
                <div className="rating-container h-[18px] overflow-hidden leading-[18px]">
                  <FiveRatingStar score={4.5} />
                </div>
                <span className="text-sm">امتیاز 4.5 از 5 توسط 2 کاربر</span>
              </div>
              <div className="product-comments mb-5 font-dana-fanum">
                <ProductCommentList comments={comments} />
              </div>
            </ProductInfoBox>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;

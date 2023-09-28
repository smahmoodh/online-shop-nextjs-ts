
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
import HeartIcon from "@/components/Icons/Heart";
import ShareIcon from "@/components/Icons/Share";
import ProductBigBadge from "@/components/ProductBigBadge/ProductBigBadge";
import ProductInfoTabs from "@/components/ProductInfoTabs/ProductInfoTabs";
import AddToCartButton from "@/components/AddToCartButton/AddToCartButton";



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
        <main className="md:block md:flex-grow-0 md:flex-shrink-0 md:basis-full md:max-w-full md:relative md:w-full md:px-4">
          <div className="">
            {/* Product top */}
            <div
              className="product-top relative mb-8
              md:bg-white md:rounded md:shadow-[0_1px_2px_0_rgba(0,0,0,.15)]
              "
            >
              <div className="md:grid md:grid-cols-12 ">
                <div
                  className=" product-gallery
                  bg-white mb-4 relative rounded shadow-[0_1px_2px_0_rgba(0,0,0,.15)]
                  md:col-span-5 md:w-auto md:max-w-full
                  md:bg-none md:rounded-none md:shadow-none md:m-0
                  ">
                  <div className="md:relative md:w-full md:border-l md:min-h-full">
                    <div className="overflow-hidden leading-10 mb-5 md:hidden md:invisible">
                      {product.hasDiscount ? (
                        <ProductBigBadge />
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="py-0 px-4 md:hidden md:invisible">
                      <h1 className="mb-2 leading-6 text-sm font-bold">
                        {product.title}
                      </h1>
                      <h2 className="mb-4 text-gray-400 text-xs leading-4 font-normal">
                        {product.title}
                      </h2>
                    </div>
                    <div className="py-0 px-4 mb-4 md:pt-[75px] md:pb-11 md:px-8">
                      <ProductImageGallery images={product.images} />
                      <div className="hidden invisible md:block md:visible md:absolute md:top-8 md:right-8 md:z-10 
                      [&>span]:md:mb-6 [&>span]:md:text-gray-400 [&>span]:md:block [&>span]:md:cursor-pointer">
                        <span>
                          <ShareIcon />
                        </span>
                        <span>
                          <HeartIcon />
                        </span>
                      </div>
                    </div>
                    <div className="pb-4 md:hidden md:invisible">
                      <ul className="flex items-center leading-4 overflow-x-auto [&>li]:text-[11px] [&>li]:text-gray-400 [&>li]:py-0 [&>li]:px-[10px] [&>li]:whitespace-nowrap ">
                        <li className="!pr-4">
                          <span>کدکالا:</span>
                          <span className="mr-1">185927</span>
                        </li>
                        <li className="border-r border-gray-300">
                          <span>دسته بندی:</span>
                          <span className="mr-1 text-primary">
                            <Link href={`/category/${product.category.path}`}>
                              {product.category.name}
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>





                <div className="md:col-span-7 md:w-auto md:max-w-full md:px-4 md:pb-[120px] md:relative">
                  <div className="
                  md:pr-[2px] md:pt-10
                  [&>div]:bg-white [&>div]:mb-4 [&>div]:rounded [&>div]:shadow-[0_1px_2px_0_rgba(0,0,0,.15)]
                  [&>div]:md:bg-none [&>div]:md:mb-4 [&>div]:md:rounded-none [&>div]:md:shadow-none
                  ">
                    <div className="flex flex-wrap items-center gap-y-0 gap-x-[10px] py-3 px-4 md:hidden md:invisible">
                      <div className="max-w-full flex items-center gap-x-4 flex-grow basis-0 text-gray-300 ">
                        <span>
                          <ShareIcon strokeWidth={2} />
                        </span>
                        <span>
                          <HeartIcon strokeWidth={2} />
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
                    <div className="md:grid md:grid-cols-12 md:gap-x-2">
                      <div className="product-desc hidden invisible md:block md:visible md:col-span-12 lg:col-span-6 md:mb-8">
                        <h1 className="text-xl font-semibold min-h-[40px] mb-2">{product.title}</h1>
                        <ul className="mb-6 flex flex-wrap [&>li]:flex [&>li]:items-center [&>li]:h-4 [&>li]:px-3 [&>li]:text-xs [&>li]:leading-4 [&>li]:font-light [&>li]:border-l [&>li]:border-gray-300">
                          <li className="font-dana-fanum !pr-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 text-yellow-400 ml-1 float-right"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-xs mr-0.5 mt-[3px] font-normal">
                              5
                            </span>
                            <span className="text-xs mr-0.5 mt-[3px] font-light text-gray-400">
                              (<span className="text-primary">2 دیدگاه</span>)
                            </span>
                          </li>
                          <li className="">
                            <span>کدکالا:</span>
                            <span className="mr-1">185927</span>
                          </li>
                          <li className="border-none">
                            <span>دسته بندی:</span>
                            <span className="mr-1 text-primary">
                              <Link href={`/category/${product.category.path}`}>
                                {product.category.name}
                              </Link>
                            </span>
                          </li>
                        </ul>
                        <div className="text-sm text-justify px-3">
                          <p>{product.description}</p>
                        </div>
                      </div>
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
                            <AddToCartButton product={product} />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* service */}
                    <div className="product-services md:absolute md:bottom-0 md:left-0 md:right-0 md:border-t md:!mb-0 md:mx-6">
                      <ProductServiceBox />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <div>
              <ProductSwiperList
                products={relatedProducts}
                title={"محصولات مرتبط"}
                url={"#"}
                showMoreLink={false}
              />
            </div>
            {/* Product Info */}
            <ProductInfoTabs product={product} productProperties={productProperties} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;

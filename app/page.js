// 'use client'
import Slideshow from "@/components/Slideshow/Slideshow";
// import Product from "@/components/ProductItem/Product";
import ProductSwiperList from "@/components/ProductSwiperList/ProductSwiperList";
// import {useEffect, useState} from "react";
import { mongooseConnect } from "@/lib/mongodb";
import { Product } from "@/models/Product";

export const metadata = {
  title: "فروشگاه اینترنتی لوازم جانبی",
  description:
    "فروشگاه اینترنتی لوازم جانبی اولین فروشگاه تخصصی لوازم جانبی موبایل و تبلت و لپ تاپ خرید پاور بانک و هندزفری بلوتوث و انوع قاب و محافظ گوشی اسپیکر بلوتوث",
};

const Home = async () => {
  const newProducts = await getNewProducts();
  const featuredProduct = await getFeaturedProduct();

  {
    /*
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const response = await fetch("https://json.xstack.ir/api/v1/products?limit=15")
        const data = await response.json();
        console.log(data);
        setProducts(data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])*/
  }
  return (
    // container max-w-8xl mx-auto px-4 sm:px-6 md:px-8
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <div className="mb-6 md:mb-5">
          <Slideshow />
        </div>
        <ProductSwiperList
          products={newProducts}
          title={"جدیدترین ها"}
          url={"#"}
          showMoreLink={true}
        />
        <ProductSwiperList
          products={featuredProduct}
          title={"پرفروش ترین ها"}
          url={"#"}
          showMoreLink={true}
        />
      </div>
    </div>
  );
};

export default Home;

async function getNewProducts() {
  await mongooseConnect();
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  return JSON.parse(JSON.stringify(newProducts));
}
async function getFeaturedProduct() {
  await mongooseConnect();
  const featuredProduct = await Product.find({}, null, {
    sort: { _id: 1 },
    limit: 10,
  });
  return JSON.parse(JSON.stringify(featuredProduct));
}

// 'use client'
import Slideshow from "@/components/Slideshow/Slideshow";
// import Product from "@/components/ProductItem/Product";
import ProductSwiperList from "@/components/ProductSwiperList/ProductSwiperList";
// import {useEffect, useState} from "react";
import {mongooseConnect} from "@/lib/mongodb";
import {Product} from "@/models/Product";

const Home = async () => {

    const newProducts = await getNewProducts();
    const featuredProduct = await getFeaturedProduct();

    {/*
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        const response = await fetch("https://json.xstack.ir/api/v1/products?limit=15")
        const data = await response.json();
        console.log(data);
        setProducts(data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])*/}
    return (
        // container max-w-8xl mx-auto px-4 sm:px-6 md:px-8
        <div className="flex flex-col gap-6">
            <div className='w-full'>
                <Slideshow />
                <ProductSwiperList products={newProducts}/>
                <ProductSwiperList products={featuredProduct}/>
            </div>
        </div>
  )
}

export default Home;

async function getNewProducts() {
    await mongooseConnect();
    const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 10});
    return JSON.parse(JSON.stringify(newProducts))
}
async function getFeaturedProduct() {
    await mongooseConnect();
    const featuredProduct = await Product.find({}, null, {sort: {'_id': 1}, limit: 10});
    return JSON.parse(JSON.stringify(featuredProduct))
}
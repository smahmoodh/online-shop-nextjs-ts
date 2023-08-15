// 'use client'
import Slideshow from "@/components/Slideshow/Slideshow";
// import Product from "@/components/ProductItem/Product";
import ProductSwiperList from "@/components/ProductSwiperList/ProductSwiperList";
// import {useEffect, useState} from "react";
import {mongooseConnect} from "@/lib/mongodb";
import {Product} from "@/models/Product";

const Home = async () => {
    const featuredProductId = '64aa750f35310b21bc496a10';
    await mongooseConnect();
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 10});
    const newProducts2 = await Product.find({}, null, {sort: {'_id': 1}, limit: 10});
    console.log(newProducts);
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
                <ProductSwiperList products={newProducts2}/>
            </div>
        </div>
  )
}

export default Home;

// export async function getServerSideProps() {
//     const featuredProductId = '64aa750f35310b21bc496a10';
//     await mongooseConnect();
//     const featuredProduct = await Product.findById(featuredProductId);
//     const newProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 10});
//     return {
//         props: {
//             featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
//             newProducts: JSON.parse(JSON.stringify(newProducts)),
//         }
//     }
// }
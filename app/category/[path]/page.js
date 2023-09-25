// 'use client'

// import { useState } from 'react';
import { mongooseConnect } from '@/lib/mongodb';
import { Product } from '@/models/Product';
import { Category } from '@/models/Category';

import BoxTitleBar from '@/components/BoxTitleBar/BoxTitleBar';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import ToggleButton from '@/components/ToggleButton/ToggleButton';

import './page.css'
import ProductItem from '@/components/ProductItem/Product';
import Link from 'next/link';


export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const path = params.path
    const category = await Category.findOne({ path: path });


    return {
        title: process.env.SHOP_TITLE + ' | دسته بندی محصولات ' + category.name + ' - ' + category.enName,
        description:
            "فروشگاه اینترنتی لوازم جانبی اولین فروشگاه تخصصی لوازم جانبی موبایل و تبلت و لپ تاپ خرید پاور بانک و هندزفری بلوتوث و انوع قاب و محافظ گوشی اسپیکر بلوتوث",
    }
}




const CategoryPage = async ({ params }) => {
    const { id } = params;
    const { path } = params;
    console.log('path', params.path);
    let products = await getCategoryProducts(params.path);
    // 
    // console.log(products);

    // const [sort, setSort] = useState(initialSort);

    // const handleChangeLimit = (limitCount) => {
    //     const updatedUrl = `?sort=${sort}&limit=${limitCount}`;
    //     router.push(updatedUrl, undefined, { shallow: true });
    // };

    // const handleChangeSort = async (sortModel) => {
    //     setSort(sortModel);
    //     const updatedUrl = `?sort=${sortModel}&limit=${limit}&sortType=${sortType}`;
    //     router.push(updatedUrl, undefined, { shallow: true });
    // };


    return (
        <>
            <div className='category '>
                <Breadcrumbs id={params.path} type={"category"} />
                <main className="md:-mx-[15px] md:block md:flex-grow-0 md:flex-shrink-0 md:basis-full md:max-w-full md:relative md:w-full">
                    <div className='md:grid md:grid-cols-12'>
                        <div className="px-4 md:min-h-screen md:overflow-visible md:relative md:col-span-12 lg:col-span-3">
                            <div className='md:pt-0 md:pb-[1px] lg:sticky lg:top-[130px]'>
                                <div className='category__filterbox md:rounded md:border bg-white mb-4'>
                                    <div className='filterbox__block overflow-hidden'>
                                        <BoxTitleBar icon={true} type={'side'} title={'فیلتر'} />


                                        <div className="block__body">
                                            <div className="body__filter_products">
                                                <div className="filter_products__filter-box" id="filter_search">
                                                    <label className="filter-box__label" for="q">جستجو در نتایج</label>
                                                    <input placeholder="جستجو..." name="q" id="q" value="" className="filter-box__input form-control" type="text" />
                                                    <hr className="filter-box__hr" />
                                                </div>
                                                <div className="filter_products__filter-box" id="filter_brand">
                                                    <label className="filter-box__label" for="brand_id">برند</label>
                                                    <input placeholder="جستجو در برند ها ..." id="searchBrand" className="filter-box__input form-control mb-3" type="text" />
                                                    <div className="filter-box__brands_list">
                                                        <ul className="filter-box__checkboxes">
                                                            <li className="filter-box__checkbox">
                                                                <label for="field_brand_id_0" className="checkbox__label">
                                                                    <div className='checkbox__inputbox'>
                                                                        <input id="field_brand_id_0" type="checkbox" name="brand_id[]" value="3349" className="checkbox__input" />
                                                                        رسی
                                                                    </div>
                                                                    <span className="checkbox__span">Recci</span>
                                                                </label>
                                                            </li>
                                                            <li className="filter-box__checkbox">
                                                                <label for="field_brand_id_1" className="checkbox__label">
                                                                    <div className='checkbox__inputbox'>
                                                                        <input id="field_brand_id_1" type="checkbox" name="brand_id[]" value="3253" className="checkbox__input" />
                                                                        ارلدام
                                                                    </div>
                                                                    <span className="checkbox__span">Earldom</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <hr className="filter-box__hr" />
                                                </div>
                                                <div className="filter_products__filter-box" id="filter_status">
                                                    <div className="filter-box__clearfix filter_area" data-filter="status">
                                                        <ToggleButton />
                                                        <label className="filter-box__filter-label-inline inline" for="status">فقط آیتم‌های موجود</label>
                                                    </div>
                                                    <hr className="filter-box__hr" />
                                                </div>
                                                <div className="filter_products__filter-box" id="filter_off">
                                                    <div className="filter-box__clearfix filter_area" data-filter="off">
                                                        <ToggleButton />
                                                        <label className="filter-box__filter-label-inline inline" for="off">فقط آیتم‌های تخفیف دار</label>
                                                    </div>
                                                    <hr className="filter-box__hr" />
                                                </div>
                                                <div className="filter_products__filter-box" id="filter_special">
                                                    <div className="filter-box__clearfix filter_area" data-filter="special">
                                                        <ToggleButton />
                                                        <label className="filter-box__filter-label-inline inline" for="special">فقط آیتم‌های ویژه</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:px-4 md:col-span-12 lg:col-span-9 ">
                            <div className='box'>
                                <div className='content'>
                                    <div className='hidden invisible lg:visible lg:block mb-6'>
                                        <BoxTitleBar icon={false} type={'page'} title={params.path} />
                                    </div>
                                    <div className='lg:hidden lg:invisible mb-6'>
                                        <BoxTitleBar icon={true} type={'page'} title={params.path} />
                                    </div>
                                    <div className="body">
                                        <div className="filter__items m-0 mb-6 border-b border-gray-200 lg:grid lg:grid-cols-12">
                                            <div className='col-span-8'>
                                                <div className='btn__sorts inline-flex items-center '>
                                                    
                                                    <button type='button' className={`btn btn-link btn-default`} >جدیدترین ها</button>
                                                    <button type='button' className={`btn btn-link `}  >پرفروشترین ها</button>
                                                    <button type='button' className={`btn btn-link `} >ارزان‌ترین ها</button>
                                                    <button type='button' className={`btn btn-link `} >گران‌ترین ها</button>
                                                {/*    
                                                    <button type='button' className={`btn btn-link ${sort === 'new' ? 'btn-default' : ''}`} onClick={() => handleChangeSort('new')}>جدیدترین ها</button>
                                                    <button type='button' className={`btn btn-link ${sort === 'sales' ? 'btn-default' : ''}`} onClick={() => handleChangeSort('sales')}>پرفروشترین ها</button>
                                                    <button type='button' className={`btn btn-link ${sort === 'price' && sortType === 'asc' ? 'btn-default' : ''}`} onClick={() => handleChangeSort('lowprice')}>ارزان‌ترین ها</button>
                                                    <button type='button' className={`btn btn-link ${sort === 'price' && sortType === 'desc' ? 'btn-default' : ''}`} onClick={() => handleChangeSort('highprice')}>گران‌ترین ها</button>
                                                */}
                                                </div>
                                            </div>
                                            <div className='col-span-4'></div>
                                        </div>
                                        <div className="products">
                                            <div className="products__items grid grid-cols-12 -mr-2 -ml-2 mb-8">
                                                {products.length > 0 && products.map((product) => (
                                                    <div className='xl:col-span-3 lg:col-span-4 sm:col-span-4 col-span-6 px-2 mb-4'>
                                                        <ProductItem product={product} slider={true} />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='pageslist mb-6'>
                                                <nav class="flex items-center justify-center gap-x-2 [&>a]:font-dana-fanum">
                                                    <Link class="w-8 h-8 text-gray-500 flex items-center justify-center text-sm font-medium rounded-md leading-8 hover:bg-primary hover:text-white" href="#">
                                                        <span aria-hidden="true">«</span>
                                                        <span class="sr-only">Previous</span>
                                                    </Link>
                                                    <Link class="w-8 h-8 bg-primary text-white flex items-center justify-center text-sm font-medium rounded-md leading-8" href="#" aria-current="page">1</Link>
                                                    <Link class="w-8 h-8 text-gray-500 flex items-center justify-center text-sm font-medium rounded-md leading-8 hover:bg-primary hover:text-white" href="#">2</Link>
                                                    <Link class="w-8 h-8 text-gray-500 flex items-center justify-center text-sm font-medium rounded-md leading-8 hover:bg-primary hover:text-white" href="#">3</Link>
                                                    <Link class="w-8 h-8 text-gray-500 flex items-center justify-center text-sm font-medium rounded-md leading-8 hover:bg-primary hover:text-white" href="#">
                                                        <span class="sr-only">Next</span>
                                                        <span aria-hidden="true">»</span>
                                                    </Link>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                
            </div>

        </>
    )
}

export default CategoryPage


async function getCategoryProducts(path) {


    await mongooseConnect();
    let products;
    const categoryName = path;

    console.log('categoryName', categoryName);
    const category = await Category.findOne({ path: categoryName });

    if (category) {
        products = await Product.find({ category: category._id });
    } else {
        products = await Product.find({}, null, { sort: { '_id': -1 } });
    }

    products = JSON.parse(JSON.stringify(products));
    console.log('getServerSideProps');
    // console.log(products);
    return products
}
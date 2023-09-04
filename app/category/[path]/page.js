import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import React from 'react'

const CategoryPage = async ({ params }) => {
    console.log(params);
    const { id } = params;
    return (
        <>
            <div>
                <Breadcrumbs id={params.path} type={"category"} />
                <main className="md:block md:flex-grow-0 md:flex-shrink-0 md:basis-full md:max-w-full md:relative md:w-full md:px-4">
                    CategoryPage
                </main>
            </div>
        </>
    )
}

export default CategoryPage
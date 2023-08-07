import React from 'react';
import {Logo} from "@/components/Logo/logo";
import SearchBox from "@/components/Header/HeaderSearchBox/SearchBox";
import HeaderAccountBox from "@/components/Header/Des/HeaderAccountBox/HeaderAccountBox";
import HeaderCartButton from "@/components/Header/HeaderCartButton/HeaderCartButton";

const HeaderTop = () => {
    return (
        <div className='header--top py-3'>
            <div className='lg:container mx-auto px-3'>
                <div className="grid grid-cols-12 min-w-0">
                    <div className="col-span-9 px-4">
                        <div className="flex items-center justify-start header--logo-search-section">
                            <Logo cssClass="logo"/>
                            <SearchBox />
                        </div>
                    </div>
                    <div className="col-span-3 px-4 relative block">
                        <div className='flex items-center justify-end'>
                            <HeaderAccountBox/>
                            <HeaderCartButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop



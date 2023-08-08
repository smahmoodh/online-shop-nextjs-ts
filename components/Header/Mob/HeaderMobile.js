
import {Logo} from "@/components/Logo/logo";
import SearchBox from "@/components/Header/HeaderSearchBox/SearchBox";
import HeaderCartButton from "@/components/Header/HeaderCartButton/HeaderCartButton";
import HeaderSideMenu from "@/components/Header/Mob/HeaderSideMenu/HeaderSideMenu";

const HeaderMobile = () => {
    return (
        <>
            <div className='bg-white  block opacity-100 visible md:hidden md:opacity-0 md:invisible'>
                <div className='relative'>
                    <div className='flex justify-between items-center py-3 px-4'>
                        <div className='p-2 flex items-center'>
                            <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
                                <span className="sr-only">Toggle Navigation</span>
                                <svg className="w-8 h-8" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </button>
                        </div>
                        <Logo cssClass='w-[110px]' />
                        <HeaderCartButton />
                    </div>
                    <div className='relative p-4 pt-0'>
                        <SearchBox />
                    </div>
                </div>
                <HeaderSideMenu />
            </div>
        </>
    )
}

export default HeaderMobile



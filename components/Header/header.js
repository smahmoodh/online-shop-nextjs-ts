
import HeaderDesktop from "@/components/Header/Des/HeaderDesktop";
import HeaderMobile from "@/components/Header/Mob/HeaderMobile";

const Header = () => {
    return (
        <>
            <header className='bg-white p-0 block h-fit w-full sm:text-right text-center border-t-[3px] border-primary shadow-[0_1px_0_0_#e6e6e6]'>
                    <HeaderDesktop />
                    <HeaderMobile />
            </header>
        </>

    )
}

export default Header



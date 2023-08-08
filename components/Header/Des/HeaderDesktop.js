
import HeaderTop from "@/components/Header/Des/HeaderTop/HeaderTop";
import './HeaderDesktop.css'
import HeaderButtom from "@/components/Header/Des/HeaderButtom/HeaderButtom";
const HeaderDesktop = () => {

    return (
        <div className='hidden opacity-0 invisible md:block md:opacity-100 md:visible'>
            <HeaderTop />
            <HeaderButtom/>
        </div>
    )
}

export default HeaderDesktop



import Link from "next/link";
import Image from 'next/image'
import logo from '@/public/assets/img/logo-1.png';
import './logo.css';
export const Logo = ({cssClass}) => (
    <Link href='/' className={cssClass}>
        <Image src={logo} alt="لوگو" />
    </Link>
)
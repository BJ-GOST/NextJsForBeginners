import Logo from "@/UI/logo"
import Btn from "@/UI/button"
import Link from "next/link"

export default function Navbar(){

    return(

        <nav className='navbar'>
            <Logo/>
                <Link href="/" className="nav-link"> Home </Link>
                <Link href="/about" className="nav-link"> About </Link>
                <Link href="/services" className="nav-link"> Services </Link>
            <Btn/>
        </nav>

    )

}
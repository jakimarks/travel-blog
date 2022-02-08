import './NavBar.css'
import {MdMenu} from 'react-icons/md';
import {Link} from "react-router-dom";

type NavBarProps = {
    expand: boolean
}

function NavBar({expand}: NavBarProps) {
    const burgerMenu = (
        <MdMenu size={30} className="navbar__icon"/>
    )
    const entries = (
        <div className="navbar">
            <Link to='/about'>Wer wir sind</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    )
    return expand ? entries : burgerMenu;
}

export default NavBar

import './NavBar.css'
import {MdMenu} from 'react-icons/md';
import {NavLink} from "react-router-dom";

type NavBarProps = {
    expand: boolean
}

function NavBar({expand}: NavBarProps) {
    const burgerMenu = (
        <MdMenu size={30} className="navbar__icon"/>
    )
    const entries = (
        <div className="navbar">
            <NavLink to='/about'>Wer wir sind</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        </div>
    )
    return expand ? entries : burgerMenu;
}

export default NavBar

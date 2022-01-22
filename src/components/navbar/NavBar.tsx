import './NavBar.css'
import NavBarEntry from "./NavBarEntry";
import {MdMenu} from 'react-icons/md';

type NavBarProps = {
    expand: boolean
}

function NavBar({expand}: NavBarProps) {
    const burgerMenu = (
        <MdMenu size={30} className="navbar__icon"/>
    )
    const entries = (
        <div className="navbar">
            <NavBarEntry text={"Wer wir sind"}/>
            <NavBarEntry text={"Blog"}/>
        </div>
    )
    return expand ? entries : burgerMenu;
}

export default NavBar

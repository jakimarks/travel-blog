import './NavBar.css'
import NavBarEntry from "./NavBarEntry";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

function NavBar() {
    return (
        <div className="navbar">
            <NavBarEntry text={"Wer wir sind"}/>
            <NavBarEntry text={"Blog"}/>
        </div>
    );
}

export default NavBar

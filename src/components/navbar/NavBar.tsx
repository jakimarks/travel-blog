import './NavBar.css'
import NavBarEntry from "./NavBarEntry";

function NavBar() {
    return (
        <div className="navbar">
            <NavBarEntry text={"Wer wir sind"}/>
            <NavBarEntry text={"Blog"}/>
        </div>
    );
}

export default NavBar

import React from 'react';
import Logo from "../../components/branding/Logo";
import NavBar from "../../components/navbar/NavBar";
import './Header.css'

function Header() {
    // TODO make responsive expand navbar
    return (
        <div className="header">
            <Logo/>
            <NavBar expand={true}/>
        </div>
    );
}

export default Header;

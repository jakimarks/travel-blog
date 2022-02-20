import './Logo.css'
import React from "react";
import {ReactComponent as ReactLogo} from '../../assets/logo.svg';
import {Link} from "react-router-dom";

function Logo() {
    return (
        <Link to='/'>
            <ReactLogo className="logo" width="100px"/>
        </Link>
    )
}

export default Logo

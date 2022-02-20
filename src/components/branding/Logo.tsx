import './Logo.css'
import React from "react";
import {ReactComponent as ReactLogo} from '../../assets/logo.svg';

function Logo() {
    return (
        <ReactLogo className="logo" width="100px"/>
    )
}

export default Logo

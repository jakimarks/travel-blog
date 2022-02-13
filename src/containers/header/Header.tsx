import React, {FunctionComponent} from 'react';
import Logo from "../../components/branding/Logo";
import NavBar from "../../components/navbar/NavBar";
import './Header.css'
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
    // TODO make responsive expand navbar
    return (
        <div className="header">
            <Link to='/'>
                <Logo/>
            </Link>
            <NavBar expand={true}/>
        </div>
    );
};

export default Header;

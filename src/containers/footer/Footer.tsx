import React, {FunctionComponent} from 'react';
import Logo from "../../components/branding/Logo";
import './Footer.css'
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {
    return (<div className="footer">
        <div className="footer__top">
            <Logo/>
            <span>"Einfach mal machen, könnte gut werden."</span>
        </div>
        <div className="footer__bottom">
            <Link to="imprint">Impressum</Link>
            <span>|</span>
            <Link to="data-privacy">Datenschutzerklärung</Link>
        </div>
    </div>);
};

export default Footer;

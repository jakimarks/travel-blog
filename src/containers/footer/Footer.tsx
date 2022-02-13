import React, {FunctionComponent} from 'react';
import Logo from "../../components/branding/Logo";
import './Footer.css'
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {
    return (<div className="footer">
        <div className="footer__left">
            <Logo/>
            <span>"Einfach mal machen, könnte ja gut werden."</span>
        </div>
        <div className="footer__right">
            <Link to='/blog' className="footer__right__title">Mehr auf unserem Blog</Link>
            <div className="footer__right__links">
                <Link className="footer__right__link" to="imprint">Impressum</Link>
                <Link className="footer__right__link" to="data-privacy">Datenschutzerklärung</Link>
            </div>
        </div>
    </div>);
};

export default Footer;

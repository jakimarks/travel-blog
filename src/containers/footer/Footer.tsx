import React, {FunctionComponent} from 'react';
import Logo from "../../components/branding/Logo";
import './Footer.css'

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
            <span className="footer__right__title">Mehr auf unserem Blog</span>
            <div className="footer__right__links">
                <a className="footer__right__link" href="#">Kontakt</a>
                <a className="footer__right__link" href="#">Impressum</a>
                <a className="footer__right__link" href="#">Datenschutzerklärung</a>
            </div>
        </div>
    </div>);
};

export default Footer;

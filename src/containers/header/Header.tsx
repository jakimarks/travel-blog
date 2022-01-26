import React, { FunctionComponent } from 'react';
import Logo from "../../components/branding/Logo";
import NavBar from "../../components/navbar/NavBar";
import './Header.css'

interface OwnProps {}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
  // make responsive
  return (
      <div className="header">
          <Logo/>
          <NavBar expand={true}/>
      </div>
  );
};

export default Header;

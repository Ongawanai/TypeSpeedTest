import { FunctionComponent } from "react";
import logo from "../assets/logo.png";
import "../style/header.css";

const Header: FunctionComponent = () => {
  return (
    <header className='container header'>
      <div className='header-container'>
        <img className='header-img' src={logo} alt='site logo' />
        <h1 className='header-text'>Торопыга</h1>
      </div>
    </header>
  );
};

export default Header;

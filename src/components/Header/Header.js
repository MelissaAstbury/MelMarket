import React from 'react';
import logo from '../../assets/logo.png';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header-logo" />
      <h1>MelMarket</h1>
    </div>
  );
};

export default Header;

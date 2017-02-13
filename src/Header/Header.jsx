import React from 'react';

import './Header.css';
import SearchBox from '../SearchBox/SearchBox';

const baseClass = 'header';
const Header = () => {
  return (
    <div className={baseClass}>
      <h1>Contact List</h1>
      <SearchBox />
    </div>
  );
};

Header.baseClass = baseClass;

export default Header;

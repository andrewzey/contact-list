import React from 'react';

import './Header.css';
import SearchBox from '../SearchBox/SearchBox';

const Header = () => {
  return (
    <div>
      <h1>Contact List</h1>
      <SearchBox />
    </div>
  );
};

export default Header;
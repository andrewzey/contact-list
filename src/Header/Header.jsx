import React, { PropTypes } from 'react';

import './Header.css';
import SearchBox from '../SearchBox/SearchBox';

const baseClass = 'header';
const Header = ({searchFunc}) => {
  return (
    <div className={baseClass}>
      <h1 className={`${baseClass}__title`}>Contact List</h1>
      <SearchBox callback={searchFunc} />
    </div>
  );
};

Header.baseClass = baseClass;
Header.propTypes = {
  searchFunc: PropTypes.func.isRequired,
}

export default Header;

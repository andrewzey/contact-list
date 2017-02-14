import React, { Component, PropTypes } from 'react';

import './SearchBox.css';
import searchIcon from './icon-search.png';

const baseClass = 'search-box';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBoxValue: '',
    };
  }

  handleChange(event) {
    const searchBoxText = event.target.value.toLowerCase();
    this.setState({searchBoxValue: searchBoxText});
    this.props.callback(searchBoxText);
  }

  render() {
    return (
      <div className={baseClass}>
        <img
          className={`${baseClass}__icon`}
          src={searchIcon}
          width="21"
          height="18"
          alt="search icon"
        />
        <input
          className={`${baseClass}__input`}
          placeholder="search..."
          value={this.state.searchBoxValue}
          onChange={(event) => this.handleChange(event)}
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  callback: PropTypes.func.isRequired,
}

SearchBox.baseClass = baseClass;

export default SearchBox;
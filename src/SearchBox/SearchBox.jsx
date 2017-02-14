import React, { Component, PropTypes } from 'react';

import './SearchBox.css';

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
      <input
        className={baseClass}
        placeholder="search..."
        value={this.state.searchBoxValue}
        onChange={(event) => this.handleChange(event)}
      />
    );
  }
}

SearchBox.propTypes = {
  callback: PropTypes.func.isRequired,
}

SearchBox.baseClass = baseClass;

export default SearchBox;
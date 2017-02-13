import React, { Component } from 'react';
// Fetch Polyfill
import 'whatwg-fetch';

import './App.css';

import Header from '../Header/Header';
import Contacts from '../Contacts/Contacts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: null
    };
  }

  componentDidMount() {
    // Fetch contacts from API, and set state on successful response
    // TODO: move this into a separate API utility, and write unit tests to
    // verify expected behavior
    fetch('https://candidate-test.herokuapp.com/contacts')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({contacts: json});
        // TODO: remove logging statement
        console.log(this.state.contacts);
      })
      .catch((error) => {
        throw new Error('Something went wrong!', error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Contacts />
      </div>
    );
  }
}

export default App;

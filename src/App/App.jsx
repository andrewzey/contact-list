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
      contacts: null,
      filteredContacts: null,
    };
  }

  /* Filters contacts according to searchString
   * only searches through "name", "job", and "company_name" fields, since
   * they are visible without hovering
   * Search functionality is case insensitive.
   */
  filterContacts(searchString) {
    const filteredContacts = this.state.contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(searchString) ||
        contact.job.toLowerCase().includes(searchString) ||
        contact.company_name.toLowerCase().includes(searchString)
      );
    });
    this.setState({filteredContacts});
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
        this.setState({contacts: json, filteredContacts: json});
      })
      .catch((error) => {
        throw new Error('Something went wrong!', error);
      });
  }

  render() {
    return (
      <div>
        <Header
          searchFunc={(searchString) => this.filterContacts(searchString)}
        />
        <Contacts data={this.state.filteredContacts} />
      </div>
    );
  }
}

export default App;

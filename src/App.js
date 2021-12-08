import React, { Component } from 'react'
import './App.css'
import Contact from './Contact'

class App extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.addContact.bind(this);
  }
  state = {
    contacts: [{
      name: 'Süleyman',
      phone: '0555 555 5555'
    },
    {
      name: 'Ahmet',
      phone: '0533 333 3333'
    }]
  };

  addContact(contact) {
    console.log(contact);

    const { contacts } = this.state;
    contacts.push(contact);
    this.setState(
      {
        contacts: contacts
      }
    );

  }
  render() {
    return (
      <div className="App">
        <Contact addContact={this.addContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'Components/ContactForm';
import Filter from 'Components/Filter';
import ContactList from 'Components/ContactList';
import contactData from './Components/ContactData';

class App extends Component {
  state = {
    contacts: contactData,
    filter: '',
  };

  addNewContact = data => {
    let condition = true;
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.state.contacts.filter(item => {
      if (item.name.includes(contact.name)) {
        return (condition = false);
      } else {
        return true;
      }
    });

    if (condition === true) {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    } else alert(`${contact.name} is already in contacts.`);
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteConatact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilterChange={this.changeFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.deleteConatact}
        />
      </div>
    );
  }
}

export default App;

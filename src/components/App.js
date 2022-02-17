import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  newContacts = () => {
    return this.state.contacts.filter(contact => 
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    const foundNames = this.state.contacts.find(
      contact=>contact.name===name,
    );

    if (foundNames) {
      return alert(`${name} is already in contacts`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };


  render() {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>Phonebook</h1>
          <ContactForm
            onSubmit={this.addContact}
          />
          
          <h2 style={{ textAlign: "center" }}>Contacts</h2>
          <Filter
            filter={this.state.filter}
            input={this.filterChange}
          />
          <ContactList
            newContacts={this.newContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
    );
  }

};

export default App;
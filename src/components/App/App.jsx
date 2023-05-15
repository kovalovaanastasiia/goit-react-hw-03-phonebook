import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  onAddContact = contact => {
    const finalContact = {
      id: nanoid(),
      ...contact,
    };
    if (this.state.contacts.some(el => el.name === contact.name)) {
      // alert(`${contact.name} is already exist!`)
      toast.error(`${contact.name} is already exist!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, finalContact] };
    });
  };

  onSetFilter = (filter) => {
    this.setState({ filter: filter });
  };
  onDeleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactId),
    }));
  };
  componentDidMount() {
    const storageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storageContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      console.log('Обновилось поле todos, записываю todos в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }

  }
  render() {
    return (
      <div>
        <h1 style={{ marginLeft: 20 }}>Phonebook</h1>
        <Form onAddContact={this.onAddContact} />
        <h2 style={{ marginLeft: 20 }}>Contacts</h2>
        <Filter onFilter={this.onSetFilter} />
        <ContactList contacts={this.state.contacts.filter(({ name }) =>
          name.toLowerCase().includes(this.state.filter.toLowerCase()),
        )} filter={this.state.filter} onDelete={this.onDeleteContact} />
        <ToastContainer />
      </div>

    );
  }
}

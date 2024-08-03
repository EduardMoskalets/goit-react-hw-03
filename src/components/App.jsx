
import { useState, useEffect } from 'react';
import initialContacts from '../contacts.json';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("my-contacts");
    return JSON.parse(savedContacts) || initialContacts;
  });

  const [search, setSearch] = useState('');

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("my-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
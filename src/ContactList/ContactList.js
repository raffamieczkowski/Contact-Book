import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <Contact id={id} name={name} phone={phone} />
        </li>
      ))}
    </ul>
  );
};

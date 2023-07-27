import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import css from './ContactEditor.module.css';

export const ContactEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    if (name !== '' && phone !== '') {
      dispatch(addContact({ name, phone }));
      form.reset();
      return;
    }
    alert('Name and phone cannot be empty. Enter some text!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Phone
        <input type="text" name="phone" />
      </label>
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

import { useState } from 'react';
import { Form, AddContactButton } from './ContactsForm.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/auth/authApi';
import { selectContacts } from 'redux/auth/authSelectors';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contactList = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = { name, phone };

    contactList.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(contact));

    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="number"
        placeholder="Phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={phone}
        onChange={handleChange}
        required
      />

      <AddContactButton type="submit" value="Add contact">
        Add Contact
      </AddContactButton>
    </Form>
  );
};

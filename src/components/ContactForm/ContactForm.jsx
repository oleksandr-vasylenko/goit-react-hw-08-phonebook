import { getContactsArray } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsApi';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Stack, Container } from '@mui/material';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const array = useSelector(getContactsArray);

  const handleInputName = e => {
    return e.currentTarget.value;
  };

  const handleInputNumber = e => {
    return e.currentTarget.value;
  };

  const dispatch = useDispatch();

  const addContactsItem = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const phone = e.target.elements.number.value;
    const contact = { name, number: phone };
    e.target.reset();

    const isDublicate = array.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDublicate) {
      toast.warn(`${name} is already in contacts!`);
      return;
    }
    dispatch(addContact(contact));
    toast.success('New contact added!');
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={addContactsItem}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            type="text"
            name="name"
            required
            placeholder="Name"
            onChange={handleInputName}
            variant="standard"
            size="small"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            inputProps={{
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            }}
          />
          <TextField
            label="Phone"
            type="tel"
            name="number"
            required
            placeholder="111-11-11"
            onChange={handleInputNumber}
            variant="standard"
            size="small"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            inputProps={{
              pattern:
                '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              type="submit"
              style={{
                minWidth: '150px',
              }}
            >
              Add
            </Button>
          </div>
        </Stack>
      </form>
    </Container>
  );
};

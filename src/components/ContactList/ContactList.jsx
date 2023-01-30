import { ContactListItem } from './ContactListItem';
import { useSelector } from 'react-redux';
import {
  getContactsArray,
  getContactsFilter,
} from 'redux/contacts/contactsSelectors';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export const ContactList = () => {
  const array = useSelector(getContactsArray);
  const filterName = useSelector(getContactsFilter);

  const visibleContacts = array.filter(contact =>
    contact.name.toLowerCase().includes(filterName)
  );

  return (
    <>
      {visibleContacts.length !== 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleContacts.map(({ id, name, number }) => {
              return (
                <ContactListItem key={id} id={id} name={name} number={number} />
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <Typography component="h3" marginTop={5}>
          Not found...
        </Typography>
      )}
    </>
  );
};

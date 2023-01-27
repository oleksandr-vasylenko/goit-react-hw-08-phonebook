import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import {
  getContactsArray,
  getIsLoading,
  getError,
} from 'redux/contacts/contactsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsApi';
import {
  Container,
  Typography,
  Stack,
  CircularProgress,
  Box,
} from '@mui/material';

export const Contacts = () => {
  const dispatch = useDispatch();
  const array = useSelector(getContactsArray);
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="xs">
      {error ? (
        <b>{error}</b>
      ) : (
        <>
          <Typography align="center" variant="h6" marginBottom={3}>
            Add new contact
          </Typography>
          <ContactForm />
          <Typography align="center" variant="h6" margin={3}>
            All your contacts
          </Typography>

          {loading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          ) : array.length === 0 ? (
            <Typography variant="h7" margin={3}>
              Please, enter your first contact!
            </Typography>
          ) : (
            <>
              <Stack spacing={2}>
                <Filter />
                <ContactList />
              </Stack>
            </>
          )}
        </>
      )}
    </Container>
  );
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/auth/authSelectors';

import { GlobalStyle } from '../../GlobalStyle';

import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

import { fetchContacts } from 'redux/auth/authApi';
import { Thumb } from './App.Styled';

export const App = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Thumb>
      <h1>Phonebook</h1>
      <ContactsForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {contactList.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>You don't have any contacts here, add a new one...</p>
      )}
      <GlobalStyle />
    </Thumb>
  );
};

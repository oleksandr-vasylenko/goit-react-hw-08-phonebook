import { useSelector, useDispatch } from 'react-redux';
import { getContactsFilter } from 'redux/contacts/contactsSelectors';
import { setFilter } from 'redux/filter/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const filterName = useSelector(getContactsFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    let searchName = e.target.value;
    dispatch(setFilter(searchName.toLowerCase()));
  };

  return (
    <TextField
      label="Search"
      type="text"
      value={filterName}
      onChange={changeFilter}
      placeholder="Name..."
      variant="outlined"
      size="small"
      fullWidth
    />
  );
};

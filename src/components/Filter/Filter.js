import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/auth/authSelectors';
import { FilterThumb } from './Filter.Styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function handleUpdate(e) {
    const query = e.target.value;
    dispatch(filterContacts(query));
  }

  return (
    <FilterThumb>
      <h3>Find contact by name</h3>
      <input value={filter} type="text" onChange={handleUpdate} />
    </FilterThumb>
  );
};

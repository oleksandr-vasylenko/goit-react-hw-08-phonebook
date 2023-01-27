import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsApi';
import { TableRow, TableCell, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Avatar from 'react-avatar';
import { toast } from 'react-toastify';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <TableRow
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row" align="center">
        <Avatar name={name} size={30} round={true} />
      </TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{number}</TableCell>
      <TableCell align="center" dataid={id}>
        <IconButton
          color="error"
          onClick={() => {
            toast.info('Your contact has been deleted!');
            dispatch(deleteContact(id));
          }}
        >
          <ClearIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

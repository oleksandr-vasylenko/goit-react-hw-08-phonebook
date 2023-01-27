import { getIsLoadingLogin, getUserName } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Tab, Tabs, Typography, CircularProgress } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoadingLogin);
  const name = useSelector(getUserName);
  const [value, setValue] = useState('contacts');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            component={Link}
            to="/contacts"
            label="Contacts"
            active="true"
            value="contacts"
          />
          <Tab
            onClick={() => dispatch(logOut())}
            value="logout"
            icon={
              !loading ? (
                <LogoutIcon fontSize="small" />
              ) : (
                <CircularProgress size={24} />
              )
            }
            aria-label="logout"
          />
        </Tabs>
      </Box>
      <Typography align="center" variant="h5" margin={3} fontWeight="700">
        Welcome in your phonebook, {name}!
      </Typography>
    </>
  );
};

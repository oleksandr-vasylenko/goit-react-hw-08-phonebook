import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/authApi';
import { getIsLoadingLogin } from 'redux/auth/authSelectors';
import {
  TextField,
  Button,
  Stack,
  Container,
  CircularProgress,
} from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoadingLogin);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} marginTop={5}>
          <TextField
            label="Name"
            name="name"
            value={name}
            type="text"
            onChange={handleChange}
            required
            variant="standard"
            size="small"
          />
          <TextField
            label="Email"
            name="email"
            value={email}
            type="email"
            onChange={handleChange}
            required
            variant="standard"
            size="small"
          />
          <TextField
            label="Password"
            name="password"
            value={password}
            type="password"
            onChange={handleChange}
            required
            variant="standard"
            size="small"
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
              {!loading ? (
                'Register'
              ) : (
                <CircularProgress size={28} color="info" />
              )}
            </Button>
          </div>
        </Stack>
      </form>
    </Container>
  );
};

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authApi';
import { getIsLoadingLogin } from 'redux/auth/authSelectors';
import {
  TextField,
  Button,
  Stack,
  Container,
  CircularProgress,
} from '@mui/material';

export const LoginForm = () => {
  const loading = useSelector(getIsLoadingLogin);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} marginTop={5}>
          <TextField
            label="Email"
            name="email"
            value={email}
            type="email"
            onChange={handleChange}
            required
            variant="outlined"
            size="small"
          />
          <TextField
            label="Password"
            name="password"
            value={password}
            type="password"
            onChange={handleChange}
            required
            variant="outlined"
            size="small"
          />
          <Button variant="contained" type="submit">
            {!loading ? 'Login' : <CircularProgress size={28} color="info" />}
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

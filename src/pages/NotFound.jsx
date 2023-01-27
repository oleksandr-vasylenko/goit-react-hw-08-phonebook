import { Box, Button, Stack } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 2000);
  }, [navigate]);

  return (
    <Box
      sx={{
        mt: 10,
      }}
    >
      <Stack spacing={2}>
        <p>Page not found!</p>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            endIcon={<ExitToAppIcon />}
          >
            Go back
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

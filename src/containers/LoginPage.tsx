import { Box } from '@mui/system';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from 'src/components/Button';
import { useAuth } from 'src/hooks/useAuth';
import BaseLayout from 'src/layouts/Base';

function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  const { signinFn } = useAuth() as any;

  const { from } = (location as any).state || { from: { pathname: "/" } };

  const login = React.useCallback(() => {
    signinFn && signinFn(() => {
      history.replace(from);
    });
  }, []);

  return (
    <React.Fragment>
      <BaseLayout>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Button variant="contained" color="primary" onClick={login} disableElevation style={{ marginTop: 20 }}>
            Login
          </Button>
        </Box>

      </BaseLayout>

    </React.Fragment>
  );
}

export default LoginPage;
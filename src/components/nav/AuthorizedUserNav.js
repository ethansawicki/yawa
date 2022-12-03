import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logout } from '../helpers/Logout';

export const AuthorizedUserNav = () => {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color='inherit'>Radar</Button>
          <Button color='inherit'>My Locations</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" onClick={() => logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
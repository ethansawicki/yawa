import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import "./Link.css"
import { googleAuth } from '../helpers/googleAuth';

export const AuthorizedUserNav = () => {
  const navigate = useNavigate()

  const onSubmitLogoutGoogle = () => {
    googleAuth.signOut(navigate);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link className='link' to='/'><Button color='inherit'>Current Conditions</Button></Link>
          <Link className='link' to='/History'><Button color='inherit'>Location History</Button></Link>
          <Link className='link' to='/SavedLocations'><Button color='inherit'>My Locations</Button></Link>
          <Link className='link' to='/SearchLocations'><Button color='inherit'>Search</Button></Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" onClick={() => {onSubmitLogoutGoogle()}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
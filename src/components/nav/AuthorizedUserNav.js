import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import "./Link.css"
import { logout } from '../helpers/Logout';

export const AuthorizedUserNav = ({successfulLogIn}) => {
  const navigate = useNavigate()

  const onLogout = () => {
    logout.logout(successfulLogIn, navigate);
    
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <Link className='link' to='/'><Button color='inherit'>Current Conditions</Button></Link>
          {/* <Link className='link' to='/History'><Button color='inherit'>Location History</Button></Link> */}
          <Link className='link' to='/SavedLocations'><Button color='inherit'>My Locations</Button></Link>
          <Link className='link' to='/SearchLocations'><Button color='inherit'>Search</Button></Link>
          <Typography align='center' sx={{flexGrow: 5.8}}>YAWA</Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" onClick={() => {onLogout()}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
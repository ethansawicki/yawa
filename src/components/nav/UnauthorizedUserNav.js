import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { googleAuth } from '../helpers/googleAuth';



export const UnauthorizedUserNav = ({successfulLogIn}) => {
  // Login with Google
 const onSubmitLoginGoogle = async () => {
    googleAuth.signInRegister(successfulLogIn);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" onClick={() => {onSubmitLoginGoogle()}} >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
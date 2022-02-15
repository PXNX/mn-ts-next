import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';




export default function Login() {
  return (
    <Box>    
    

        <TextField
          error
          id="outlined-error-helper-text"
          label="E-Mail"
      fullWidth
     /*     helperText="Incorrect entry." */
        />

        


<Button variant="contained" fullWidth>Sign In</Button>
<Button variant="text" fullWidth>Create Account</Button>


   

    </Box>


  );
}
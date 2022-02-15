import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const FooterStyle = {
        width: "100%",
        height: "100px",
        borderTop: "1px solid #eaeaea",
        position:"fixed",
        display:"flex",
        bottom: 0,
        left:0,
        right:0,
        justifyContent: "center",
        alignItems: "center"
}


export default function Footer() {
  return (
<footer style={FooterStyle}>
  wtf is this footer
</footer>
  )
}
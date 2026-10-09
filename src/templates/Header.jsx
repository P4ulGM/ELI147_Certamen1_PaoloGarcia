import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            Anillo Único
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: 'right' }}
          >
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
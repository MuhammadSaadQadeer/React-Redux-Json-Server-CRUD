import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

export default props =>
    <AppBar position="relative" color="primary">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                DMS
          </Typography>
        </Toolbar>
    </AppBar>
import React, { useState } from 'react';
import Quote from './Quote';
import './App.css';
import { Button, Container, Grid, Typography } from '@material-ui/core';

function App() {

  return (
    <div className="container">
      
      <Grid container  direction="column" spacing="5" alignItems="center" justifyContent="center">
        <Grid item>
          <Typography variant="h1">
            Quotes
          </Typography>
        </Grid>
        <Grid item>
          <Quote title="Quote Title" content="Content text"></Quote><br />
        </Grid>
        <Grid item>
        <Button variant="contained" color="primary">
          Refresh
        </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

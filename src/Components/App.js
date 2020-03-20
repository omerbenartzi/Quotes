import React, {useEffect, useState } from 'react';
import Quote from './Quote';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import {getQuote} from '../API/QuoteAPI';

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote().then((q) => {
      setQuote(q);
    });
  }, []);

  const onBtnRefreshClick = () => {
    getQuote().then((q) => {
      setQuote(q);
    });
  }

  return (
    <div className="container">
      <Grid direction="column" container spacing={5} alignItems="center" >
        <Grid item>
          <Typography variant="h1">
            Quotes
          </Typography>
        </Grid>
        <Grid item>
          <Quote quote={quote}></Quote><br />
        </Grid>
        <Grid item>
        <Button variant="contained" onClick = {onBtnRefreshClick} color="primary">
          Refresh
        </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

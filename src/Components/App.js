import React, {useEffect} from 'react';
import Quote from './Quote';
import './App.css';
import { Button, Grid, Typography } from '@material-ui/core';
import {getQuote} from '../API/QuoteAPI';
import {changeQuote} from '../Store/actions';
import {useStore} from '../Store/store';

function App() {
  const {dispatch} = useStore();

  useEffect(() => {
    
    getQuote().then((q) => {
      dispatch(changeQuote(q));
    });
  }, [dispatch]);

  const onBtnRefreshClick = () => {
    getQuote().then((q) => {
      dispatch(changeQuote(q));
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
          <Quote></Quote><br />
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

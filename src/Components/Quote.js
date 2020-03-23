import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import './Quote.css';
import {useStore} from '../Store/store';

const Quote = (props) => {
    const {state} = useStore();
    const store = state
    
    return (
        <div className="quote">
            <Card>
                <CardActionArea>
                    <CardMedia src="https://www.w3schools.com/howto/img_snow_wide.jpg" title="Quote Title"></CardMedia>
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{store.quote.character} from {store.quote.anime}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {store.quote.content}
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    );
    
};

export default Quote;
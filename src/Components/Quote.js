import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import './Quote.css';

const Quote = (props) => {

    console.log(props.quote);
    return (
        <div className="quote">
            <Card>
                <CardActionArea>
                    <CardMedia src="https://www.w3schools.com/howto/img_snow_wide.jpg" title="Quote Title"></CardMedia>
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{props.quote.character} from {props.quote.anime}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.quote.content}
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    );
    
};

export default Quote;
import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import './Quote.css';

const Quote = (props) => {
    return (
        <div className="quote">
            <Card>
                <CardActionArea>
                    <CardMedia title="Quote Title"></CardMedia>
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{props.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.content}
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    );
};

export default Quote;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        boxShadow: '4px 6px 10px rgba(0,0,0,0.3)',
        borderRadius: '3px',
        boxSizing: 'border-box',
        padding: '30px',
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left'
    }
});

const Card = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            {children}
        </div>
    );
};

export default Card;
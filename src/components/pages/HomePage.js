import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import Spacer from '../Spacer';

const useStyles = makeStyles({
    landingPage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '800px',
        margin: 'auto',
        paddingBottom: '200px',
    },
    quoteSection: {
        width: '400px',
        lineHeight: '32px',
    },
    quoteAuthorText: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
})

const HomePage = () => {
    const classes = useStyles();
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(resp => resp.json())
            .then(resp => {
                setQuote(resp[0]);
            })
            .catch(resp => {
                setQuote('Error fetching quote!');
            });
    }, []);

    return (
        <div className={classes.landingPage}>
            <Spacer verticalSize="60px" />
            <Typography variant="h1">What's up.</Typography>
            <Spacer verticalSize="80px" />
            <Typography variant="h2">I'm Gabe.</Typography>
            <Spacer verticalSize="20px" />
            <Typography variant="h2">And I like web development.</Typography>
            <Spacer verticalSize="200px" />
            {quote
                ? (
                    <div className={classes.quoteSection}>
                        <FormatQuoteIcon />
                        <Typography variant="body1" display="inline" color="textSecondary">{quote}</Typography>
                        <FormatQuoteIcon />
                        <div className={classes.quoteAuthorText}>
                            <Typography variant="caption">- Ron Swanson</Typography>
                        </div>
                    </div>
                ) : (
                    <CircularProgress />
                )
            }
        </div>
    );
};

export default HomePage;
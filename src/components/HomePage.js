import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    landingPage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})

const HomePage = () => {
    const classes = useStyles();
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(resp => resp.json())
            .then(resp => {
                setUrl(resp[0]);
            })
            .catch(resp => {
                setUrl('Error fetching quote!');
            });
    }, []);

    return (
        <div className={classes.landingPage}>
            <h1>Welcome to Gabe's Portfolio</h1>
            {url
                ? (
                    <span>{url}</span>
                ) : (
                    <CircularProgress />
                )
            }
        </div>
    );
};

export default HomePage;
import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Card from '../Card';
import Spacer from '../Spacer';
import getJournalContent from '../../lib/dropbox';

const useStyles = makeStyles({
    cardWrapper: {
        width: '600px',
        margin: 'auto'
    }
});

const BlogPage = () => {
    const [journalContent, setJournalContent] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getJournalContent(data => {
            setJournalContent(data);
        });
    }, []);

    // TODO: add in link to https://www.dropbox.com/developers/documentation/http/documentation#files-download

    return (
        <div>
            <Spacer verticalSize="60px" />
            <Typography variant="h2">Check out my work journal:</Typography>
            <Spacer verticalSize="60px" />
            <div className={classes.cardWrapper}>
                {!!journalContent.length ? (
                    journalContent.map(entry => (
                        <Card key={`${entry.time}${entry.date}${entry.text}`}>
                            <Typography variant="h5">{entry.time}</Typography>
                            <Typography variant="caption" color="textSecondary">{entry.date}</Typography>
                            <Spacer verticalSize="10px" />
                            <Typography variant="body1">{entry.text}</Typography>
                        </Card>
                    ))
                ) : (
                        <>
                            <div>
                                <CircularProgress />
                            </div>
                            <Typography variant="caption" color="textSecondary">Loading...</Typography>
                        </>
                    )}
            </div>
        </div>
    );
};

export default BlogPage;
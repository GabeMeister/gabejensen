import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import {
    Link as RouterLink
} from 'react-router-dom';

import Card from '../Card';
import Spacer from '../Spacer';
import getJournalContent from '../../lib/dropbox';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles({
    contentWrapper: {
        width: '600px',
        margin: 'auto'
    },
    helpLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpLinkText: {
        marginLeft: '3px',
    },
    helpLinkIcon: {
        fontSize: '0.75rem',
        marginTop: '-1px'
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

    return (
        <div className={classes.contentWrapper}>
            <Spacer verticalSize="60px" />
            <Typography variant="h3">My random work thoughts:</Typography>
            <Spacer verticalSize="10px" />
            <Link
                target="_blank"
                rel="noopener"
                component={RouterLink}
                underline="none"
                to="/how-my-journal-works"
            >
                <div className={classes.helpLink}>
                    <HelpOutlineIcon className={classes.helpLinkIcon} />
                    <Typography className={classes.helpLinkText} variant="caption">
                        How does this work?
                    </Typography>
                </div>
            </Link>
            <Spacer verticalSize="60px" />
            <div>
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
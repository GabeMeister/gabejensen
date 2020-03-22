import React, { useEffect, useState } from 'react';

import getJournalContent from '../../lib/dropbox';

const BlogPage = () => {
    const [journalContent, setJournalContent] = useState([]);

    useEffect(() => {
        getJournalContent(data => {
            setJournalContent(data);
        });
    }, []);

    // TODO: add in link to https://www.dropbox.com/developers/documentation/http/documentation#files-download
    return (
        <div>
            <h1>Here's my random journal thoughts at work</h1>
            {!!journalContent.length && (
                journalContent.map(entry => (
                    <div key={entry.text}>{entry.text}</div>
                ))
            )}
        </div>
    );
};

export default BlogPage;
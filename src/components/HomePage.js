import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then(resp => resp.json())
            .then(resp => {
                setUrl(resp[0]);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to Gabe's Portfolio</h1>
            <span>{url}</span>
        </div>
    );
};

export default HomePage;
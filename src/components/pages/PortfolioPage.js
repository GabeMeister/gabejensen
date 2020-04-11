import React from 'react';
import Typography from '@material-ui/core/Typography';
import Spacer from '../Spacer';
import Card from '../Card';
import styled from 'styled-components';
import LaunchIcon from '@material-ui/icons/Launch';
import Link from '@material-ui/core/Link';

const PortfolioContentWrapper = styled.div`
    width: 400px;
    margin: auto;
`;

const PortfolioPage = () => {
    return (
        <>
            <Spacer verticalSize="40px" />
            <Typography variant="h2">Check out these sick sites</Typography>
            <Spacer verticalSize="40px" />
            <PortfolioContentWrapper>
                <Card>
                    <Link
                        target="_blank"
                        rel="noopener"
                        underline="none"
                        href="https://fastgif.now.sh/"
                    >
                        <LaunchIcon
                            style={{ fontSize: 15, marginRight: 3, transform: 'translate(0, 2px)' }}
                        /> Fast Gif
                    </Link>
                </Card>
                <Card>
                    <Link
                        target="_blank"
                        rel="noopener"
                        underline="none"
                        href="https://forabsolutelynoreason.netlify.com/"
                    >
                        <LaunchIcon
                            style={{ fontSize: 15, marginRight: 3, transform: 'translate(0, 2px)' }}
                        /> For Absolutely No Reason
                    </Link>
                </Card>
            </PortfolioContentWrapper >
        </>
    );
};

export default PortfolioPage;
import React from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    chartContainer: {
        margin: 'auto',
        width: '500px',
        transform: 'translateX(-60px)'
    }
});

const AboutPage = () => {
    const classes = useStyles();

    const data = [
        {
            subject: 'React', A: 120, B: 110, fullMark: 150,
        },
        {
            subject: 'PHP', A: 98, B: 130, fullMark: 150,
        },
        {
            subject: 'HTML', A: 86, B: 130, fullMark: 150,
        },
        {
            subject: 'CSS', A: 99, B: 100, fullMark: 150,
        },
        {
            subject: 'Git', A: 85, B: 90, fullMark: 150,
        },
        {
            subject: 'AWS', A: 65, B: 85, fullMark: 150,
        },
    ];

    return (
        <div>
            <h1>Here's a bit about me.</h1>
            <div className={classes.chartContainer}>
                <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </div>
        </div>
    );
};

export default AboutPage;
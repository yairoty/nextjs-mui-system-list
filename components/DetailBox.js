import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    detailsBox: {
        padding: '4px 8px',
        marginRight: '8px',
        borderRadius: '4px',
        minWidth: '160px'
    }
}));

export default function DetailBox({ title, value }) {
    const classes = useStyles();

    return (
        <Box bgcolor="info.main" color="info.contrastText" p={2} className={classes.detailsBox}>
            <Typography variant="body1" color="textSecondary" component="p">
                {title}
            </Typography>
            <Typography variant="body1" component="p">
                {value}
            </Typography>
        </Box>
    )
};

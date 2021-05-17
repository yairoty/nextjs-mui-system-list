import { server } from '../../../config';
import Link from 'next/link';
import Meta from '../../../components/Meta';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import LineChart from '../../../components/LineChart';
import { IconButton, Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  systemItemConatiaer: {
    flex: '1 1 auto',
    width: '720px'
  },
  IconButtonContainer: {
    paddingLeft: '5px'
  }
}));



const systemItem = ({ systemItem }) => {
  const classes = useStyles();

  return (
    <>
      <Meta title={systemItem.name} />
      <Grid container direction="column" spacing={4} className={classes.systemItemConatiaer}>
        <Grid item>
          <Grid container direction="row" justify="center" alignItems="center" spacing={4} wrap="nowrap">
            <Grid item xs={2} lg={2}>
              <Link href='/'>
                <IconButton >
                  <ArrowBackIosIcon className={classes.IconButtonContainer} />
                </IconButton >
              </Link>
            </Grid>
            <Grid item xs={10} lg={10}>
              <Typography variant="h4" component="div" color="primary">
                {systemItem.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <LineChart seriesList={systemItem.type && systemItem.type.data} />
        </Grid>
      </Grid>

    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/systems/${context.params.id}`);

  const systemItem = await res.json();

  return {
    props: {
      systemItem
    }
  }
}

export default systemItem;

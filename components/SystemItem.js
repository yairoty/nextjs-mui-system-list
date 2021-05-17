import Link from 'next/link';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import DetailBox from './DetailBox';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 'auto'
  },
  header: {
    transition: '.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    }
  },
  headerButton: {
    width: '100%',
    flex: 'auto 1 0'
  }
}));

const SystemItem = ({ systemItem }) => {
  const classes = useStyles();

  return (
    <Card raised className={classes.root}>
      <ButtonBase className={classes.headerButton}>
        <Link href={`/system/${systemItem.id}`}>
          <CardHeader
            className={classes.header}
            title={systemItem.name}
            subheader={systemItem.status}
          />
        </Link>
      </ButtonBase>
      <CardContent>
        <Grid container alignItems="center">
          <Grid item>
            <DetailBox title={'TYPE'} value={systemItem.type && systemItem.type.name} />
          </Grid>
          <Grid item>
            <DetailBox title={'SITE'} value={systemItem.site && systemItem.site.name} />
          </Grid>
        </Grid>



      </CardContent>
    </Card>
  )
};

export default SystemItem;

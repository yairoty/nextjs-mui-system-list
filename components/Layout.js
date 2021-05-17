import Nav from './Nav';
import Meta from './Meta';
import Header from './Header';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={4} alignContent="center" justify="center" direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  )
};

export default Layout;

import AppBar from '@material-ui/core/AppBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      color: '#2c4859',
      backgroundColor: '#d3e1e9',
      position: 'static',
    },
    toolBar: {
      margin: 'auto',
    },
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography align="center">
            © Copyright 2021 <br /> All rights reserved. Developed by Saad
            Salman
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;

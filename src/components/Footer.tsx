import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
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
          <Typography>
            © Copyright 2021. All rights reserved. Developed by Saad Salman
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;

import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import IBCIcon from '../../../icons/ibc-visualizer-icon.svg';

const RootNavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="IBC Visualizer Icon">
            <img src={IBCIcon} alt='IBC Visualizer Icon' className={classes.icon}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            IBC Visualizer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    background: '#202020',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    width: '50px',
    height: 'auto',
  }
}));

export default RootNavBar;
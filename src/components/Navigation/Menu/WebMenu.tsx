import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


const WebMenu = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <div className={classes.link}>
          <a href='/Docs'>Docs</a>
        </div>
        <div className={classes.link}>
          <a href='/Relayers'>Relayers</a>
        </div>
        <div className={classes.link}>
          <a href='/Table-View'>Table View</a>
        </div>
        <div className={classes.link}>
          <a href='/FAQ'>FAQ's</a>
        </div>
        <div className={classes.link}>
          <a href='/Repo'>Repos</a>
        </div>
      </div>
      <hr/>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  container: {
    
  },
  root: {
    // flexGrow: 1,
    display: 'flex', 
    flexFlow: 'row wrap', 
    justifyContent: 'center',
    margin: '20px',
  },
  link: {
    padding: '5px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    width: '40px',
    height: 'auto'
  }
}));

export default WebMenu;


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
          <a href='/Docs' className={classes.linkItems}>Docs</a>
        </div>
        <div className={classes.link}>
          <a href='/Relayers' className={classes.linkItems}>Relayers</a>
        </div>
        <div className={classes.link}>
          <a href='/Table-View'className={classes.linkItems} >Table View</a>
        </div>
        <div className={classes.link}>
          <a href='/FAQ' className={classes.linkItems}>FAQ's</a>
        </div>
        <div className={classes.link}>
          <a href='/Repo' className={classes.linkItems}>Repos</a>
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
    padding: '0px 30px',
  },
  linkItems: {
    textDecoration: 'none',
    color: '#000000',
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


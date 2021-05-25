import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DialpadIcon from '@material-ui/icons/Dialpad';

const ChainMenu = () => {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <Box className={classes.Chain}>
          <DialpadIcon className={classes.ChainIcon}/>
          <Typography variant="h5" className={classes.ChainName}>Gaia Hub</Typography>
        </Box>
      </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  Chain: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '10px 0px',
  },
  ChainIcon: {
    margin: '0px 5px'
  },
  ChainName: {
    margin: '0px 5px'
  },
}));

export default ChainMenu;
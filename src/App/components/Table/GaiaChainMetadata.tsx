import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '35%',
    margin: '0px 0px 0px 20px',
    backgroundColor: '#F7F8F9',
  },
  Card: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px'
  },
  header: {
    width: '60%',
  },
  closeIcon: {
    marginRight: '40px',
  },
}));



const GaiaChainMetadata = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.Card}>
        <div className={classes.header}>
          MetaData Content 
        </div>
        <IconButton className={classes.closeIcon} color="inherit" aria-label="close metadata">
          <CloseIcon/>
        </IconButton>
      </div>
    </div>
  );
}

export default GaiaChainMetadata; 
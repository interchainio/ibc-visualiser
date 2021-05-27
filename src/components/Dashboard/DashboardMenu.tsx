import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';

// Component 
import ChainMenu from '../Table/ChainMenu';
import GaiaChainTable from '../Table/GaiaChainTable'; 
import GaiaChainMetadata from '../Table/GaiaChainMetadata';

function TabPanel(props: any) {
  const classes = useStyles();
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.Box}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


function ariaControlsIndexValue(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const DashboardMenu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  // TODO: handleChange currently disabled handleChange to reflect action 
  // const handleChange = (event: any, newValue: any) => {
  //   setValue(newValue);
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          className={classes.Tabs}
          value={value}
          // onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Docs" {...ariaControlsIndexValue(0)} />
          <Tab label="Relayers" {...ariaControlsIndexValue(1)} />
          <Tab label="TableView" {...ariaControlsIndexValue(2)} />
          <Tab label="FAQs" {...ariaControlsIndexValue(3)} />
          <Tab label="Repos" {...ariaControlsIndexValue(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Docs
      </TabPanel>
      <TabPanel value={value} index={1}>
        Relayers
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ChainMenu/>
        <Card className={classes.Card}>
          <GaiaChainTable/>
          <GaiaChainMetadata/>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={3}>
        FAQs
      </TabPanel>
      <TabPanel value={value} index={4}>
        Repos
      </TabPanel>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#F5F8FA',
  },
  Box: {
    padding: '20px',
  },
  Card: {
    padding: '50px 20px 20px 20px',
    display: 'flex',
    flex: 1,
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
  Tabs: {
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
}));

export default DashboardMenu;
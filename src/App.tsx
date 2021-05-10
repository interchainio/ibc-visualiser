import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

// Components 
import RootNavBar from './components/Navigation/RootNav/RootNavBar'
import WebMenu from './components/Navigation/Menu/WebMenu'

const App = () => {
  const classes = useStyles(); 

  return (
    <Router>
      <div className={classes.root}>
        <RootNavBar/>
        <WebMenu/>
        {/* Switch : Body Nav */}
        <Switch>
          {/* <Route exact path='/' component={() => <WelcomeToIBCViz/>}/> */}
        </Switch>
      </div>
    </Router>

  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
  },
}));

export default App;

import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Components 
import Dashboard from './components/Dashboard/Dashboard';
import RootNavBar from './components/Navigation/RootNav/RootNavBar';
import WebMenu from './components/Navigation/Menu/WebMenu';

const App = () => {

  const orgName = 'ibc'
  const chainName = 'gaia'

  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* <Route exact path='/' component={() => <WelcomeToIBCViz/>}/> */}
          {/* switch path to: path={`/${orgName}/${chainName}`} */}
          <Route exact path='/' component={() => <Dashboard/>}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ClientProvider } from '../contexts/ClientContext'; 


// Components 
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {

  // const orgName = 'ibc'
  // const chainName = 'gaia'

  return (
    <ClientProvider>
      <Router>
        <div className='App'>
          <Switch>
            {/* <Route exact path='/' component={() => <WelcomeToIBCViz/>}/> */}
            {/* switch path to: path={`/${orgName}/${chainName}`} */}
            <Route exact path='/' component={() => <Dashboard/>}/>
          </Switch>
        </div>
      </Router>
    </ClientProvider>
  );
}

export default App;

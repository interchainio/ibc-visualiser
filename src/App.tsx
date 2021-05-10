import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

// Components 
import RootNavBar from './components/Navigation/RootNav/RootNavBar'

const App = () => {
  return (
    <Router>
      <div className="App">
        <RootNavBar/>
        {/* Switch : Body Nav */}
        <Switch>
          {/* <Route exact path='/' component={() => <WelcomeToIBCViz/>}/> */}
        </Switch>
      </div>
    </Router>

  );
}

export default App;

import * as React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

// Components 
import RootNavBar from './components/Navigation/RootNav/RootNavBar'
import WebMenu from './components/Navigation/Menu/WebMenu'

const App = () => {
  return (
    <Router>
      <div className="App">
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

export default App;

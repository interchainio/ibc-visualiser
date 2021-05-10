import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        {/* Root Nav */}
        {/* Switch : Body Nav */}
        <Switch>
          {/* <Route exact path='/' component={() => <WelcomeToIBCViz/>}/> */}
        </Switch>
      </div>
    </Router>

  );
}

export default App;

import * as React from 'react';

// Components 
import RootNavBar from '../Navigation/RootNav/RootNavBar';
import WebMenu from '../Navigation/Menu/WebMenu';

const Dashboard = () => {

  return (
      <div className='Dashboard'>
        <RootNavBar/>
        <WebMenu/>
      </div>
  );
}

export default Dashboard;
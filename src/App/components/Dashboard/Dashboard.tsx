import * as React from 'react';

// Components 
import RootNavBar from '../Navigation/RootNav/RootNavBar';
import DashboardMenu from './DashboardMenu'; 

const Dashboard = () => {

  return (
      <div className='Dashboard'>
        <RootNavBar/>
        <DashboardMenu/>
      </div>
  );
}

export default Dashboard;
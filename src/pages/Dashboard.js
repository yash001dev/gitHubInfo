import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import Card from '../components/Card';
const Dashboard = () => {
  return (
    <main>
      {/* <Navbar></Navbar> */}
      {/* <Search /> */}
      <Info />
      <User />
      
      {/* <Repos /> */}
    </main>
  );
};

export default Dashboard;

import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { StylesProvider } from "@material-ui/styles";
import './App.css'


function NavMain(props) {
  return (
    <StylesProvider injectFirst>
    <BottomNavigation value="Test" showLabels className="nav">
      <BottomNavigationAction label="Home" className='navitem'/>
      <BottomNavigationAction label="About" className='navitem'/>
      <BottomNavigationAction label="Skills" className='navitem'/>
      <BottomNavigationAction label="Projects" className='navitem'/>
      <BottomNavigationAction label="Contact" className='navitem'/>
    </BottomNavigation>
    </StylesProvider>
  )
}

export default NavMain;

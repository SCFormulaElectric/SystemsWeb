import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Typography } from './Typography.tsx';

//icons
import HomeIcon from '../../icons/home.js'
import logo from '../../icons/logo.webp'

import './sidebar.css'

//import icons from icons folder 
//https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx
//cant import the css outside of src
//might have to manually copy the css to src
//import '../../node_modules/react-pro-sidebar/dist/css/styles.css';
//import 'react-pro-sidebar/dist/css/styles.css';

function Sidebar1() {
  return (
    <div>
      <Sidebar>
      <img src={logo} className='icon-fit'/>
      <Typography
        variant="body2"
        fontWeight={600}
        className='small-title'
      >
        General
      </Typography>
      <Menu iconShape="square">

        {/*HOME*/}
        <SubMenu
          label = "Home"
          icon = {<HomeIcon/>}
          className='sidebar-item'
        >
        </SubMenu>

        {/*ONBOARDING*/}
        <SubMenu 
          className='sidebar-item'
          title="Components"
          icon = {<HomeIcon/>}
          label = "Onboarding"
        >
          <MenuItem>To Do</MenuItem>
          <MenuItem>Github</MenuItem>
          <MenuItem>Google Drive</MenuItem>
          <MenuItem>Github</MenuItem>
        </SubMenu>

        {/*TEAM*/}
        <SubMenu
          title = "Team"
          label = "Team"
          className='sidebar-item'
          icon = {<HomeIcon/>}
        >
          <MenuItem>Tytionex</MenuItem>
          <MenuItem>Contact</MenuItem>
        </SubMenu>

        {/*RESOURCE SUBTITLE*/}
        <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}></div>
        <Typography
          variant="body2"
          fontWeight={600}
          className='small-title'
        >
          Resources
        </Typography>

        {/*CALENDAR*/}
        <MenuItem
          icon = {<HomeIcon/>}
        >
          Calendar
        </MenuItem>

        {/*MISC SUBTITLE*/}
        <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}></div>
        <Typography
          variant="body2"
          fontWeight={600}
          className='small-title'
        >
          Misc
        </Typography>
        <MenuItem
          icon = {<HomeIcon/>}
        >
          Random
        </MenuItem>
      </Menu>
    </Sidebar>
    </div>
    
  );
}

export default Sidebar1;

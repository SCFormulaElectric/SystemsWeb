import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Typography } from './Typography.tsx';


//icons
import HomeIcon from '../../icons/home.js'
import logo from '../../icons/logo.webp'

import './sidebar.css'
import { Link } from 'react-router-dom';

//import icons from icons folder 
//https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx
//cant import the css outside of src
//might have to manually copy the css to src
//import '../../node_modules/react-pro-sidebar/dist/css/styles.css';
//import 'react-pro-sidebar/dist/css/styles.css';

function Sidebar1() {
  return (
    <div className='my_sidebar'>
      <Sidebar 
        rootStyles={{
           
            backgroundColor: '#00000',
            height: '100vh'
          
        }}
      >
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
        <MenuItem
          label = "Home"
          icon = {<HomeIcon/>}
          className='sidebar-item'
        >
          <Link to = "/" className='link-text'>Home</Link>
        </MenuItem>

        {/*ONBOARDING*/}
        <SubMenu 
          className='sidebar-item'
          title="Components"
          icon = {<HomeIcon/>}
          label = "Onboarding"
        >
          <MenuItem>
            <Link to = "/onboarding" className='link-text'>Get Started</Link>
          </MenuItem>
          <MenuItem>
            <Link to = "/" className='link-text'>Home</Link>
          </MenuItem>
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
          <MenuItem>
            <Link to = "/team" className='link-text'>About</Link>
          </MenuItem>
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
          className='sidebar-item'
          icon = {<HomeIcon/>}
        >
          <Link to = "/calendar" className='link-text'>Calendar</Link>
        </MenuItem>

        <MenuItem
          className='sidebar-item'
          icon = {<HomeIcon/>}
        >
          <Link to = "/github" className='link-text'>Github</Link>
        </MenuItem>

        <MenuItem
          className='sidebar-item'
          icon = {<HomeIcon/>}
        >
          <Link to = "/google_drive" className='link-text'>Google Drive</Link>
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
          className='sidebar-item'
        >
          <Link to = "/idk" className='link-text'>Idk</Link>
        </MenuItem>
        <MenuItem
          icon = {<HomeIcon/>}
          className='sidebar-item'
        >
          <Link to = "/admin" className='link-text'>Admin Login</Link>
        </MenuItem>
      </Menu>
    </Sidebar>
    </div>
    
  );
}

export default Sidebar1;

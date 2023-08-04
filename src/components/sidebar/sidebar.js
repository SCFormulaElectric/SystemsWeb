import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

//icons
import HomeIcon from '../../icons/home.js'
//import icons from icons folder 
//https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx
//cant import the css outside of src
//might have to manually copy the css to src
//import '../../node_modules/react-pro-sidebar/dist/css/styles.css';
//import 'react-pro-sidebar/dist/css/styles.css';

function Sidebar1() {
  return (
    <Sidebar>
      <Menu iconShape="square">
        <MenuItem
        icon = {<HomeIcon/>}
        >Home</MenuItem>
            <SubMenu 
                title="Components"
                icon = {<HomeIcon/>}
                label = "Onboarding"
                
            >
                <MenuItem>To Do</MenuItem>
                <MenuItem>Github</MenuItem>
                <MenuItem>Google Drive</MenuItem>
                <MenuItem>Github</MenuItem>
            </SubMenu>
            <SubMenu
                title = "Team"
                label = "Team"
            >
                <MenuItem>Tytionex</MenuItem>
                <MenuItem>Contact</MenuItem>

            </SubMenu>
      </Menu>
    </Sidebar>
  );
}

export default Sidebar1;

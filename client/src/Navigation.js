import React from "react";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Nav = () => {
  return (
    <div>
      <AppBar position="static" className="nav">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon className="burger" />
          </IconButton>
          <img src="images/logo_sumo.png" alt="logo sumo" className="logo" />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav
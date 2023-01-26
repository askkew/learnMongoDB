import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './Navbarelements';
import { Typography, IconButton } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <CameraAltIcon fontSize='large' style={{color:'rgb(27, 183, 110)'}} />
          ImageShare
        </NavLink>
        <Bars />
        <NavBtn>
          <NavBtnLink style={{backgroundColor: "rgb(27, 183, 110)", width: '150px', display: 'flex', justifyContent: 'center'}} to='/upload'> <AddToPhotosIcon />Upload</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink style={{backgroundColor: "rgb(27, 183, 110)"}} to='/signin'>Sign-in / Sign-up</NavBtnLink>
        </NavBtn>
      </Nav>

    </>
  );
};

export default Navbar;
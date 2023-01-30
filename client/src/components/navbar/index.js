import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './Navbarelements';
import { Typography, IconButton, styled, Card, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, Input, InputLabel, InputAdornment, FormHelperText, CardActions, CardContent, Button, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

const Signinbox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const Accountmanager = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
})

const Navbar = () => {
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);

  const handleClickOpen = () => {
    setLoginOpen(true);
  };

  const handleClose = () => {
    setLoginOpen(false);
  };

  const handleCreateClickOpen = () => {
    setCreateAccountOpen(true);
  };

  const handleCreateClose = () => {
    setCreateAccountOpen(false);
  };

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <CameraAltIcon fontSize='large' style={{color:'rgb(27, 183, 110)'}} />
          ImageShare
        </NavLink>
        <Bars />
        <NavBtn>
          <NavBtnLink style={{backgroundColor: "rgb(27, 183, 110)", width: '150px', display: 'flex', justifyContent: 'center'}}> <AddToPhotosIcon />Upload</NavBtnLink>
        </NavBtn>
        <Accountmanager>
          <NavBtn>
            <Button style={{backgroundColor: "rgb(27, 183, 110)", color: "white"}} variant="outlined" onClick={handleClickOpen}>
              Sign-in
            </Button>
            <Dialog
              open={loginOpen}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Login?"}
              </DialogTitle>
              <DialogActions>
              <Signinbox>
                <TextField
                  size="large"
                  id="input-with-icon-textfield"
                  variant="standard"
                  label="Username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  size="large"
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  sx={{marginTop: 2}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button size="large" variant="contained" sx={{marginTop: 2, backgroundColor: "rgb(27, 183, 110)"}}>Login</Button>
                <Button size="large" href="/signup" sx={{marginTop: 2, color: "rgb(27, 183, 110)"}}>Sign up/Create an account</Button>
              </Signinbox>
              </DialogActions>
            </Dialog>
          </NavBtn>
          <NavBtn>
            <Button style={{backgroundColor: "rgb(27, 183, 110)", color: "white"}} variant="outlined" onClick={handleCreateClickOpen}>
              Sign-up
            </Button>
            <Dialog
              open={createAccountOpen}
              onClose={handleCreateClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Create Accont?"}
              </DialogTitle>
              <DialogActions>
              <Signinbox>
                <TextField
                  size="large"
                  id="input-with-icon-textfield"
                  variant="standard"
                  label="Username"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  size="large"
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                  sx={{marginTop: 2}}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                size="large"
                id="filled-password-input"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                sx={{marginTop: 2}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button size="large" variant="contained" sx={{marginTop: 2, backgroundColor: "rgb(27, 183, 110)"}}>Login</Button>
              <Button size="large" href="/signup" sx={{marginTop: 2, color: "rgb(27, 183, 110)"}}>Sign up/Create an account</Button>
              </Signinbox>
              </DialogActions>
            </Dialog>
          </NavBtn>
        </Accountmanager>
      </Nav>

    </>
  );
};

export default Navbar;
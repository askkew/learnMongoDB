import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './Navbarelements';
import { Typography, IconButton, styled, Card, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, Input, InputLabel, InputAdornment, FormHelperText, CardActions, CardContent, Button, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FileUploadIcon from '@mui/icons-material/FileUpload';


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

const Imagepreview = styled(DialogActions)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const Navbar = () => {
  const [uploadOpen, setUploadOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);
  const [file, setFile] = React.useState(null);

  const handleUploadOpen = () => {
    setUploadOpen(true);
  };

  const handleUploadClose = () => {
    setUploadOpen(false);
  };

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

  const handleChange = (event) => {
    if (event.target.files[0].type.startsWith('image/')) {
      setFile(event.target.files[0]);
    } else {
      alert('Invalid file type. Please select a photo.');
    }
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
          <Button onClick={handleUploadOpen} style={{backgroundColor: "rgb(27, 183, 110)", width: '150px', display: 'flex', justifyContent: 'center'}}> <AddToPhotosIcon />Upload</Button>
          <Dialog
            open={uploadOpen}
            onClose={handleUploadClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Choose an image to upload"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Must be a JPEG, PNG, or GIF file
              </DialogContentText>
            </DialogContent>
            <Imagepreview sx={{}}>
              <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                sx={{marginBottom: 2, backgroundColor: "rgb(174, 216, 234)"}}
                variant="contained"
                component="span"
                startIcon={<DriveFolderUploadIcon />}
                onChange={handleChange}
                >
                  Choose file
                </Button>
              </label>
              {file && <p>{file.name}</p>}
              <Card sx={{width: 480, height: 320, backgroundColor: "#1A2027"}}>

              </Card>
              <Button
              sx={{marginTop: 2}}
              variant="contained"
              color="secondary"
              component="span"
              startIcon={<FileUploadIcon />}
              >
                Upload
              </Button>
            </Imagepreview>
          </Dialog>
        </NavBtn>
        <Accountmanager>
          <NavBtn>
            <Button onClick={handleClickOpen} style={{backgroundColor: "rgb(27, 183, 110)", display: 'flex', justifyContent: 'center'}}>Sign in</Button>
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
            <Button onClick={handleCreateClickOpen} style={{backgroundColor: "rgb(27, 183, 110)", display: 'flex', justifyContent: 'center'}}>Sign up</Button>
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
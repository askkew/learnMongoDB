import React, { useEffect, useState, useRef} from 'react'
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
  margin: 35,
})

const Alerttext = styled(Typography)({
  color: "rgb(27, 183, 110)",
  marginBottom: "25px",
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

const Choosefilebutton = styled(Button)({
  marginBottom: '0px',
  marginTop: '45px',
  color: "#fff",
  "&:hover": {
      transition: "all 0.2s ease-in-out",
      color: "rgb(141,145,154)",
      background: "transparent",
  }
});

const Submitfilebutton = styled(Button)({
  marginBottom: '10px',
  marginTop: '10px',
  backgroundColor: "rgb(27, 183, 110)", width: '150px', display: 'flex', justifyContent: 'center',
  color: "white",
  "&:hover": {
      transition: "all 0.2s ease-in-out",
      color: "rgb(27, 183, 110)",
      background: "transparent",
  }
});

// rgb(23,25,31)

const Imagepreviewcard = styled(Card)({
  width: '550px',
  height: '350px',
  margin: '50px',
  boxShadow: "0 0 5px black",
  backgroundColor: "rgb(60,66,75)",
})

const Navbar = () => {
  const [uploadOpen, setUploadOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);
  const fileInput = useRef(null);
  const [fileName, setFileName] = React.useState("");
  const [uploadStatus, setUploadStatus] = React.useState("");
  const [image, setImage] = useState(null);

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

  useEffect(() => {
    fileInput.current = document.querySelector("input[type='file']");
  }, []);
  
  const handleStageImage = (event) => {
    setImage(event.target.files[0])
    setFileName(fileInput.current.files[0].name);
    console.log(image);
  }

  const handleImageUpload = async (e) => {
    // console.log(image);
    const formData = new FormData();
    formData.append("image", image);

    try {
        const res = await axios.post("http://localhost:5000/imageupload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        console.log(res);
        setUploadStatus("File uploaded successfully");
    } catch (err) {
        console.error(err);
        setUploadStatus("File upload failed");
    }
    setFileName(fileInput.current.files[0].name);
  };

  const handleChooseFile = () => {
    fileInput.current.click();
  };

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <CameraAltIcon fontSize='large' style={{color:'rgb(27, 183, 110)'}} />
          <strong>ImageShare</strong>
        </NavLink>
        <Bars />
        <NavBtn>
          <Button onClick={handleUploadOpen} style={{backgroundColor: "rgb(27, 183, 110)", width: '150px', display: 'flex', justifyContent: 'center'}}> <AddToPhotosIcon /><strong>Upload</strong></Button>
          <Dialog
            open={uploadOpen}
            onClose={handleUploadClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Imagepreview>
              <Choosefilebutton startIcon={<FileUploadIcon />} onClick={handleChooseFile}>
                Choose Photo
              </Choosefilebutton>
              <Imagepreviewcard>
                {fileName && <div><strong>Selected file: {fileName}</strong></div>}
              </Imagepreviewcard>
              <Submitfilebutton startIcon={<DriveFolderUploadIcon />} onClick={handleImageUpload}>
                Upload
              </Submitfilebutton>
              <input type="file" ref={fileInput} onChange={handleStageImage} style={{ display: "none" }}/>
              <button type="submit" onClick={handleImageUpload} style={{ display: "none" }}>Submit</button>
              {uploadStatus && <Alerttext><strong>{uploadStatus}</strong></Alerttext>}
            </Imagepreview>
          </Dialog>
        </NavBtn>
        <Accountmanager>
          <NavBtn>
            <Button onClick={handleClickOpen} style={{backgroundColor: "rgb(27, 183, 110)", display: 'flex', justifyContent: 'center'}}><strong>Sign in</strong></Button>
            <Dialog
              open={loginOpen}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              PaperProps={{
                style: { borderRadius: 15 }
              }}
            >
              
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
                <Button size="large" onClick={handleCreateClickOpen} sx={{marginTop: 2, color: "rgb(27, 183, 110)"}}>Sign up/Create an account</Button>
              </Signinbox>
              </DialogActions>
            </Dialog>
          </NavBtn>
          <NavBtn>
            <Button onClick={handleCreateClickOpen} style={{backgroundColor: "rgb(27, 183, 110)", display: 'flex', justifyContent: 'center'}}><strong>Sign up</strong></Button>
            <Dialog
              open={createAccountOpen}
              onClose={handleCreateClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              PaperProps={{
                style: { borderRadius: 15 }
              }}
            >
              
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
              <Button size="large" variant="contained" sx={{marginTop: 2, backgroundColor: "rgb(27, 183, 110)"}}>Create account</Button>
              <Button size="large" onClick={handleClickOpen} sx={{marginTop: 2, color: "rgb(27, 183, 110)"}}>Sign in</Button>
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


            // <Imagepreview>

            // </Imagepreview>


{/* <input
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
              // onClick={handleImageUpload}
              variant="contained"
              color="secondary"
              component="span"
              startIcon={<FileUploadIcon />}
              >
                Upload
              </Button> */}
              {/* <button onClick={handleChooseFile}>Choose Photo</button>
              <button onClick={handleImageUpload}>Upload</button>
              <input type="file" ref={fileInput} style={{ display: "none" }}/>
              {fileName && <div><strong>Selected file: {fileName}</strong></div>}
              {uploadStatus && <div><strong>{uploadStatus}</strong></div>} */}
            {/* <form
              onClick={() => document.querySelector(".input-field").click()}
              >
                <input type="file" accept='image/*' className='input-field' hidden 
                onChange={({ target: {files}}) => {
                  files[0] && setFileName(files[0].name)
                  if(files){
                    setImage(URL.createObjectURL(files[0]))
                  }
                }}
                />

                {image ?
                <div>
                  <img src={image} width={450} height={250} alt={fileName} />
                  <Submitfilebutton startIcon={<DriveFolderUploadIcon />} onClick={handleImageUpload}>
                  Upload
                  </Submitfilebutton>
                </div>
                : 
                <>
                <DriveFolderUploadIcon color='#1475cf' size={60} />
                <p>Browse Files to upload</p>
                </>
              }

              </form> */}
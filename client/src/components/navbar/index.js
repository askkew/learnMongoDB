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
  backgroundColor: "rgb(44,47,52)",
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
            <NavBtnLink style={{backgroundColor: "rgb(27, 183, 110)", display: 'flex', justifyContent: 'center'}} to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink style={{backgroundColor: "rgb(27, 183, 110)", display: 'flex', justifyContent: 'center'}} to='/signup'>Sign Up</NavBtnLink>
          </NavBtn>
        </Accountmanager>
      </Nav>

    </>
  );
};

export default Navbar;
import React, { useEffect, useState, useRef} from 'react'
import axios from 'axios';
import { InputBase, Typography, IconButton, alpha, styled, Card, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, Input, InputLabel, InputAdornment, FormHelperText, CardActions, CardContent, Button, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

const Newtextfield = styled(InputBase)({
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        
        borderColor: "white",
      },
})
const Signin = () => {
  return (
    <div container justifyContent="center" sx={{paddingTop: 2}}>
        <Card sx={{ margin: '0 auto', backgroundColor: "rgb(44,47,52)", width: 500, height: 500, display: 'flex', justifyContent: 'center', marginTop: 35, borderRadius: 3}}>
            <BootstrapInput defaultValue="Username"/>
            <Newtextfield />
        </Card>
    </div>
  )
}

export default Signin
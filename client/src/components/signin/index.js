import React, { useEffect, useState} from 'react'
import { styled, Card, Dialog, DialogTitle, DialogActions, Input, InputLabel, InputAdornment, FormHelperText, CardActions, CardContent, Button, Typography, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import axios from 'axios';

const Signinbox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const Signin = () => {
  return (
    <div>
      <Grid container justifyContent="center" sx={{paddingTop: 20}}>
        <Card sx={{width: 500, height: 500, display: 'flex', justifyContent: 'center', paddingBottom: 2}}>
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
        </Card>
      </Grid>
    </div>
  )
}

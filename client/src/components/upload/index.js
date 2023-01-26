import React, { useEffect, useState} from 'react'
import { styled, Card, CardActions, CardContent, Button, Typography, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Enterdata = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
})
// function createData(name, description, quantity) {
//   return { name, description, quantity };
// }

// const rows = [
//   createData('Luke', 'Overbey', 6.0),
//   createData('Calvin', 'Chui', 9.0),
//   createData('Lukey', 'Ryktarsyk', 16.0),
//   createData('Kenny', 'Phan', 3.7),
//   createData('Danny', 'Nguyen', 16.0),
// ];

export const Upload = () => {

  const [item, setItem] = useState([]);
  const [backendData, setBackendData] = useState([{}])
  
  // useEffect(() => {
  //   axios.get('/items')
  // }

  // useEffect(() => {
  //   fetch("/api/").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])

  // console.log(backendData)

  return (
    <Grid container justifyContent="center" sx={{paddingTop: 2}}>
        <Card sx={{width: 700, height: 900, display: 'flex', justifyContent: 'center', paddingBottom: 2}}>
            <CardContent>
              <Enterdata>
                <TextField sx={{paddingBottom: 1}} id="outlined-basic" label="Name" variant="outlined" />
                <TextField sx={{paddingBottom: 1}} id="outlined-basic" label="Description" variant="outlined" />
                <TextField sx={{paddingBottom: 1}} id="outlined-basic" label="Quantity" variant="outlined" />
                <Button variant="contained">Submit</Button>
              </Enterdata>
              <Divider sx={{paddingBottom: 2}} />
              <Typography variant="outlined">
                <ul>
                  {/* {backendData.users?.map(users => (
                    <li>{backendData.users}</li>
                  )
                  )} */}
                </ul>
                {/* {backendData.users}
                {backendData.map((users) => {
                  return (
                    <p>{backendData.users}</p>
                  )
                })} */}
                {/* {(typeof backendData === 'undefined') ? (
                  <p>Loading...</p>
                ) : (
                  
                  backendData.users.map((user, i) => (
                    <p key={i}>{user}</p>
                  ))
                  
                )} */}
              </Typography>
            </CardContent>
        </Card>
      </Grid>
  )
}



{/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell align="right">Description</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.description}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer> */}
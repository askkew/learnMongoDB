import React, { useEffect, useState} from 'react'
import { styled, Card, Input, InputLabel, FormHelperText, CardActions, CardContent, Button, Typography, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';


const Enterdata = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
})


export const Upload = () => {

  const [item, setItem] = useState([]);

  const [products, setProducts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/read")
      setProducts(data);
      console.log(data);
    }
    fetchData()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const DBinfo = new FormData(event.currentTarget);
    console.log({
      name: DBinfo.get("name"),
      description: DBinfo.get("description"),
      quantity: DBinfo.get("quantity")
    });
  };

  return (
    <Grid container justifyContent="center" sx={{paddingTop: 2}}>
        <Card sx={{width: 700, height: 900, display: 'flex', justifyContent: 'center', paddingBottom: 2}}>
            <CardContent>
              <Enterdata
              component="form"
              onSubmit={handleSubmit}
              noValidate
              >
                <TextField
                  sx={{paddingBottom: 1}}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  sx={{paddingBottom: 1}}
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="description"
                  id="description"
                  autoComplete="description"
                />
                <TextField
                  sx={{paddingBottom: 1}}
                  required
                  fullWidth
                  name="quantity"
                  label="Quantity"
                  type="number"
                  id="quantity"
                  autoComplete="quantity"
                />
                <Button type="submit" variant="contained">Submit</Button>
                {/* <TextField sx={{paddingBottom: 1}} id="outlined-basic" label="Name" variant="outlined" value={data.name} />
                <TextField sx={{paddingBottom: 1}} id="outlined-basic" label="Description" variant="outlined" value={data.description}/>
                <TextField sx={{paddingBottom: 1}} id="outlined-basic" label="Quantity" variant="outlined" value={data.quantity}/> */}
              </Enterdata>
              <Divider sx={{paddingBottom: 2}} />
              <Typography variant="outlined">
                {
                  products && products?.data.map((product) => (
                    <h1>{product.name}</h1>
                  ))
                }
              </Typography>
            </CardContent>
        </Card>
      </Grid>
  )
}

  
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
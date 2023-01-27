import React, { useEffect, useState} from 'react'
import { styled, Card, Input, InputLabel, FormHelperText, CardActions, CardContent, Button, Typography, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import axios from 'axios';


const Enterdata = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
})

const UpdateData = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
})

const Datafield = styled(Typography)({
  margin: 4
})

const DeleteButton = styled(Button)({
  width: "100px",
})

const UpdateItem = styled(Button)({
  width: "100px",
})

const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  
})

const Item = styled(Paper)({
  backgroundColor: '#1A2027',
  padding: 2,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
});

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
    const frontData = {
      name: DBinfo.get("name"),
      description: DBinfo.get("description"),
      quantity: DBinfo.get("quantity")
    }
    axios.post('http://localhost:5000/insert', frontData)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
    console.log(frontData);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const objectID = event.data._id
    axios.delete('http://localhost:5000/endpoint', {objectID})
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  // const handleDelete = (event) => {
  //   event.preventDefault();
  //   const objectID = event.data._id
  //   axios.delete('http://localhost:5000/delete', {objectID})
  //     .then(response => console.log(response.data))
  //     .catch(error => console.log(error));
  // }

  return (
    <Grid container justifyContent="center" sx={{paddingTop: 2}}>
        <Card sx={{width: 700, display: 'flex', justifyContent: 'center', paddingBottom: 2}}>
            <CardContent>
              <Enterdata
              component="form"
              onSubmit={handleSubmit}
              noValidate
              >
                <TextField
                  sx={{margin: 1}}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  sx={{margin: 1}}
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="description"
                  id="description"
                  autoComplete="description"
                />
                <TextField
                  sx={{margin: 1}}
                  required
                  fullWidth
                  name="quantity"
                  label="Quantity"
                  type="number"
                  id="quantity"
                  autoComplete="quantity"
                />
                <Button color="secondary" type="submit" variant="contained">Submit</Button>
              </Enterdata>
              <Divider sx={{paddingBottom: 2}} />
              <Box sx={{ flexGrow: 1, paddingTop: 2}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                  products && products?.data.map((product) => (
                    <Grid item xs={2} sm={4} md={4}>
                      <Item>
                        <UpdateData
                        component="form"
                        onSubmit={handleUpdate}
                        noValidate
                        >
                          <Datafield>Name = {product.name}</Datafield>
                          <TextField
                            sx={{margin: 1}}
                            required
                            name="test"
                            label="test"
                            type="test"
                            id="test"
                            autoComplete="test"
                          />
                          <Datafield>Des. = {product.description}</Datafield>
                          <TextField
                            sx={{margin: 1}}
                            required
                            name="test"
                            label="test"
                            type="test"
                            id="test"
                            autoComplete="test"
                          />
                          <Datafield>Quantity = {product.quantity}</Datafield>
                          <TextField
                            sx={{margin: 1}}
                            required
                            name="test"
                            label="test"
                            type="test"
                            id="test"
                            autoComplete="test"
                          />
                          <UpdateItem color="secondary" variant="contained" type="submit" startIcon={<UpgradeIcon />}>Update</UpdateItem>
                        </UpdateData>
                        <ButtonBox>
                          <DeleteButton color="primary" variant="contained" startIcon={<DeleteIcon />}>Delete</DeleteButton>
                        </ButtonBox>
                      </Item>
                    </Grid>
                  ))
                }
                </Grid>
              </Box>

            </CardContent>
        </Card>
      </Grid>
  )
}
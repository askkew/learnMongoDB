import React, { useEffect, useState} from 'react'
import { styled, Card, Dialog, DialogTitle, DialogActions, Input, InputLabel, FormHelperText, CardActions, CardContent, Button, Typography, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
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
})

const DeleteButton = styled(Button)({
  width: "100px",
})

const UpdateItem = styled(Button)({
  width: "100px",
})

const Datalabel = styled(Typography)({
  fontSize: 13,
  color: "grey",
})

const Item = styled(Paper)({
  backgroundColor: '#1A2027',
  padding: 15,
  width: 315,
  height: 510,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
});

export const Upload = () => {

  const [showTextFields, setShowTextFields] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [item, setItem] = useState([]);
  const [products, setProducts] = useState("");

  const fetchData = async () => {
    const data = await axios.get("http://localhost:5000/read")
    setProducts(data);
    console.log(data);
  }

  useEffect(() => {
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
      .then(response => {
        if (response.statusText === 'OK'){
          fetchData();
        }
      })
      .catch(error => console.log(error));
    console.log(frontData);
  };

  const handleDelete = (ID) => {
    const objectID = {ID: ID}
    axios.post('http://localhost:5000/delete', objectID)
      .then(response => {
        if (response.statusText === 'OK'){
          fetchData();
        }
      })
      .catch(error => console.log(error));
  }

  const handleUpdate = (event, _id) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updateFrontData = {
        $set: {
            name: formData.get("nameupdated"),
            description: formData.get("descriptionupdated"),
            quantity: formData.get("quantityupdated")
        }
    }
    axios.put(`http://localhost:5000/update?id=${_id}`, updateFrontData)
        .then(response => {
          if (response.statusText === 'OK'){
            fetchData();
          }
        })
        .catch(error => {
            console.error(error);
        });
  }

  const handleShowTextFields = () => {
    setShowTextFields(!showTextFields);
  }


  return (
    <Grid container justifyContent="center" sx={{paddingTop: 2}}>
        <Card sx={{width: 1000, display: 'flex', justifyContent: 'center', paddingBottom: 2}}>
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
                        <Datalabel>Name:</Datalabel>
                        <Datafield>{product.name}</Datafield>
                        <Datalabel>Description:</Datalabel>
                        <Datafield>{product.description}</Datafield>
                        <Datalabel>Quantity:</Datalabel>
                        <Datafield>{product.quantity}</Datafield>
                        <UpdateItem color="secondary" variant="contained" onClick={handleShowTextFields}>Update</UpdateItem>
                          { showTextFields && (
                              <UpdateData
                                  component="form"
                                  onSubmit={(e)=> handleUpdate(e, product._id)}
                                  noValidate
                              >
                                  <TextField
                                      sx={{margin: 1}}
                                      required
                                      name="nameupdated"
                                      label="Name"
                                      type="nameupdated"
                                      id="nameupdated"
                                      autoComplete="nameupdated"
                                  />
                                  <TextField
                                      sx={{margin: 1}}
                                      required
                                      name="descriptionupdated"
                                      label="Description"
                                      type="descriptionupdated"
                                      id="descriptionupdated"
                                      autoComplete="descriptionupdated"
                                  />
                                  <TextField
                                      sx={{margin: 1}}
                                      required
                                      name="quantityupdated"
                                      label="Quantity"
                                      type="quantityupdated"
                                      id="quantityupdated"
                                      autoComplete="quantityupdated"
                                  />
                                  <UpdateItem color="secondary" variant="contained" type="submit" startIcon={<UpgradeIcon />}>Submit</UpdateItem>
                              </UpdateData>
                          )}
                        <DeleteButton
                        onClick = {(() => handleDelete(product._id))} 
                        color="primary"
                        variant="contained"
                        type="submit"
                        startIcon={<DeleteIcon />}
                        >
                        Delete
                        </DeleteButton>
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




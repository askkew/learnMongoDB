import React, { useEffect, useState} from 'react'
import { styled, Card, Dialog, DialogTitle, DialogActions, Input, InputLabel, FormHelperText, CardActions, CardContent, Button, Typography, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
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

const UploadImageBl = styled(Paper)({
  backgroundColor: '#1A2027',
  padding: 15,
  width: 500,
  minHeight: 70,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
});

export const Home = () => {

  const [showTextFields, setShowTextFields] = useState(false);
  const [products, setProducts] = useState("");
  const [file, setFile] = useState(null);

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

  const handleChange = (event) => {
    if (event.target.files[0].type.startsWith('image/')) {
      setFile(event.target.files[0]);
    } else {
      alert('Invalid file type. Please select a photo.');
    }
  };

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
              {/* <Enterdata>
                <UploadImageBl>
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleChange}
                  />
                  <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="secondary"
                    component="span"
                    startIcon={<DriveFolderUploadIcon />}
                  >
                  Upload
                  </Button>
                  </label>
                  {file && <p>{file.name}</p>}
                {/* </UploadImageBl>
              </Enterdata> */}
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
                        sx={{backgroundColor: "#D83737"}}
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







//import React, { useEffect, useState} from 'react'
// import { styled, Card, Dialog, DialogTitle, DialogActions, Input, InputLabel, FormHelperText, CardActions, CardContent, Button, Typography, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// const Item = styled(Paper)({
//   backgroundColor: '#1A2027',
//   padding: 15,
//   marginTop: 8,
//   width: 250,
//   height: 250,
//   display: 'flex',
//   flexDirection: 'column',
//   textAlign: 'left',
// });

// export const Home = () => {
//   return (
//     <div>
//         <Grid container justifyContent="center" sx={{paddingTop: 2}}>
//           <Card sx={{width: 1000, display: 'flex', justifyContent: 'center', padding: 3}}>
//             <CardContent>
//               <Typography>
//                 Photos
//               </Typography>
//               <Divider sx={{paddingTop: 2}}></Divider>
//               <Box sx={{ flexGrow: 1, paddingTop: 2}}>
//                 <Grid sx={{justifyContent: 'space-around', paddingTop: 2}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                   <Item>
//                     <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
//                     specs
//                   </Item>
//                 </Grid>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//     </div>
//   )
// }
 
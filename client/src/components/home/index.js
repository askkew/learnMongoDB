import React, { useEffect, useState} from 'react'
import { styled, Card, CardMedia, Dialog, DialogTitle, DialogActions, Input, InputLabel, FormHelperText, CardActions, CardContent, Button, Typography, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';import DeleteIcon from '@mui/icons-material/Delete';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import axios from 'axios';
import Imagecard from '../imagecard';

const Imagecardcomponent = styled(Card)({
  marginTop: '10px',
  width: 300,
  minHeight: 300,
  boxShadow: "0 0 5px black",
  backgroundColor: "rgb(71,74,81)",
  textAlign: "center",
  position: "relative",
})

const Imageinfoarea = styled(CardContent)({
  height: 67.43,
  padding: "10px 15px 25px 25px",
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  bottom: "0px",
  width: "100%",
  marginBottom: "10px",
})

const Imagetitlearea = styled(Box)({
  display: "flex",
  justifyContent: "left",
  flexDirection: "row",
})

const Likeandsavebox = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  padding: 0,
})

const Interactbutton = styled(Button)({
  color: "rgb(141,145,154)",
  "&:hover": {
      transition: "all 0.2s ease-in-out",
      color: "#fff",
      background: "transparent",
  }
});

const Enterdata = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
})

export const Home = () => {
  const [images, setImages] = useState("");

  const fetchData = async () => {
    const data = await axios.get("http://localhost:5000/imageread")
    setImages(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const binaryData = images.data;
  // create a Blob from the binary data
  const blob = new Blob([binaryData], { type: 'image/jpeg' });
  // create an object URL from the Blob
  const imageUrl = URL.createObjectURL(blob);
//rgb(44,47,52)

  return (
    <Grid container justifyContent="center" sx={{paddingTop: 2}}>
        <Card sx={{backgroundColor: "rgb(46,48,53)", width: 1000, display: 'flex', justifyContent: 'center', paddingBottom: 2}}>
            <CardContent>
              <Box sx={{ flexGrow: 1, paddingTop: 2}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                  images && images?.data.map((image) => (
                    <Grid item xs={2} sm={4} md={4}>
                      <Imagecardcomponent>
                          <CardContent>
                            <img src={imageUrl} alt="Binary Data Image" />
                          </CardContent>
                          <Imageinfoarea>
                              <Imagetitlearea>
                                  <strong>{image._id}</strong>
                              </Imagetitlearea>
                              <Likeandsavebox>
                                  <Interactbutton startIcon={<FavoriteIcon />}>25</Interactbutton>
                                  <Interactbutton startIcon={<StarIcon />}>25</Interactbutton>
                              </Likeandsavebox>
                          </Imageinfoarea>
                      </Imagecardcomponent>
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
import React, { useEffect, useState} from 'react'
import { styled, Card, CardMedia, Dialog, DialogTitle, DialogActions, Input, InputLabel, FormHelperText, CardActions, CardContent, Button, Typography, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

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

const Imagecard = () => {
  return (
    <div>
        <Imagecardcomponent>
            
            <Imageinfoarea>
                <Imagetitlearea>
                    <strong>Title</strong>
                </Imagetitlearea>
                <Likeandsavebox>
                    <Interactbutton startIcon={<FavoriteIcon />}>25</Interactbutton>
                    <Interactbutton startIcon={<StarIcon />}>25</Interactbutton>
                </Likeandsavebox>
            </Imageinfoarea>
        </Imagecardcomponent>
    </div>
  )
}

//rgb(141,145,154)
//67.43
//300
export default Imagecard
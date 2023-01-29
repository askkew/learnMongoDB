import React, { useEffect, useState} from 'react'
import { styled, Card, Dialog, DialogTitle, DialogActions, Input, InputLabel, FormHelperText, CardActions, CardContent, Button, Typography, Box, Grid, TextField, Divider, FormControl, FormActions, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Item = styled(Paper)({
  backgroundColor: '#1A2027',
  padding: 15,
  marginTop: 8,
  width: 250,
  height: 250,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
});

export const Home = () => {
  return (
    <div>
        <Grid container justifyContent="center" sx={{paddingTop: 2}}>
          <Card sx={{width: 1000, display: 'flex', justifyContent: 'center', padding: 3}}>
            <CardContent>
              <Typography>
                Photos
              </Typography>
              <Divider sx={{paddingTop: 2}}></Divider>
              <Box sx={{ flexGrow: 1, paddingTop: 2}}>
                <Grid sx={{justifyContent: 'space-around', paddingTop: 2}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                  <Item>
                    <img src="https://cdn.dealeraccelerate.com/international/1/1035/46561/1920x1440/1999-nissan-skyline-gt-r-vspec"></img>
                    specs
                  </Item>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
    </div>
  )
}

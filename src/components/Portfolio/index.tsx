import React from "react";
import { Typography, Grid, Container, Card, Box } from "@mui/material";
import { StayPrimaryLandscape } from "@mui/icons-material";

export const Portfolio: React.FunctionComponent = () => {
  return (
    <div>
        <Container maxWidth={false} sx={{height: '400px', backgroundColor:'secondary.main', color: 'primary.main'}}>

        <Typography variant='h2'>Portfolio</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Box sx={{height: '200px', width: '200px', backgroundColor: 'primary.main'}}>Card 1</Box>
        </Grid>
        <Grid item>
        <Box sx={{height: '200px', width: '200px', backgroundColor: 'primary.main'}}>Card 2</Box>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
};

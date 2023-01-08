import React from "react";
import { Typography, Container, Button, Grid } from "@mui/material";

export const Experience: React.FunctionComponent = () => {
  return (
    <div>
        <Container maxWidth={false} sx={{height: '400px', backgroundColor:'primary.main', color: 'secondary.main'}}>
        <Typography variant='h2'>Work Experience</Typography>

      <p> Work experience here</p>
      </Container>
    </div>
  );
};

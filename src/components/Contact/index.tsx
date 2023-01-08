import React from "react";
import { Typography, Container, Button, Grid } from "@mui/material";

export const Contact: React.FunctionComponent = () => {
  return (
    <div>
        <Container maxWidth={false} sx={{height: '400px', backgroundColor:'secondary.main', color: 'primary.main'}}>
        <Typography variant='h2'>Contact</Typography>

      <p> Email form here</p>
      </Container>
    </div>
  );
};

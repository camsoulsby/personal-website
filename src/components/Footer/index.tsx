import React from "react";
import { Typography, Container, Button, Grid } from "@mui/material";

export const Footer: React.FunctionComponent = () => {
  return (
    <div>
        <Container maxWidth={false} sx={{backgroundColor:'primary.main', color: 'secondary.main'}}>
        <Typography variant='h2'>[footer]</Typography>
      </Container>
    </div>
  );
};

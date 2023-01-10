import React from "react";
import { Typography, Container, Button, Grid } from "@mui/material";

export const Footer: React.FunctionComponent = () => {
  return (
    <div>
        <Container maxWidth={false} sx={{height: '500px', backgroundColor:'primary.main', color: 'secondary.main'}}>
        <Typography variant='body1'>Cam Soulsby © 2023</Typography>
      </Container>
    </div>
  );
};

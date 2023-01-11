import React from "react";
import { Typography, Container, Button, Grid } from "@mui/material";

export const Contact: React.FunctionComponent = () => {
  return (
    <div>
        <Container maxWidth={false} sx={{backgroundColor:'secondary.main', color: 'primary.main'}}>
        <Container sx={{ paddingTop: "150px", paddingBottom: "200px" }}>
        <Typography variant="h2" align='center'>Contact Me</Typography>
     <p>email form here</p>
        </Container>
      </Container>
    </div>
  );
};

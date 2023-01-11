import React from "react";
import { Typography, Container, Button, Grid } from "@mui/material";

export const Experience: React.FunctionComponent = () => {
  return (
    <div>
        <Container maxWidth={false} sx={{backgroundColor:'primary.main', color: 'secondary.main'}}>
        <Container sx={{ paddingTop: "150px", paddingBottom: "200px" }}>
        <Typography variant="h2" align='center'>Work Experience</Typography>
     <p>table here</p>
        </Container>
      </Container>
    </div>
  );
};

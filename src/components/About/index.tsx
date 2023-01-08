import React from "react";
import { Typography, Container } from "@mui/material";

export const About: React.FunctionComponent = () => {
  return (
    <div>
      <Container maxWidth={false} sx={{ height: '400px', backgroundColor: "primary.main", color: "secondary.main" }}>
        <Typography variant="h2">About</Typography>
        <Typography variant="body1">Enter description here</Typography>
      </Container>
    </div>
  );
};

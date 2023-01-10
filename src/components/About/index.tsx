import React from "react";
import { Typography, Container, Box, Grid, Image } from "@mui/material";

export const About: React.FunctionComponent = () => {
  return (
    <div>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "primary.main",
          color: "secondary.main",
        }}
      >
        <Container sx={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
            <img src='./public/images/Cam.jpg' height={'450px'}/>
            </Grid>
            <Grid item xs={6}>
            <Box>
              <Typography variant="h2" align="center">
                About Me
              </Typography>

              <Typography
                variant="body1"
                sx={{ marginTop: "20px", fontSize: "20px" }}
              >
                I am an experienced operational leader and aspiring software
                developer. My focus is on identifying and implementing
                technological and managerial strategies to increase efficiency
                for businesses. I have developed and applied these skills in a
                variety of leadership roles, including 5 years managing lift
                operations at a The Remarkables ski resort, leading the NZSki
                customer service and call center team in Queenstown, and serving
                as Operations Lead for a fintech startup in the decentralized
                finance space.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginTop: "20px",
                  marginBottom: "50px",
                  fontSize: "20px",
                }}
              >
                I am currently open to full or part-time management or software development roles, either in Central Otago, New Zealand, 
                or based remotely. With my diverse experience and passion for
                technology and operational excellence, I am confident in my
                ability to make a meaningful contribution to any organization.
              </Typography>
            </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

import React from "react";
import { Typography, Container, Box, Grid} from "@mui/material";

export const About: React.FunctionComponent = () => {
  const paragraphFormat = {
    marginTop: "20px",
    sm: {marginLeft: '20px',
    marginRight: '20px'},
    xs: {marginLeft: '0px',
    marginRight: '0px'},
    fontSize: "20px",
    lineHeight: "1.2em",
    textAlign: "justify",
  };

  return (
    <div>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          
          backgroundColor: "primary.main",
          color: "secondary.main",
        }}
      >
        <Container sx={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <Grid container alignItems="center">
            <Grid item>
              {/* todo: convert the below to an MUI component and make responsive with sx prop */}
              <img src="../images/Cam.jpg" height={'200px'} />
            </Grid>
            <Grid item>
              <Box>
                <Typography sx={{typography: {sm: 'h2', xs: 'h4'}}} align="center">
                  About Me
                </Typography>

                <Typography variant="body1" sx={paragraphFormat}>
                  I am an experienced operational leader and junior software
                  developer. My focus is on identifying and implementing
                  technological and managerial strategies to increase efficiency
                  for businesses. I have developed and applied these skills in a
                  variety of leadership roles, including 5 years managing lift
                  operations at a The Remarkables ski resort, leading the NZSki
                  customer service and call center team in Queenstown, and
                  serving as Operations Lead for a fintech startup in the
                  decentralized finance space.
                </Typography>
                <Typography
                  variant="body1"
                  sx={paragraphFormat}
                >
                  I am currently open to full or part-time management or
                  software development roles, either in Central Otago, New
                  Zealand, or based remotely. With my diverse experience and
                  passion for technology and operational excellence, I am
                  confident in my ability to make a meaningful contribution to
                  any organization.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

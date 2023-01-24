import React from "react";
import { Typography, Container, Box, Grid, Avatar, SxProps } from "@mui/material";

export const About: React.FunctionComponent = () => {
  const paragraphFormat: SxProps = {
    sm: { marginLeft: "20px", marginRight: "20px" },
    xs: { marginLeft: "0px", marginRight: "0px" },
    fontSize: { sm: "18px", xs: "16px" },
    lineHeight: "1.3em",
    textAlign: "left",
    paddingTop: ["50px", "50px" , "0px"]
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
          <Typography sx={{marginBottom: '50px', typography: ["h4", "h3", "h2"] }} align="center">
            About Me
          </Typography>

          <Grid container justifyContent="center" alignItems="center">
            <Grid
              item
              xs={12}
              sm={5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                src="../images/Cam.jpg"
                variant="square"
                sx={{
                  width: ["200px", "250px"],
                  height: ["200px", "250px"],
             
                }}
              />
            </Grid>
            <Grid item sm={12} md={7}>
              <Box>
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
                <Typography variant="body1" sx={paragraphFormat}>
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

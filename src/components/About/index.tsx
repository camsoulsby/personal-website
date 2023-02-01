import React from "react";
import { Typography, Container, Box, Avatar, SxProps } from "@mui/material";

type AboutProps = {};

export const About: React.FunctionComponent<AboutProps> = () => {
  const paragraphStyles: SxProps = {
    fontSize: ["18px", "18px", "20px", "24px"],
    lineHeight: "1.3em",
    textAlign: "left",
    padding: ["40px 20px", "60px 20px", "0px 40px"],
  };

  return (
    <div>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          padding: "0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            alignItems: "center",
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
          }}
        >
          <Avatar
            src="../images/Cam.jpg"
            variant="square"
            sx={{
              width: ["100%", "360px"],
              height: ["auto", "360px"],
              marginTop: ["0", "-180px", "0"],
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              width: "100%",
              padding: "20px",
            }}
          >
            <Typography variant="body1" sx={paragraphStyles}>
              I am an experienced operational leader and junior software
              developer. My focus is on identifying and implementing
              technological and managerial strategies to increase efficiency for
              businesses. I have developed and applied these skills in a variety
              of leadership roles, including 5 years managing Lift Operations at
              a The Remarkables ski resort, leading the NZSki Guest Services and
              Reservations team in Queenstown, and leading Operations for a
              fintech startup in the decentralized finance space.
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box
          sx={{
            top: "0",
            left: "0",
            height: "200px",
            width: "100%",
            background:
              'url("../images/paisley.jpg") top center/cover no-repeat',
            filter: "brightness(40%)",
          }}
        ></Box>
    </div>
  );
};

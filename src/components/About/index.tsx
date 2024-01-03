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
              About me.
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
          background: "black",
        }}
      ></Box>
    </div>
  );
};

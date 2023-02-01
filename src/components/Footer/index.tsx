import React from "react";
import { Typography, Container, Button, Grid, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";


type FooterProps = {};

export const Footer: React.FunctionComponent<FooterProps> = () => {
  const iconButtonFormat = { paddingLeft: "40px", paddingRight: "60px" };

  function downloadFile(file: string) {
    const link = document.createElement("a");
    link.href = file;
    link.download = "Cam Soulsby Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "primary.dark",
          color: "primary.contrastText",
        }}
      >
        <Container sx={{ paddingTop: "30px", paddingBottom: "50px" }}>
          <Grid
            container
            justifyContent="center"
            sx={{ paddingTop: "20px", paddingBottom: "20px" }}
          >
            <IconButton
              href={"https://github.com/camsoulsby"}
              target="_blank"
              sx={iconButtonFormat}
            >
              <GitHub sx={{color: "primary.contrastText", transform: 'scale(1.8)'}}/>
            </IconButton>
            <IconButton
              href={"https://www.linkedin.com/in/camsoulsby/"}
              target="_blank"
              sx={iconButtonFormat}
            >
            
              <LinkedIn sx={{color: "primary.contrastText", transform: 'scale(1.8)'}}/>
            </IconButton>
            <IconButton
              href={"https://twitter.com/camsoulsby"}
              target="_blank"
              sx={iconButtonFormat}
            >
             <Twitter sx={{color: "primary.contrastText", transform: 'scale(1.8)'}}/>
            </IconButton>
          </Grid>
          <Typography variant="body1" align="center">
            <Button
              sx={{ color: "primary.contrastText" }}
              onClick={() => downloadFile("./documents/resume.pdf")}
            >
              Download Resume
            </Button>
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ paddingTop: "10px" }}
          >
            &copy; 2023 Cam Soulsby
          </Typography>
        </Container>
      </Container>
    </div>
  );
};

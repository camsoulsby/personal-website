import React from "react";
import { Typography, Container, Button, Grid, IconButton } from "@mui/material";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
// useTheme is a hook that allows you to access the theme object from the ThemeProvider higher in the component tree.
import { useTheme } from "@mui/material";

type FooterProps = {};

export const Footer: React.FunctionComponent<FooterProps> = () => {
  const theme = useTheme();
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
              <FaGithub color={theme.palette.primary.contrastText} size="40px" />
            </IconButton>
            <IconButton
              href={"https://www.linkedin.com/in/camsoulsby/"}
              target="_blank"
              sx={iconButtonFormat}
            >
              <FaLinkedin color={theme.palette.primary.contrastText} size="40px" />
            </IconButton>
            <IconButton
              href={"https://twitter.com/camsoulsby"}
              target="_blank"
              sx={iconButtonFormat}
            >
              <FaTwitter color={theme.palette.primary.contrastText} size="40px" />
            </IconButton>
          </Grid>
          <Typography variant="body1" align="center">
            <Button
              sx={{ color: "text.secondary" }}
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

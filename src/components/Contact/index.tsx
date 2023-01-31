import React, { useState } from "react";
import { Typography, Container, Button, TextField, Grid } from "@mui/material";

type ContactProps = {};

export const Contact: React.FunctionComponent<ContactProps> = () => {
  const [emailText, setEmailText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.open(
      `mailto:cameron.soulsby+webform@gmail.com?subject=Web Enquiry&body=${emailText}`
    );
  };
  return (
    <div>
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "primary.light", color: "primary.contrastText" }}
      >
        <Container sx={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <Typography sx={{ typography: ["h4", "h3", "h2"] }} align="center">
            Contact Me
          </Typography>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container flexDirection={"column"}>
              <Grid
                item
                sx={{ textAlign: "center", paddingTop: "40px", color: "red" }}
              >
                <TextField
                  sx={{
                    width: "90%",
                    backgroundColor: "grey.50",
                    borderRadius: "10px",
                  
                  }}
                  id="standard-multiline-static"
                  multiline
                  rows={12}
                  placeholder="Enter message"
                  margin="normal"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item sx={{ textAlign: "center", paddingTop: "30px" }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    "&:hover": {
                      backgroundColor: "secondary.dark",
                    },
                    backgroundColor: "secondary.main",
                    color: "secondary.contrastText",
                  }}
                >
                  Send Email
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Container>
    </div>
  );
};

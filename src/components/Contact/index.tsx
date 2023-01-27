import React, { useState } from "react";
import { Typography, Container, Button, TextField, Grid } from "@mui/material";

export const Contact: React.FunctionComponent = () => {
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
        sx={{ backgroundColor: "secondary.main", color: "primary.main" }}
      >
        <Container sx={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <Typography sx={{ typography: ["h4", "h3", "h2"] }} align="center">
            Contact Me
          </Typography>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container flexDirection={"column"}>
              <Grid item sx={{ textAlign: "center", paddingTop: "40px" }}>
                <TextField
                  sx={{ width: "90%" }}
                  id="standard-multiline-static"
                  multiline
                  rows={12}
                  placeholder="Enter message"
                  margin="normal"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item sx={{ textAlign: "center", paddingTop: "30px" }}>
                <Button variant="contained" color="primary" type="submit">
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

import React from "react";
import { Typography, Grid, Container, Card, Box } from "@mui/material";
import { PortfolioCard } from "../PortfolioCard";

export const Portfolio: React.FunctionComponent = () => {
  return (
    <div>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "secondary.main",
          color: "primary.main",
        }}
      >
        <Container sx={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <Typography variant="h2" align='center'>Portfolio</Typography>
        <Grid container spacing={2} justifyContent="center" paddingTop={'50px'} paddingBottom={'50px'}>
          <Grid item>
            <PortfolioCard
              image="./public/images/personal-website.png"
              onClick={() => {
                window.open("https://www.camsoulsby.com", "_blank");
              }}
            />
          </Grid>
          <Grid item>
          <PortfolioCard
              image=""
              onClick={() => {
                window.open("https://www.camsoulsby.com", "_blank");
              }}
            />
          </Grid>
          <Grid item>
          <PortfolioCard
              image=""
              onClick={() => {
                window.open("https://www.camsoulsby.com", "_blank");
              }}
            />
          </Grid>
          <Grid item>
          <PortfolioCard
              image=""
              onClick={() => {
                window.open("https://www.camsoulsby.com", "_blank");
              }}
            />
          </Grid>
          <Grid item>
          <PortfolioCard
              image=""
              onClick={() => {
                window.open("https://www.camsoulsby.com", "_blank");
              }}
            />
          </Grid>
        </Grid>
        </Container>
      </Container>
    </div>
  );
};

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
        <Container sx={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <Typography
          sx={{typography: {sm: 'h2', xs: 'h4'}}}
            align="center"
          >
            Web Development Portfolio
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            paddingTop={"80px"}
          >
            <Grid item>
              <PortfolioCard
                description="Personal profile"
                url="www.camsoulsby.com"
                image="../images/personal-website.png"
                onClick={() => {
                  window.open("https://www.camsoulsby.com", "_blank");
                }}
              />
            </Grid>
            {/* Second card for testing */}
            {/* <Grid item>
              <PortfolioCard
                description="Personal profile"
                url="www.camsoulsby.com"
                image="../images/personal-website.png"
                onClick={() => {
                  window.open("https://www.camsoulsby.com", "_blank");
                }}
              />
            </Grid> */}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

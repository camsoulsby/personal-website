import React from "react";
import { Typography, Grid, Container} from "@mui/material";
import { PortfolioCard } from "../../components";

type PortfolioProps = {};

export const Portfolio: React.FunctionComponent<PortfolioProps> = () => {
  return (
    <div>
      <Container
        maxWidth={false}
        sx={{
          backgroundColor: "grey.50",
          color: "primary.main",
        }}
      >
        <Container sx={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <Typography sx={{ typography: ["h4", "h3", "h2"] }} align="center">
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
                description="Personal profile - camsoulsby.com"
                image="../images/personal-website.png"
                onClick={() => {
                  window.open("https://www.camsoulsby.com", "_blank");
                }}
              />
            </Grid>

            <Grid item>
              <PortfolioCard
                description="Personal profile - camsoulsby.com"
                image="../images/paisley.jpg"
                onClick={() => {
                  window.open("https://www.camsoulsby.com", "_blank");
                }}
              />
            </Grid>
            <Grid item>
              <PortfolioCard
                description="Personal profile - camsoulsby.com"
                image="../images/paisley.jpg"
                onClick={() => {
                  window.open("https://www.camsoulsby.com", "_blank");
                }}
              />
            </Grid>
            <Grid item>
              <PortfolioCard
                description="Personal profile - camsoulsby.com"
                image="../images/paisley.jpg"
                onClick={() => {
                  window.open("https://www.camsoulsby.com", "_blank");
                }}
              />
            </Grid>
            <Grid item>
              <PortfolioCard
                description="Personal profile - camsoulsby.com"
                image="../images/paisley.jpg"
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

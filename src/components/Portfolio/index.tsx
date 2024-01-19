import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import { PortfolioCard } from "../../components";

type PortfolioProps = {};

export const Portfolio: React.FunctionComponent<PortfolioProps> = () => {
  return (
    <div>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundColor: "grey.50",
          color: "primary.main",
        }}
      >
        <Container disableGutters sx={{ paddingBottom: "100px" }}>
          <Typography
            sx={{
              padding: "50px 20px 40px 20px",
              typography: ["h6", "h5", "h4"],
            }}
            align="center"
          >
            Projects
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <PortfolioCard
                description="Personal profile website built with React, Material UI, and TypeScript."
                image="../images/profile.png"
                githubLink="https://github.com/camsoulsby/personal-website"
                siteLink="https://www.camsoulsby.com"
              />
            </Grid>
            <Grid item>
              <PortfolioCard
                description="AI phone call review application utilizing OpenAI APIs, built using React, Material UI, and TypeScript."
                image="../images/callreview.png"
                githubLink=""
                siteLink="https://callreview.camsoulsby.com"
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { styled, CardMedia, Typography, Button, Box } from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";

interface PortfoloioCardProps {
  description: string;
  image: string;
  githubLink: string;
  siteLink: string;
}

export const PortfolioCard: React.FC<PortfoloioCardProps> = ({
  description,
  image,
  githubLink,
  siteLink,
}: PortfoloioCardProps) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleMouseEnter = () => {
    setShowInfo(true);
  };

  const handleMouseLeave = () => {
    setShowInfo(false);
  };

  useEffect(() => {
    // remove useEffect if no side effects required
  }, [showInfo]);
  return (
    <>
      {/* todo: figure out how to make screenshot images scale from top-left of Card (issue #5) */}

      <StyledCardMedia
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...{ description }}
        sx={{
          backgroundColor: "green",
          position: "relative",
          width: ["280px", "360px"],
          height: ["175px", "225px"],
          boxShadow: "10px 10px 20px 0px rgba(0,0,0,1)",
          margin: "20px",
        }}
      >
        <Box
          sx={{
            background: `url("${image}") top center/cover no-repeat`,
            height: "100%",
            width: "100%",
            filter: showInfo ? "brightness(40%)" : "none",
            transition: "filter 0.5s ease-in-out",
          }}
        ></Box>
        <Typography
          variant="body1"
          align="center"
          sx={{
            opacity: showInfo ? "1" : "0",
            position: "absolute",
            top: "100px",
            left: "0",
            color: "white",
            paddingTop: "5px",
            paddingBottom: "10px",
            fontSize: { sm: "18px", xs: "16px" },
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {description}
        </Typography>
        <GitHub
          sx={{
            opacity: showInfo ? "1" : "0",
            position: "absolute",
            color: "primary.contrastText",
            top: "170px",
            transition: "opacity 0.5s ease-in-out",
            "&:hover": {
                color: "secondary.light",
              },
           
          }}
          onClick={() => window.open(githubLink, "_blank")}
        />

        <OpenInNew
          sx={{
            color: "primary.contrastText",
            opacity: showInfo ? "1" : "0",
            position: "absolute",
            top: "170px",
            left: "200px",
            transition: "opacity 0.5s ease-in-out",
            "&:hover": {
                color: "secondary.light",
              },
          }}
          onClick={() => window.open(siteLink, "_blank")}
        />
      </StyledCardMedia>
    </>
  );
};

const StyledCardMedia = styled(CardMedia)({
  backgroundColor: "white",
  "&:hover": {
    cursor: "pointer",
  },
});

export default PortfolioCard;

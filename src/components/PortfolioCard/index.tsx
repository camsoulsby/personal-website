import React, { useState } from "react";
import { CardMedia, Typography, Box } from "@mui/material";
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

  return (
    <>
      {/* todo: figure out how to make screenshot images scale from top-left of Card (issue #5) */}

      <CardMedia
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...{ description }}
        sx={{
          position: "relative",
          width: ["280px", "360px"],
          height: ["175px", "225px"],
          boxShadow: "10px 10px 20px 0px rgba(0,0,0,1)",
          marginTop: ["20px", "20px"],
          marginBottom: ["100px", "20px"],
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.dark",
            background: image ? `url("${image}") top center/cover no-repeat` : "",
            height: "100%",
            width: "100%",
            filter: ["none", showInfo ? "brightness(40%)" : "none"],
            transition: "filter 0.5s ease-in-out",
          }}
        ></Box>
        <Typography
          variant="body1"
          align="center"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            opacity: ["1", showInfo ? "1" : "0"],
            position: "absolute",
            top: ["170px", "0"],
            color: ["primary.dark", "primary.contrastText"],

            fontSize: { sm: "18px", xs: "16px" },
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {description}
        </Typography>
        <GitHub
          sx={{
            transform: ["scale(1.4)", "scale(1.8)"],
            opacity: ["1", showInfo ? "1" : "0"],
            position: "absolute",
            color: ["primary.dark", "primary.contrastText"],
            top: ["200px", "184px"],
            left: ["35px", "20px"],
            transition: ["none", "opacity 0.5s ease-in-out"],
            "&:hover": {
              color: "secondary.light",
            },
          }}
          onClick={() => window.open(githubLink, "_blank")}
        />

        <OpenInNew
          sx={{
            transform: ["scale(1.4)", "scale(1.8)"],
            color: ["primary.dark", "primary.contrastText"],
            opacity: ["1", showInfo ? "1" : "0"],
            position: "absolute",
            top: ["200px", "184px"],
            left: ["220px", "320px"],
            transition: ["none", "opacity 0.5s ease-in-out"],
            "&:hover": {
              color: "secondary.light",
            },
          }}
          onClick={() => window.open(siteLink, "_blank")}
        />
      </CardMedia>
    </>
  );
};

export default PortfolioCard;

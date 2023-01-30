import React from "react";
import { styled, CardMedia, Typography } from "@mui/material";

interface PortfoloioCardProps {
  description: string;
  image: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const PortfolioCard: React.FC<PortfoloioCardProps> = ({
  description,
  image,
  onClick,
}: PortfoloioCardProps) => {
  return (
    <>
      {/* todo: figure out how to make screenshot images scale from top-left of Card (issue #5) */}

      <StyledCardMedia
        {...{ description, image, onClick }}
        sx={{
          width: { sm: "320px", xs: "240px" },
          height: { sm: "200px", xs: "150px" },
          boxShadow: "10px 10px 20px 0px rgba(0,0,0,1)",
          margin: "20px"
        }}
      />

      <Typography
        variant="body1"
        align="center"
        sx={{
          paddingTop: "5px",
          paddingBottom: "10px",
          fontSize: { sm: "18px", xs: "16px" },
        }}
      >
        {description}
      </Typography>
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

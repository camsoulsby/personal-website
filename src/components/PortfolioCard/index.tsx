import React from "react";
import { styled, CardMedia, Typography } from "@mui/material";

interface PortfoloioCardProps {
  description: string;
  image: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const PortfolioCard: React.FC<PortfoloioCardProps> = (
  props: PortfoloioCardProps
) => {
  return (
    <>
      {/* todo: figure out how to make screenshot images scale from top-left of Card (issue #5) */}

      <StyledCardMedia
        {...props}
        sx={{
          width: { sm: "480px", xs: "384px" },
          height: { sm: "300px", xs: "240px" },
        }}
      />
    
          <Typography
            variant="body1"
            align="center"
            sx={{ paddingTop: "5px", paddingBottom: "10px", fontSize: { sm: "18px", xs: "16px" } }}
          >
            {props.description}

          </Typography>
     
    </>
  );
};

const StyledCardMedia = styled(CardMedia)({
  backgroundColor: "white",

  borderRadius: "10px",
  "&:hover": {
    cursor: "pointer",
  },
});

export default PortfolioCard;

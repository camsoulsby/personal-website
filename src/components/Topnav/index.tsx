import React from "react";
import { Container, Box } from "@mui/material";

type TopNavProps = {
  toggleMenuFunction: () => void;
  menuShown: boolean;
};

export const Topnav: React.FunctionComponent<TopNavProps> = (
  {toggleMenuFunction, menuShown}: TopNavProps
) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        position: "fixed",
        backgroundColor: "black",
        color: "white",
        height: "55px",
        paddingTop: "11px",
        paddingLeft: "0px",
        fontSize: "1.5rem",
      }}
    >
      <Box
        sx={{
          marginLeft: "15px",
          width: "18px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={toggleMenuFunction}
      >
        <i className={menuShown ? "fas fa-times" : "fas fa-bars"} />
      </Box>
    </Container>
  );
};

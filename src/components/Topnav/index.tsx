import React from "react";
import { Container, Box } from "@mui/material";
import { Close, Menu } from "@mui/icons-material";

type TopNavProps = {
  toggleMenuFunction: () => void;
  menuShown: boolean;
};

export const Topnav: React.FunctionComponent<TopNavProps> = ({
  toggleMenuFunction,
  menuShown,
}: TopNavProps) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        position: "fixed",
        backgroundColor: "primary.dark",
        color: "primary.contrastText",
        height: "50px",
        paddingTop: "11px",
        paddingLeft: "0px",
        fontSize: "1.5rem",
        zIndex: "100",
      }}
    >
      <Box
        sx={{
          marginLeft: "12px",
          marginTop: "0px",
          width: "25px",
          height: "27px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={toggleMenuFunction}
      >
        {menuShown ? <Close /> : <Menu />}
      </Box>
    </Container>
  );
};

import React, { useState } from "react";
import { Container, Typography, Box, List, ListItem } from "@mui/material";

type TopNavProps = {
    toggleMenuFunction: () => void
    menuShown: boolean
}

export const Topnav: React.FunctionComponent<TopNavProps> = ( props: TopNavProps ) => {

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
      <Box sx={{ marginLeft: "15px" }} onClick={props.toggleMenuFunction}>
        <i className={props.menuShown ? "fas fa-times" : "fas fa-bars"} />
      </Box>
     
    </Container>
  );
};

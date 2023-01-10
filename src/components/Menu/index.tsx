import React, { useState } from "react";
import { Container, Typography, Box, List, ListItem, Button } from "@mui/material";

type MenuProps = {
    showMenu: boolean
    scrollRefs: React.MutableRefObject<null>[]
    toggleMenuFunction: () => void
    menuItems: string[]
}
export const Menu: React.FunctionComponent<MenuProps> = ( props : MenuProps ) => {

    function scrollToPoint(ref: React.MutableRefObject<null>) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }

    const menuHiddenStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: "400px",
        width: "300px",
        position: 'fixed',
        top: '55px',
        left: "-100%",
        opacity: '1',
        transition: 'all 0.5s ease',
        justifyContent: 'start',
      };
    
      const menuVisibleStlye = {
        backgroundColor: "lightGrey",
        height: "400px",
        width: "300px",
        position: 'fixed',
        top: '55px',
        left: '0',
        opacity: '1',
        transition: 'all 0.5s ease',
        zIndex: '1',
        
      };


 
      
  return (
    <Box sx={ props.showMenu ? menuVisibleStlye : menuHiddenStyle}>
        <List>
          {props.menuItems.map((item, index) => (
            <ListItem key={item}>
              <Button onClick={() => {
                scrollToPoint(props.scrollRefs[index]);
                props.toggleMenuFunction();
              }}>
                {item}
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
  );
}
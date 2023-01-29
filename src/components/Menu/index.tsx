import React from "react";
import {
  Box,
  List,
  ListItem,
  Button,
} from "@mui/material";

type MenuProps = {
  showMenu: boolean;
  scrollRefs: React.MutableRefObject<null>[];
  toggleMenuFunction: () => void;
  menuItems: string[];
};
export const Menu: React.FunctionComponent<MenuProps> = ({ showMenu, scrollRefs, toggleMenuFunction, menuItems }: MenuProps) => {
  //   useEffect(() => {
  //     function handleClickOutside(event: MouseEvent) {
  //       console.log('mousedown!')
  //         const menuNode = event.target as Node;
  //         if (menuNode.closest('#menu-box')) return;
  //         props.toggleMenuFunction();
  //     }

  //     if (props.showMenu) {
  //         document.addEventListener("mousedown", handleClickOutside);
  //     } else {
  //         document.removeEventListener("mousedown", handleClickOutside);
  //     }

  //     return () => {
  //         document.removeEventListener("mousedown", handleClickOutside);
  //     };
  // }, [props.showMenu]);

  function scrollToPoint(ref: React.MutableRefObject<HTMLElement | null>) {
    if (ref.current && "scrollIntoView" in ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const menuHiddenStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    position: "fixed",
    top: "55px",
    left: "-100%",
    opacity: "1",
    transition: "all 0.5s ease",
    justifyContent: "start",
  };

  const menuVisibleStlye = {
    backgroundColor: "secondary.main",

    width: "300px",
    position: "fixed",
    top: "55px",
    left: "0",
    opacity: "1",
    transition: "all 0.5s ease",
    zIndex: "1",
  };

  return (
    <Box id="menu-box" sx={showMenu ? menuVisibleStlye : menuHiddenStyle}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item}>
            <Button
              onClick={() => {
                scrollToPoint(scrollRefs[index]);
                toggleMenuFunction();
              }}
            >
              {item}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

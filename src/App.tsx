import React, { useRef, useState } from "react";
import { About, Contact, Experience, Footer, Menu, PageHeader, Portfolio, Topnav } from './components';
import darkTheme from "./themes/DarkTheme";

import { CssBaseline, ThemeProvider } from "@mui/material";

const App: React.FunctionComponent = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const [menuShown, setMenuShown] = useState(false);

  const toggleMenu = () => {
    console.log("toggle menu!");
    setMenuShown(!menuShown);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Topnav toggleMenuFunction={toggleMenu} menuShown={menuShown} />

      <Menu
        showMenu={menuShown}
        menuItems={["Home", "About Me", "Portfolio", "Experience", "Contact"]}
        scrollRefs={[
          homeRef,
          aboutRef,
          portfolioRef,
          experienceRef,
          contactRef,
        ]}
        toggleMenuFunction={toggleMenu}
      />

      <main>
        <div style={{ scrollMarginTop: "50px" }} ref={homeRef}>
          <PageHeader />
        </div>
        <div style={{ scrollMarginTop: "50px" }} ref={aboutRef}>
          <About />
        </div>
        <div style={{ scrollMarginTop: "50px" }} ref={portfolioRef}>
          <Portfolio />
        </div>
        <div style={{ scrollMarginTop: "50px" }} ref={experienceRef}>
          <Experience />
        </div>
        <div style={{ scrollMarginTop: "50px" }} ref={contactRef}>
          <Contact />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
};

export default App;

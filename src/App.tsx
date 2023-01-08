import React from "react";
import { Topnav } from "./components/Topnav";
import { PageHeader } from "./components/PageHeader";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import lightTheme from "./themes/LightTheme";
import darkTheme from "./themes/DarkTheme";


import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";



const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={darkTheme}>

    
      <CssBaseline />
      <Topnav />
      <PageHeader />

      <main>
      
      <About />
      <Portfolio />
      <Experience />
      <Contact />            
      
      </main>
      <footer>
      <Footer />
      </footer>
  
      </ThemeProvider>
  );
};

export default App;

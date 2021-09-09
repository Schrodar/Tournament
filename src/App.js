import React from "react";
import  GlobalStyles  from "./components/GlobalStyle";
// Import Pages

//Components
import Main from './components/Main';
import Nav  from "./components/Nav";

 

//import framer and styled-components
import { motion } from "framer-motion";
import styled from "styled-components";
function App() {
  


return(
    <StyldeApp>
      <GlobalStyles /> 
      <Nav />
     <Main /> 
    </StyldeApp>
  )
};

const StyldeApp = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;


export default App;

import React from "react";
import styled from 'styled-components';
import { motion } from "framer-motion";
//
import Tournament  from "../pages/Tournament";
import Home from "../pages/Home";
import Upcoming from "../pages/upcoming"
import Team from "../pages/Team";
// browserBaosor
import { Switch, Route } from "react-router-dom";



const Main = () => {
    return(
        <StyledWrapper>
            <StyledSidebar>
            </StyledSidebar>   
            <StyledMain>
              <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route  path="/team">
                    <Team />
                </Route>
                <Route path={["/tournament/:id", "/tournament"]}>
                    <Tournament />
                </Route>
                <Route path="/upcoming" >
                    <Upcoming />
                </Route>
              </Switch>   
            </StyledMain>
        </StyledWrapper>
    )
}
const StyledMain = styled(motion.div)`
   overflow: hidden;
   height: 80vh;
   width: 100%;
`;

const StyledWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 216px 1fr;
  grid-gap: 1.5rem;
`;


const StyledSidebar = styled(motion.div)`
    height: 80vh;
    left: 0;

    background: green;
`;



export default Main;
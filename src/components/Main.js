import React from "react";

// Node  package
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Switch, Route } from "react-router-dom";

// Pages
import Tournament  from "../pages/Tournament";
import Home from "../pages/Home";
import Upcoming from "../pages/upcoming"
import Team from "../pages/Team";

// Componets
import ActiveTournament from "./ActiveTournament";

 

const Main = () => {



    return(
        <StyledWrapper>
            <StyledSidebar>
                <ActiveTournament  />
            </StyledSidebar>   
            <StyledMain>
              <Switch>
                <Route path="/" exact>
                    <Home  />
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
    height: 85vh;
    width: 100%;
    background: rgb(231, 235, 240);
`;

const StyledWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 108px 1fr;
  grid-gap: 2rem;
`;


const StyledSidebar = styled(motion.div)`
    height: 85vh;
    left: 0;
    background: rgb(231, 235, 240);

`;





export default Main;
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { 
    StyledMain,
    StyledSidebar,
    StyledWrapper
 } from "../styles";
// Pages
import Tournament  from "../pages/Tournament";
import Home from "../pages/Home";
import Upcoming from "../pages/upcoming"
import Team from "../pages/Team";
// Componets
 

const Main = () => {
    // get Location

    const location = useLocation();
    console.log(location.pathname)

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

export default Main;
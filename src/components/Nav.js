import React from "react";
import styled  from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Nav = () => {



    return(
    <StyledNav>
        
        <div>
            <Link to="/loggin">loggin</Link>
        </div>

        <StyledNavdiv>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/tournament">Tournament</Link>
                </li>
                <li>
                 <Link to="/team">Team</Link>
                </li>
                <li>
                    <Link to="/upcoming">Upcoming Events</Link>
                </li>
            </ul>
        </StyledNavdiv>
    </StyledNav>
    )
};

export default Nav;


const StyledNav = styled(motion.div)`
    height: 15vh;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #141414;
    ul {
        display: flex;
        list-style: none;
        
    }
    li {
        font-family: 'Abril Fatface', cursive;
        margin: 0rem 3rem;
    }
    a {
        color: #ffffff;
        font-size: 1.1rem;
    }

    
`; 
const StyledNavdiv = styled(motion.div)`
    margin-right:  2.5rem;
`;
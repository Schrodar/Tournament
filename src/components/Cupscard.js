import React from "react";
// Styling and Animation
import  styled  from "styled-components";
import { motion } from "framer-motion";
// REDUX
import dimma from "../img/cup-Logo.jpg";

import { Link } from "react-router-dom";

const Cup = ({name, game, numberOfTeams, id, pathId}) => {




    return(
        <StyledCups layoutId={pathId}>
            <Link to={`/tournament/${id}`}>
            <h1>
                {name}
            </h1>
            <p>
                {game}
            </p>
            <p>
                {numberOfTeams}
            </p>
            <img src={dimma} alt=""/>
            </Link>
        </StyledCups>
    );
};

const StyledCups = styled(motion.div)`
    padding: 0.5rem;
    border-radius: 1rem;
    background: yellow;
    cursor: pointer;
   h1{
       font-size: 1rem;
   }
   p{
       font-size: 12px;
   }
   img {
    border-radius: 1rem;
   }
`;


export default Cup;
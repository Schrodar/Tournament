import React from "react";
// styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';



const JoinCup = ({id, pathId}) => {
 const  history = useHistory();
  // exit to trouinament 
const exitCardHandler = (e) => {
 const element = e.target;
 if (element.classList.contains("shadow")){
  history.push("/Tournament");
  }
};

  const dispatch = useDispatch();

  const funk = () => {

   dispatch({
      type: "GET_TOURNAMENT_ID",
        payload: { listan: id }
    })
  };


    
    return(
        <StyledCardShadow className="shadow" onClick={exitCardHandler}>
            <StyledCard layoutId={pathId}>
            <h1>hello</h1>

            <button onClick={funk}>Join with Team</button>
            </StyledCard>
        </StyledCardShadow>
    )
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const StyledCard = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position:absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

export default JoinCup;
import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// styling and motion
import styled  from "styled-components";
import { motion } from "framer-motion";

// Components
import Cups from "../components/Cupscard";
import JoinCup from "../components/Join";
import { loadTournament } from "../actions/TournamentAction";
import { useLocation } from "react-router-dom";



const Tournament = () => {


// Fetch Data
const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadTournament());
},[dispatch]);

// get Data From state

const {Tournament} = useSelector((state) => 
(state.Tournament)
);
// find location
const location = useLocation();
const pathId = location.pathname.split("/")[2];
const convert = parseInt(pathId);




return(
    <CupList>

        {pathId && <JoinCup 
        id={convert}           
        />}
        {Tournament.map((Tournament) =>
        
        <Cups
          name={Tournament.name}
          game={Tournament.game}
          numberOfTeams={Tournament.numberOfTeams}
          id={Tournament.id}
          key={Tournament.id}
          pathId={pathId}
          />
          )}

    </CupList>
  )

};

const CupList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  margin-right: 2rem;
  margin-top: 2rem;
  img {
    width: 100%;
    height: 19vh;
    object-fit: cover;
  border-end-end-radius: 1rem;
  border-end-start-radius: 1rem;
   }
`;

  
export default Tournament;
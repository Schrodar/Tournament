import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


// styling and motion
import styled  from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

// Components
import Cups from "../components/Cupscard";
import JoinCup from "../components/Join";
import { loadTorunament } from "../actions/TournamentAction";
import { useLocation } from "react-router-dom";



const Tournament = () => {


// Fetch Data
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadTorunament());
},[dispatch]);

// get Data From state

const {Tournament} = useSelector((state) => 
(state.Tournament)
);
// find location
const location = useLocation();
const pathId = location.pathname.split("/")[2];


return(
    <CupList>

        {pathId && <JoinCup id={pathId} pathId={pathId} />}
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  img {
    width: 100%;
    height: 15vh;
    object-fit: cover;
   }
`;

  
export default Tournament;

  
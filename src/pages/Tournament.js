import React,{ useEffect } from "react";
import { connect, useDispatch, useSelector} from "react-redux";


// styling and motion
import styled  from "styled-components";
import { motion, AnimatePresence ,AnimateSharedLayout,} from "framer-motion";

// Components
import Cups from "../components/Cupscard";
import JoinCup from "../components/Join";
import { loadTournament } from "../store/tournament";
import { useLocation } from "react-router-dom";

/* import { tryme } from "../actions/test"; */


const Tournament = () => {
  const dispatch = useDispatch();


// Fetch Data


useEffect(() => {
  dispatch(loadTournament());
/*   dispatch(tryme()); */
},[dispatch]);

// get Data From state

const tournament   = useSelector(state => state.Entities.tournament.list);

const isLoading = useSelector(state => state.Entities.tournament.isLoading)



// find location
const location = useLocation();
const pathId = location.pathname.split("/")[2];
const convert = parseInt(pathId);  




return(
  <>
  {!isLoading &&<CupList>
     <AnimateSharedLayout>
        <AnimatePresence>
        {pathId && <JoinCup 
        id={convert}           
        />} 
        </AnimatePresence>
        {tournament.map((Tournament) =>
        
        <Cups
          name={Tournament.name}
          game={Tournament.game}
          numberOfTeams={Tournament.numberOfTeams}
          id={Tournament.id}
          key={Tournament.id}
          pathId={convert} 
          />
          )}
        </AnimateSharedLayout> 
    </CupList>
  }  
  </>
  )

};

const CupList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 275px));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  img {
    width: 100%;
    border-end-end-radius: 1rem;
    border-end-start-radius: 1rem;
   }
`;



  
  
export default Tournament
import React from 'react';
import { useSelector } from 'react-redux';
import  styled  from "styled-components";
import { motion } from "framer-motion";

const ActiveTournament = () => {

    // seting up to read Data
    const listan = useSelector(state => state.listan);
    const newList = Object.values(listan);
    const { Tournament } = useSelector((state => state.Tournament));
    const data = useSelector(state => state.data);
    
    



    // cheek if anny Tournamnet is active if so wich one and then add it to UI
    function ActiveTournamentOne(props) {
        const kolla = newList.filter(find => (find.active === true && find.key === Tournament[data.id -1].id));
        const isLoggedIn = props.isLoggedIn;
        if (kolla.length === 1 && isLoggedIn && kolla[0].key === 1) {
            return <StyledActiveTournament1 />;
            } 
        else if (kolla.length === 1 && isLoggedIn && kolla[0].key === 2) {
            return <StyledActiveTournament2 />;
            }
        else if (kolla.length === 1 && isLoggedIn && kolla[0].key === 3) {
            return <StyledActiveTournament3 />;
            }
        else if (isLoggedIn){
            return <StyledActiveTournament4 />
            }
    }       

    return(
        <div>
            <ActiveTournamentOne isLoggedIn={true} />
        </div>
    )
}



const StyledActiveTournament1  = styled(motion.div)`
    margin-top: 2rem;
    background: green;
    width: 100%;
    height: 10vh;

`;

const StyledActiveTournament2  = styled(motion.div)`
    margin-top: 2rem;
    background: blue;
    width: 100%;
    height: 10vh;

`;

const StyledActiveTournament3  = styled(motion.div)`
    margin-top: 2rem;
    background: red;
    width: 100%;
    height: 10vh;

`;

const StyledActiveTournament4  = styled(motion.div)`
    margin-top: 2rem;
    background: yellow;
    width: 100%;
    height: 10vh;

`;
export default ActiveTournament;
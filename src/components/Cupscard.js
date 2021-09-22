
// Styling and Animation
import  styled  from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { 
    StyledCups,
    Styledtext,
    Styledimg
 } from "../styles";

const Cup = ({ game, id }) => {
    // setting up data 

    const tournament = useSelector(state => state.Entities.tournament.list);
    const isLoading = useSelector(state => state.Entities.tournament.isLoading);
    

    return(
    <>
        {!isLoading &&
            <StyledCups layoutId={id}>
                <Link to={`/Tournament/${id}`}>
                    <Styledtext>
                        <motion.h1 >
                            Game: {game} 
                        </motion.h1>
                    </Styledtext>
                <Styledimg>
                    { <motion.img src={`data:image/png;base64,${tournament.filter((stateCup) => (stateCup.id === id))[0].cupimg}` } alt=""/> }
                </Styledimg>
                </Link>
            </StyledCups>
        }
        </>
    );
};

export default Cup;

// Styling and Animation
import  styled  from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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

const StyledCups = styled(motion.div)`
    border-radius: 1rem;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    cursor: pointer;
   h1{
       font-size: 1rem;
       padding: 1rem;

   }
   p{
       font-size: 12px;
   }
   img {
        display: block;
   }
`;

const Styledimg = styled(motion.div)`



`;

const Styledtext = styled(motion.div)`
    height: 75px ;
`
export default Cup;
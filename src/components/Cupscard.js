
// Styling and Animation
import  styled  from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cup = ({ game, id }) => {
    // setting up data 
    const listan = useSelector(state => state.listan);
    const newList = Object.values(listan)

    return(
        <StyledCups>
            <Link to={`/Tournament/${id}`}>
                <h1>
                    Game: {game} 
                </h1>
                <StyledForceBottom>
                    <img src={newList.filter((stateCup) => (stateCup.key === id))[0].mainImg} alt=""/>
                </StyledForceBottom>
            </Link>
        </StyledCups>
    );
};

const StyledCups = styled(motion.div)`
    position: relative;
    border-radius: 1rem;
    height: 26vh;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    text-align:center;
    cursor: pointer;
   h1{
       font-size: 1rem;
       padding: 1rem;

   }
   p{
       font-size: 12px;
   }
   img {
       width: 100%;
       height: 15vh;
       object-fit: cover;
   }
`;

const StyledForceBottom = styled(motion.div)`

position: absolute;
bottom:0px;
`;

export default Cup;
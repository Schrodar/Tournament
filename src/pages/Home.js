import React from "react";
import  styled from 'styled-components';
import { motion } from "framer-motion";
import full from "../img/cs go2223.jpg";
import  LogginTest  from "../components/loginPageHandler";
const Home = () => {




    return(
  <StyledHome>
    <LogginTest/>
    <StyldeSlideHolder>
       <StyledSlides>
            <img src={full} alt=""/>
       </StyledSlides>
        <StyledLeft>
                <h1>Play and Game <span>to</span> make Your dream</h1>
       </StyledLeft> 
      </StyldeSlideHolder>
    </StyledHome>
    )
};


const StyledHome = styled(motion.div)`
  width: 100%;
  position: relative;
  height: 85vh;
  display: flex;
  overflow: hidden;
`;

const StyledLeft = styled(motion.div)`
max-width: 50%;
min-width: 375px;
height: 85vh;
position: absolute;

`;

const StyledSlides = styled(motion.div)`
width: 50%;


position: absolute;
top: 2rem;
right: 2rem;
background: green;
display: flex;
img{
  object-fit: cover;
  width: 100%;
  height: 85vh;
}

`;
const StyldeSlideHolder = styled(motion.div)`



`;







export default Home;














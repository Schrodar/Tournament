// styles
import styled from "styled-components";
import { motion } from "framer-motion";
//redux And react

import { useHistory } from 'react-router-dom';





const JoinCup = ({id}) => {

  // exit to Tournament join
  const  history = useHistory();
 
  const exitCardHandler = (e) => {
      const element = e.target;
      if (element.classList.contains("shadow")){
      history.push("/Tournament");
    }
  };

  //Struckter data so it can be read
 

  

  // join a cup and addit to active in ui 
  
  const JoinAndAdd = () => {
    console.log("its done")
  };

    

    return(
      
        <StyledCardShadow className="shadow" onClick={exitCardHandler}>
            <StyledCard layoutId={id}>
              <StyledCupBrand>
                  <StyledForcedSize>
                   {/*  <motion.img  src={!isLoading && cupsInformation.filter((stateCup) => (stateCup.key === id))[0].secondImg} alt=""/> */}
                   </StyledForcedSize>
                  <StyledTextWrapper>
                    <h1>some txt</h1>
                  <button onClick={JoinAndAdd} id="pushmedown">Join with Team</button>
                  </StyledTextWrapper>
                </StyledCupBrand>
            </StyledCard>
        </StyledCardShadow>
    )
    
};


const StyledCard = styled(motion.div)`
  display: flex;
  overflow: visible;
  width: 70%;
  margin-top: 25vh;
  border-left: 1rem;
  border-start-end-radius: 1rem;
  border-end-end-radius: 1rem;
  border-end-start-radius: 1rem; 
  border-start-start-radius: 1rem;
  
  padding: 0rem 5rem 0rem 0rem;
  position: absolute;
  left: 15%; 
  color:white;
  z-index: 10;
  min-height: 50vh;
  background: #353535;


`;

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const StyledForcedSize = styled(motion.div)`
  width:55%;

img{
  z-index: 10;
  width: 100%;
  min-height: 60vh;
  border-end-start-radius: 1rem;

    }

  @media (max-width: 1200px){
      position: absolute;
      width: 55%;
      min-height: 50vh;
      bottom: 0;
      img {
        z-index: 10;
        width: 100%;
        min-height: 50vh;
        border-end-start-radius: 1rem;
        object-fit: cover;
    }
  }
    

`;


const StyledCupBrand = styled(motion.div)`
  overflow: visible;
  display:flex;

  button{
    background: none;
    width: 20vh;
    height: 7vh;
    border: none;
    border-start-start-radius: 1rem;
    border-end-end-radius: 1rem;
    border: solid 2px #718f5f;
    color: #718f5f;
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    transition: all 0.5s ease;
    &:hover{
        background-color: #718f5f;
        color: white;
    }
  }



`;

const StyledTextWrapper = styled(motion.div)`
  z-index: 7;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  h1{
    font-size: 2.25rem;
    color: #718f5f;
  }
  h2{
    font-size: 1rem;
    color: #718f5f;
  }
  h3{
    font-size: 1rem;
    color: #718f5f;
  }
  @media (max-width: 1200px){
  z-index: 7;
  position: absolute;
  right: 0;
  padding-right: 1rem;
  padding-top: 1rem;
  

  h1{
    font-size: 2rem;
    color: #718f5f;
    padding: 0.5rem 0rem;
  }
  h2{
    font-size: 1rem;
    color: #718f5f;
    padding: 0.5rem 0rem;
  }
  h3{
    font-size: 1rem;
    color: #718f5f;
    padding: 0.5rem 0rem;
  }
  }
`;






export default JoinCup;
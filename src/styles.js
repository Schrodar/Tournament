import { motion} from "framer-motion";
import styled from "styled-components";
 
/////////////////////////cups-card//////////////////////////////////// START

export const StyledCups = styled(motion.div)`
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

export const Styledimg = styled(motion.div)`



`;

export const Styledtext = styled(motion.div)`
    height: 75px ;
`


/////////////////////////cups-card//////////////////////////////////// END






///////////////////////////Join.js///////////////////////////////////// START

export const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const StyledCard = styled(motion.div)`
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


export const StyledForcedSize = styled(motion.div)`
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


export const StyledCupBrand = styled(motion.div)`
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

export const StyledTextWrapper = styled(motion.div)`
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
///////////////////////////////// Join //////////////////////////// END






///////////////////////////// loginPageHandler.js ////////////////////// Start

export const StyledCardShadow2 = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const StyledLabel = styled(motion.label)`

  color: white;
  font-family: Helvetica, Arial, sans-serif; 
  font-size: .3em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all .3s ease-in;
  opacity: 0;
  margin: 30px 0 0 1px;
  position: absolute;

`;



export const StyledCloseBtnLeftRight = styled(motion.div)`
  
  height: 2px;
  width: 30px;
  position: absolute;
  margin-top: 12px;
  background-color: #F4A259;
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all .3s ease-in;
`;

export const StyledCloseBtnRightLeft = styled(motion.div)`

  height: 2px;
  width: 30px;
  position: absolute;
  margin-top: 12px;
  background-color: #F4A259;
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all .3s ease-in;
`;
export const Styledx = styled(motion.div)`
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: #353535;
  border-start-start-radius: 1rem;
  padding: 2vh 1vh;

  &:hover ${StyledCloseBtnLeftRight} {  
    transform: rotate(-45deg);
    background-color: #F25C66;
  }                
  &:hover ${StyledCloseBtnRightLeft} {  
    transform: rotate(45deg);
    background-color: #F25C66;
  }

  &:hover ${StyledLabel} {  
    opacity: 1;
  }

`;

export const StyledLoggIn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 10vh;
  border-left: 1rem;
  border-start-end-radius: 1rem;
  border-end-end-radius: 1rem;
  border-end-start-radius: 1rem; 
  border-start-start-radius: 1rem;
  background: #353535;
  min-height: 50vh;
  left: 10%;
  position: absolute;
`;

export const StyyledTopLoginButton = styled(motion.div)`
    display: flex;
    flex-direction: row;
    margin-top: 12vh;
    justify-content: space-evenly; 
`;

export const StyledForm = styled(motion.form)`
    display: flex;
    align-items: center;
    flex-direction: column; 
    padding: 1rem 0;
`;

export const StyledInputDivs = styled(motion.div)`
    display: flex;
    padding: 1.25rem 0;
`;

export const StyledForm2 = styled(motion.form)`
    display: flex;
    align-items: center;
    flex-direction: column; 
    padding: 1rem 0;
`;

export const StyledButtons = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
`;

export const StyledInput = styled(motion.input)`
    display: flex;
    padding: 1.25rem;
    border: none;
    outline: none;
    width: 20rem; 
    height: 2rem;
    background: white; 
`;

export const StyledButton = styled(motion.button)`
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 1px solid #726d67;
    background: transparent;
    color: white;
    transition: all 0.3s ease;
    &:hover{
        background-color: #726d67;
        color: white;
    }
`;
/////////////////////////loginPage handler//////////////////end 



//////////////////////////// Main ////////////////////// start
export const StyledMain = styled(motion.div)`
    height: 85vh;
    width: 100%;
    background: rgb(231, 235, 240);
    padding: 2rem;
`;

export const StyledWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 108px 1fr;
  grid-gap: 2rem;
`;


export const StyledSidebar = styled(motion.div)`
    height: 85vh;
    left: 0;
    background: rgb(231, 235, 240);

`;


////////////////////////////// Main ///////////////////// end


////////////////////////////////// Nav ////////////////// Start

export const StyledNav = styled(motion.div)`
    height: 15vh;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #141414;
    ul {
        display: flex;
        list-style: none;
        
    }
    li {
        font-family: 'Abril Fatface', cursive;
        margin-left: 2.5rem;
    }
    a {
        color: #ffffff;
        font-size: 1.1rem;
    }
    button{
        font-family: 'Abril Fatface', cursive;
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        border: none;
        background: transparent;
        color: white;

    }
`; 

export const StyledNavdiv = styled(motion.div)`
    margin-right:  2.5rem;
`;


export const StyledNavdiv2 = styled(motion.div)`
    margin-left:  2.5rem;
`;
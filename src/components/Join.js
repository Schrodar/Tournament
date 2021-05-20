// styles
import styled from "styled-components";
import { motion } from "framer-motion";
//redux And react
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
  const {Tournament} =  useSelector((state) => (state.Tournament));
  const data =  Tournament.filter((state) => state.id === id);
  const listan = useSelector(state => state.listan);
  const cupsInformation = Object.values(listan);
  const isLoading = useSelector((state) => (state.Tournament.isLoading));


  // join a cup and addit to active in ui 
  const dispatch = useDispatch();
  const JoinAndAdd = () => {
    dispatch({
      type: "GET_TOURNAMENT_ID",
      payload: { 
        listan: {
          listan: listan[data[0].id - 1].active = true,
        }  
      }
    });

    dispatch({
      type: "DATA_IN",
      payload: { 
        id: data[0].id
      }
    });
  };

    

    return(
      
        <StyledCardShadow className="shadow" onClick={exitCardHandler}>
            <StyledCard>
              <StyledCupBrand>
                  <StyledForcedSize>
                    <img src={!isLoading && cupsInformation.filter((stateCup) => (stateCup.key === id))[0].secondImg} alt=""/>
                   </StyledForcedSize>
                  <StyledTextWrapper>
                  <h1>{!isLoading && data[0].name}</h1>
                  <h2>{!isLoading && data[0].game}</h2>
                  <h3>Number of competing teams: <span id="numberOfTeams">{!isLoading && data[0].numberOfTeams}</span></h3>
                  <h3>Admin: {!isLoading && cupsInformation.filter((stateCup) => (stateCup.key === id))[0].cupInformation[0].admin}</h3>
                  <h3>Start date: {!isLoading && cupsInformation.filter((stateCup) => (stateCup.key === id))[0].cupInformation[0].startDate} </h3>
                  <h3>Start time: {!isLoading && cupsInformation.filter((stateCup) => (stateCup.key === id))[0].cupInformation[0].startTime}</h3>
                  <h3>Rules: {!isLoading && cupsInformation.filter((stateCup) => (stateCup.key === id))[0].cupInformation[0].rules}</h3>
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
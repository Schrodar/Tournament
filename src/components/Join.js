import { useHistory } from 'react-router-dom';
import { 
  StyledCardShadow,
  StyledCard,
  StyledCupBrand,
  StyledForcedSize,
  StyledTextWrapper
 } from "../styles";

const JoinCup = ({id}) => {

  // exit to Tournament join
  const  history = useHistory();
 
  const exitCardHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")){
    history.push("/Tournament");
  }
};

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

export default JoinCup;
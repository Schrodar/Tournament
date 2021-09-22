import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { logginBegan, loginBtn } from "../store/authReducer";
import { onePlus } from "../store/addUserReducer";

import { 
    StyledCardShadow2,
    StyledLoggIn,
    Styledx,
    StyledCloseBtnLeftRight,
    StyledCloseBtnRightLeft,
    StyledLabel,
    StyyledTopLoginButton,
    StyledButton,
    StyledForm,
    StyledForm2,
    StyledInputDivs,
    StyledInput,
    StyledButtons,
    
 } from "../styles";

const LogginTest = () =>{ 
//// State not in redux
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [userPwd, setUserPwd] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const dispatch = useDispatch()
  const addUserHandler = (e) =>{
      let name = userName
      let email = userEmail
      let password = userPwd

      e.preventDefault();
      dispatch(onePlus({name, email, password}))
      console.log(userPwd, userEmail, userName)
  }

  const logginHandler = (e) => {
      e.preventDefault();
       dispatch(logginBegan({email, password})) 

  }
  
  const getValue = (e) => {
      setPassword(e.target.value);
  }

  const getValue2 = (e) => {
      setEmail(e.target.value);
  }

  const getValue3 = (e) => {
      setUserName(e.target.value);
  }

  const getValue4 = (e) => {
      setUserEmail(e.target.value);
  }

  const getValue5 = (e) => {
      setUserPwd(e.target.value);
  }

 const loginRegisterHandler = (text) =>{
  if (text === "register" && toggle1 === toggle2) {
      setToggle2(!toggle2);
      setToggle1(false);
  }
  if (text === "login" && toggle2 === toggle1) {
      setToggle1(!toggle1);
      setToggle2(false);
  }
  if (text === "register" && toggle1 !== toggle2) {
      setToggle2(!toggle2)
      setToggle1(false)
  }
  if (text === "login" && toggle2 !== toggle1){
      setToggle1(!toggle1);
      setToggle2(false);
  }
}

const loginBtnValue = useSelector( state => state.Entities.users.guest);
const isLoggedIn = useSelector( state => state.Entities.users.LoggedIn);



const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
        dispatch( loginBtn( !loginBtnValue ))
    }
  };
  const exitDetailHander2 = () => {
        dispatch( loginBtn( !loginBtnValue ))
    };
 return(
  <AnimatePresence>
    { !loginBtnValue && (
    <StyledCardShadow2 
    className="shadow"
    onClick={exitDetailHander}
    initial = {{ opacity: 0 }}
    animate = {{ opacity: 1}}
    exit = {{ opacity: 0}}
    >
        {!isLoggedIn &&  <StyledLoggIn>  
            <Styledx onClick={() => exitDetailHander2()}>
                <StyledCloseBtnLeftRight></StyledCloseBtnLeftRight>
                <StyledCloseBtnRightLeft></StyledCloseBtnRightLeft>    
                <StyledLabel>Close</StyledLabel>
            </Styledx>  
            <StyyledTopLoginButton>
                <StyledButton onClick={() => loginRegisterHandler("register") }>
                    Register
                </StyledButton>
                <StyledButton onClick={() =>loginRegisterHandler("login")}>
                    Login acc
                </StyledButton>   
            </StyyledTopLoginButton>
           {toggle1 && !toggle2 && <StyledForm         
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1}}
            exit = {{ opacity: 0}}>
                    <StyledInputDivs>
                        <motion.label htmlFor="email">
                        <StyledInput placeholder="Email" onChange={getValue2} />
                        </motion.label>
                    </StyledInputDivs>     
                    <StyledInputDivs>
                        <motion.label htmlFor="password">
                            <StyledInput placeholder="Password" onChange={getValue} />
                        </motion.label>
                    </StyledInputDivs>
                    <StyledButtons>
                    <StyledButton onClick={logginHandler}>Login</StyledButton>
                    </StyledButtons> 
                </StyledForm> }
        
                { toggle2 && !toggle1 && <StyledForm2
                        initial = {{ opacity: 0 }}
                        animate = {{ opacity: 1}}
                        exit = {{ opacity: 0}}>
                    <StyledInputDivs>
                        <motion.label htmlFor="name">
                        <StyledInput placeholder="name" onChange={getValue3} />
                        </motion.label>
                    </StyledInputDivs>
                    
                    <StyledInputDivs>
                        <motion.label htmlFor="email">
                        <StyledInput placeholder="Email" onChange={getValue4} />
                        </motion.label>
                    </StyledInputDivs>     
                    <StyledInputDivs>
                        <motion.label htmlFor="password">
                            <StyledInput placeholder="Password" onChange={getValue5} />
                        </motion.label>
                    </StyledInputDivs>

                    <StyledButtons>
                        <StyledButton onClick={addUserHandler}>Add user</StyledButton>
                    </StyledButtons>
                </StyledForm2> }
                </StyledLoggIn>}
    </StyledCardShadow2>
    )}
  </AnimatePresence>
)}

export default LogginTest;


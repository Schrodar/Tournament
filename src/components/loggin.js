import React, {useState} from "react";
import  styled from 'styled-components';
import { motion,} from "framer-motion";
import { useDispatch } from "react-redux";
import { logginBegan } from "../store/authReducer";
import { onePlus } from "../store/addUserReducer";



const LoggIn = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [userPwd, setUserPwd] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userName, setUserName] = useState("")


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




  


    return(
        <StyledLoggIn>
           <StyledForm>
                <div>
                    <label htmlFor="email">
                       <StyledInput placeholder="Email" onChange={getValue2} />
                    </label>
                </div>     
                <div>
                    <label htmlFor="password">
                        <StyledInput placeholder="Password" onChange={getValue} />
                    </label>
                </div>

            </StyledForm>
            <button onClick={logginHandler} > Login</button>
            
            <div>
            <div>
                    <label htmlFor="name">
                       <StyledInput placeholder="name" onChange={getValue3} />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                       <StyledInput placeholder="Email" onChange={getValue4} />
                    </label>
                </div>     
                <div>
                    <label htmlFor="password">
                        <StyledInput placeholder="Password" onChange={getValue5} />
                    </label>
                </div>

            </div>
            <div>
                    <button onClick={addUserHandler} >Add user</button>
                </div>
        </StyledLoggIn>
    )
};

const StyledForm = styled(motion.form)`
min-height: 90vh;
display: flex;
flex-direction: column; 
justify-content: space-evenly;
align-items: center;
button{
    width: 20rem; 
 }
 h2 {
     font-size: 1rem;
     margin: 0 0 0 1rem;
 }
`;

const StyledInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;  
    padding: 1.25rem;
    border: none;
    outline: none;
    width: 20rem; 
    height: 2rem;
    background: white;
`;



const StyledLoggIn = styled(motion.div)`
display: flex;
justify-content: space-evenly;
align-items: center
`

    

export default LoggIn;
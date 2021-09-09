import React, {useState} from "react";
import  styled from 'styled-components';
import { motion,} from "framer-motion";

import { login } from "../actions/logginAction";



const LoggIn = () => {

    const test = () =>{
        
    }

    const [text, setText] = useState("")
    const [email, setEmail] = useState("")
    
    const getValue = (e) => {
        setText(e.target.value);
    }

    const getValue2 = (e) => {
        setEmail(e.target.value);
    }

    const getValue3 = (e) => {
        setEmail(e.target.value);
    }

    const getValue4 = (e) => {
        setEmail(e.target.value);
    }

    const getValue5 = (e) => {
        setEmail(e.target.value);
    }

    const getValue6 = (e) => {
        setEmail(e.target.value);
    }



    const logginHandler = (e) => {
        e.preventDefault();
        
        let em = email
        let pw = text  
        
        let both = {
            email: em,
            password: pw
        }
        
        JSON.stringify(both)

        login(em, pw)
    
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
                <button onClick={logginHandler} > Go For It</button>
            </StyledForm>
            <StyledForm>
            <div>
                    <label htmlFor="email">
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
                <div>
                    <label htmlFor="email">
                       <StyledInput type="checkbox" onChange={getValue6} />
                    </label>
                </div>
                <button onClick={logginHandler} > Go For It</button>
                <div>
                    <button onClick={test} >loggin</button>
                </div>
            </StyledForm>

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
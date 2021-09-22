import React from "react";
// style 
import { motion } from "framer-motion";
import styled from "styled-components";
import LogginTest from "../components/loginPageHandler";

const Team = () => {


    return(
        <Wrapper>
            <LogginTest/>
            <Left>
                <Frame>
                    <input type="text" placeholder="Team name" />
                    <button>Creat Team</button>
                </Frame>
            </Left>
            <Right>
                <TeamForum>


                </TeamForum>
            </Right>
        </Wrapper>
    )
};

const Wrapper = styled(motion.div)`
    display: flex;
    

`; 

const Left = styled(motion.div)`
    display: flex;
    background: red;
    width: 30%;
    height: 85vh;
    justify-content: center;
    align-items: center;


`;

const Right = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 85vh;

`;

const Frame = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: blue;
    height: 78vh;
    width: 80%;
    border-radius: 2rem;
    input {
        margin-bottom: 2rem;
        height: 2rem;
        width: 10rem;
    }

`;
const TeamForum = styled(motion.div)`



`;
export default Team;
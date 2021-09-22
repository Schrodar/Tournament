import React  from "react";
import { StyledNav, StyledNavdiv, StyledNavdiv2 } from "../styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginBtn, logOute } from "../store/authReducer";


const Nav = () => {

    const data = useSelector( state => state.Entities.users);
    const dispatch = useDispatch();
    const loginBtnValue = useSelector( state => state.Entities.users.guest)
    const isLoggedIn = useSelector( state => state.Entities.users.LoggedIn);
    
    console.log(data)

    function LoginBtn() {
       if (isLoggedIn) {
         return <UserGreeting />;
       }
        return <GuestGreeting />;
    }

    function UserGreeting() {
       return <button onClick={() => dispatch(logOute(data))}>logout</button>;
    }
      
    function GuestGreeting() {
        return <button onClick={() => dispatch(loginBtn( !loginBtnValue ))}>Login</button>;
    }
    
    return(
    <StyledNav>
        
        <StyledNavdiv2>
            <LoginBtn isLoggedIn={isLoggedIn} />
        </StyledNavdiv2>

        <StyledNavdiv>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/tournament">Tournament</Link>
                </li>
                <li>
                 <Link to="/team">Team</Link>
                </li>
                <li>
                    <Link to="/upcoming">Upcoming Events</Link>
                </li>
            </ul>
        </StyledNavdiv>
    </StyledNav>
    )
};

export default Nav;

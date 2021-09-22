import React, { useState } from "react";



const Toggle = ({children, buttonDo}) =>{
    const [Toggle, setToggle] = useState(false);
    return(
        
        <div>
            <button onClick={() => setToggle(!Toggle)}>Klick toggle</button>
            {Toggle ? children : ""} 
        </div>
    )
}

export default Toggle;
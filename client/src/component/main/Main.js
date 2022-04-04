import React from "react";
import "./Main.css"
import Login from "../dashboard/Login";


const Main = () => {
    return ( 
 

            <div id="welcome"><p className="strokeme"><h1 className="line-1 anim-typewriter" id="welcometext"> Welcome to the DKN Shop!</h1><br></br>
            <p className="line-1 anim-typewriter">Please Login or Sign-up to continue!</p></p>
        <p id="loginboot">< Login /></p>
         
            </div>


     );
}
 
export default Main;
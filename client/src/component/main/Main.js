import React from "react";
import "./Main.css"
import Login from "../dashboard/Login";


const Main = () => {
    return ( 
 

            <div className="scale-in-center" id="welcome"><h1 className="line-1 anim-typewriter" id="welcometext"> Welcome to (nameofshop)</h1><br></br>
            <p className="line-1 anim-typewriter">Please Login or Sign-up to continue!</p>
        < Login />
         
            </div>


     );
}
 
export default Main;
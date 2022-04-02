import React from "react";
import "./Main.css"
import Login from "../dashboard/Login";
const Main = () => {
    return ( 
 

            <div className="scale-in-center" id="welcome"><h1 id="welcometext"> WELCOME</h1>
            <p>Please Login or Sign-up to continue!</p>
            <Login />
            </div>


     );
}
 
export default Main;
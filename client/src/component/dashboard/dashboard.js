import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../profilePage/Profile";

function Dashboard () { 
  const { user, isAuthenticated, isLoading } = useAuth0();
    return (
      isAuthenticated && (
      <div>
  
   
            <br>
            </br>
            <Profile />
      
      
            
          
 
  
        </div>
    )
  )}
  export default Dashboard;
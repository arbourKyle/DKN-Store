import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Products from "../Products";
import Logout from "../dashboard/Logout";
import Card from "../testComponents/Card";
import { IconButton } from "@mui/material";
import Dashboard from "../dashboard/dashboard";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
     
     <div>
          
        <img src={user.picture} alt={user.name} />
      
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <Products />
        <br></br>
        <Card />
        <br></br>
        <br></br>
        <br></br>

     </div>
 
     
      
 
    )
  );
};

export default Profile;
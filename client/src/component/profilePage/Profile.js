import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Products from "../Products";
import CreateProduct from "../createproduct";

import Card from "../productcards,navbar/Card";

import "../profilePage/profile.css"
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
     
     <div id="profilepage">
          
        <img src={user.picture} alt={user.name} />
      
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <Products />
      
        <br></br>

        <br></br>
        <Card />
        <h3 id="adminrole">Admin role detected:</h3>
        <CreateProduct />
        <br></br>
        <br></br>
        <br></br>

     </div>
 
     
      
 
    )
  );
};

export default Profile;
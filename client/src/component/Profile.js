import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
<<<<<<< Updated upstream:client/src/component/Profile.js
<<<<<<< Updated upstream:client/src/component/Profile.js
import Logout from "./Logout";
import Products from "./Products";
=======
import Logout from "../dashboard/Logout";
import Products from "../Products";
>>>>>>> Stashed changes:client/src/component/profilePage/Profile.js
=======
import Products from "../Products";
import Logout from "../dashboard/Logout";
import Card from "../testComponents/Card";
>>>>>>> Stashed changes:client/src/component/profilePage/Profile.js
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
        <Logout />
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
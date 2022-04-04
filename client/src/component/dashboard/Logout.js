import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const {isAuthenticated} = useAuth0();
  const { logout } = useAuth0();

  return (
    isAuthenticated && (
     

    <button id="loginhomebtn" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  ));
};

export default Logout;
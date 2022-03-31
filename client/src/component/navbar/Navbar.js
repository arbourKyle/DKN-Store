
import React from "react";
import "./navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import Logout from "../Logout";

const Navbar = () => {
  // creating the function which can be assinged to element so it is fires when user clicks on it
  const [activeNav, setActive] = useState("/");
  return (
    <nav className="navbar">
      <h1>D. N. K. Store</h1>
      <div className="links">
        <Link
          to="/"
          className={activeNav === "/" ? "active" : ""}
          onClick={() => setActive("/")}
        >
          <HomeIcon />
        </Link>
        <Link
          
     
      
        
          to="/login"
          className={activeNav === "/login" ? "active" : ""}
          onClick={() => setActive("/login")}
        >
          <VpnKeyIcon />
        
        <Login />
        </Link>

        <Link
          to="/signup"
          className={activeNav === "/signup" ? "active" : ""}
          onClick={() => setActive("/signup")}
        >
          <AssignmentIndIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


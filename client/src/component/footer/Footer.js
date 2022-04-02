// import React from "react";
import "./footer.css";
import React from "react";
import "./footer.css";

import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState } from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  const [activeNav, setActive] = useState("/");
  return (
    <div className="footer">
      <span>
        <Link
          to="/"
          className={activeNav === "/" ? "active" : ""}
          onClick={() => setActive("/")}
        ></Link>
      </span>
      <span>
        <Link
          to="/contact"
          className={activeNav === "/contact" ? "active" : ""}
          onClick={() => setActive("/contact")}
        >
          <PhoneIcon />
        </Link>
      </span>

      <span>
        <Link
          to="/faq"
          className={activeNav === "/faq" ? "active" : ""}
          onClick={() => setActive("/faq")}
        >
          <HelpCenterIcon />
        </Link>
      </span>
      <span>
        <p>Our Address: Main street, ON
          Our Phone number: 416-000-0000
        </p>
      </span>
    </div>
  );
};

export default Footer;

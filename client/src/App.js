
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Login from "./component/Login";
import Footer from "./component/footer/Footer";
import Faq from "./component/footer/Faq";
import HomePage from "./component/Homepage";
import Logout from "./component/Logout";
import Profile from "./Profile";
function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <HomePage />
        <Routes>
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/profile" element={<Login />} />
        </Routes>
<Logout />
<Login />
<Profile />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

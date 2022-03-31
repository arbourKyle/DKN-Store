
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";

import Footer from "./component/footer/Footer";
import Faq from "./component/footer/Faq";
import HomePage from "./component/Homepage";

import Profile from "./component/Profile";
function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <HomePage />
        <Routes>
          <Route exact path="/faq" element={<Faq />} />
     
        </Routes>

<Profile />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

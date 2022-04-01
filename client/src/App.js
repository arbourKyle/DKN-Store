
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";

import Footer from "./component/footer/Footer";


import Faq from "./component/footer/Faq";
import HomePage from "./component/Homepage";





import Dashboard from "./component/dashboard";


import Login from "./component/Login";


function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>




        <Dashboard />

        <Footer />
      </Router>
    </div>
  );
}

export default App;

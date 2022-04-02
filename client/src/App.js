
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import Faq from "./component/footer/Faq";
import Main from "./component/navbar/Main";
import Login from "./component/Login";
import Dashboard from "./component/dashboard";
import Contact from "./component/footer/Contact";
import "./App.css"
function App() {
  return (
    <div className="background">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route exact path="/Main" element={<Main />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Dashboard />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

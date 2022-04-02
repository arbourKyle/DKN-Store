import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import background from "./img/background.jpg";

//dashboard imports
// import Dashboard from "./component/dashboard";
// import Login from "./component/Login";

//navbar imports
import Navbar from "./component/testComponents/Navbar";
// import Navbar from "./component/navbar/Navbar";
// import HomePage from "./component/Homepage";


//footer imports
// import Footer from "./component/footer/Footer";
// import Contact from "./component/footer/Contact";
// import Faq from "./component/footer/Faq";


function App() {
  return (
    <>
    <Navbar>
    
    </Navbar>

    <img src={background} height="500rem" width="100%"></img>
    </>
  );
}

export default App;

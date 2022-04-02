import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';




// import Footer from "./component/footer/Footer";
// import Faq from "./component/footer/Faq";
// import Faq from "./component/footer/Faq";


 // import Login from "./component/Login";
 // import HomePage from "./component/Homepage";

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

//card import
  import Card from "./component/testComponents/Card"

//background import
  import Background from "./component/testComponents/Background";




function App() {
  return (
    <>
    
    <Navbar />
    <Background />
    <Card />

    
    </>

  );
}

export default App;

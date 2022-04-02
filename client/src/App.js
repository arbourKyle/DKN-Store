import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// <<<<<<< kyleFrontEndBranch
// import './App.css';
// =======
// import Navbar from "./component/navbar/Navbar";

// import Footer from "./component/footer/Footer";

// import Faq from "./component/footer/Faq";
// import Login from "./component/Login";



// import Faq from "./component/footer/Faq";
// import HomePage from "./component/Homepage";

// >>>>>>> main


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



// <<<<<<< kyleFrontEndBranch
// function App() {
//   return (
//     <>
    
//     <Navbar />
//     <Background />
//     <Card />

    
//     </>
// =======

// import Contact from "./component/footer/Contact";

// function App() {
//   return (
//     <div>
//       <Router basename={process.env.PUBLIC_URL}>
//         <Navbar />
//         <Routes>
//           <Route exact path="/faq" element={<Faq />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/contact" element={<Contact />} />
  
//         </Routes>




//         <Dashboard />
     

//         <Footer />
//       </Router>
//     </div>
// >>>>>>> main
  );
}

export default App;

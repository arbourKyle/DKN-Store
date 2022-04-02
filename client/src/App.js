
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./component/testComponents/Navbar";
// import Navbar from "./component/navbar/Navbar";
// import HomePage from "./component/Homepage";


//footer imports

// import Footer from "./component/footer/Footer";
// import Contact from "./component/footer/Contact";
// import Faq from "./component/footer/Faq";

//card import


//background import
import Background from "./component/testComponents/Background";
import Footer from "./component/footer/Footer";
import Faq from "./component/footer/Faq";
import Main from "./component/navbar/Main";
import Login from "./component/dashboard/Login";
import Dashboard from "./component/dashboard/dashboard";
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
          <Route exact path="/contact" element={<Dashboard />} />
        </Routes>
        < Main />
 <Dashboard />
        <Footer />
     



      </Router>
 
    </div>

  )}




// import Footer from "./component/footer/Footer";
// import Faq from "./component/footer/Faq";
// import Faq from "./component/footer/Faq";


 // import Login from "./component/Login";
 // import HomePage from "./component/Homepage";

//dashboard imports

  // import Dashboard from "./component/dashboard";
  // import Login from "./component/Login";


  //navbar imports






export default App;
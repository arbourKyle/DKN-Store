
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/productcards,navbar/Navbar";
import Footer from "./component/footer/Footer";
import Faq from "./component/footer/Faq";
import Main from "./component/main/Main";
import Dashboard from "./component/dashboard/dashboard";
import Contact from "./component/footer/Contact";

import "./App.css"
const App = () =>  {
  return (
    <div className="background">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
    
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>

     

        <Footer />
    
     



      </Router>
 
    </div>

  )}






export default App;
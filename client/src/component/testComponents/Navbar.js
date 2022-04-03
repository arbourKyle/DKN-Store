import React from 'react';
import Logout from "../dashboard/Logout";
import Login from "../dashboard/Login";
import Contact from "../footer/Contact";
import { useAuth0 } from "@auth0/auth0-react";
import Search from "../search/index";
const Navbar = () =>{
  const {isAuthenticated} = useAuth0();
	return ( 
    isAuthenticated && (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DKN Store</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More Info
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
  
            <li><a class="dropdown-item" href="/contact"> Contact Us</a></li>
            
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="/Faq"> FAQ</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="/"> <Logout /></a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1"></a>
        </li>
      </ul>
      <form class="d-flex">
 <Search />
       
      </form>
    </div>
  </div>
</nav>
    ))};

export default Navbar
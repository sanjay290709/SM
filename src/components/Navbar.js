import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

// FileName : Navbar.js
// Created By : Sanjay
// Created On : 27-Mar-2023
// Last Updated On :  27-Mar-2023
// Purpose : To display the Navbar of the website

const Navbar = () => {
  // Set state    

  // Make Handleclick Function
  return (
    <>
      <nav className="NavbarItems">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">SM</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
                </li>
                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li> */}
                {/* <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </nav>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ "width": "100%", "min-height": "35.1rem" }}
        class="css-b1ilzc"
      >
        <path
          fill="#cecece"
          fill-opacity="1"
          d="M0,64L60,58.7C120,53,240,43,360,69.3C480,96,600,160,720,186.7C840,213,960,203,1080,186.7C1200,171,
          1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,
          320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        >
        </path>
      </svg> */}
    </>
  );

}
export default Navbar;
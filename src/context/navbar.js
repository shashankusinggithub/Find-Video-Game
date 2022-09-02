
import React from 'react'
import "./navbar.css"
import Contact from './contact'

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


const Navbar = () => {


  return (
    <nav>
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? "nav-title-shadow" : ".hidden")}
      >
      {/* <span className=".hidden">VIDEO</span> */}
        <div className="nav-item-1">
      <h2>VIDEO GAME</h2>
      </div>
      </NavLink>

 
      <NavLink
        to="/contact"
        // className={({ isActive }) => (isActive ? "nav-title-shadow" : ".hidden")}
      >
        {/* <span className=".hidden">CONTACT</span> */}
        <div className="nav-item-2">
        <h2>CONTACT</h2>
        </div>
      </NavLink>
    

    

    </nav>






  )
}

export default Navbar
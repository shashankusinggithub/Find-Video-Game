
import React from 'react'
import "./navbar.css"
import Contact from './contact'

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


const Navbar = () => {


  return (
    <nav className="nav-container" >
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "" : "hide")}
      >
      {/* <span className={({ isActive }) => (isActive ? "nav-title-shadow" : ".hidden")}>VIDEO</span> */}
      <div className="nav-item-1 vis">
      <h2>VIDEO GAME</h2>
      <span className="nav-title-shadow hide">VIDEO</span>
      </div>
      </NavLink>

 
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "" : "hide")}
      >
        <div className="nav-item-2 vis visible">
        <h2>CONTACT</h2>
        <span className="nav-title-shadow hide">CONTACT</span>
        </div>
      </NavLink>
    

    

    </nav>






  )
}

export default Navbar
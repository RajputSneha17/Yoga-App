import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    function activeClass(){

    }
  return (
    <div className="navbar fixed-top bg-light px-5 p-2 mt-2 d-flex align-items-center justify-content-between">
        <div className="logo fw-bold fs-2">
            YOGA 🌿
        </div>
        <div className="options fs-5 d-flex gap-5">
            <NavLink to="/" className={({ isActive }) => (isActive ? " active-link" : "nav-link")}>Home</NavLink>
            <NavLink to="/createsession" className={({ isActive }) => (isActive ? " active-link" : "nav-link")}>CreateSession</NavLink>
            <NavLink to="/draft" className={({ isActive }) => (isActive ? "active-link" : "nav-link")}>Draft</NavLink>
        </div>
        <button className='btn btn-outline-success px-4'>Login</button>
    </div>
  )
}

export default NavBar

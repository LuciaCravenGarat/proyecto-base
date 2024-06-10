import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavbarApp = () => {
  return (
    <Navbar className='d-flex justify-content-center text-white'>
        <Nav className='me-auto'>
            <Link to="/" className='navbar-branch'>
                <img src="" alt="" />
            </Link>
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/admin/addProduct">
              Add Product
            </NavLink>
        
        </Nav>
    </Navbar>
  )
}

export default NavbarApp
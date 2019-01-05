import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Navbar = (props) => {

  const openMobileNav = () => {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("mobile-nav--is-open");
  }

  return (

      <nav className="nav nav__main">
      {console.log("Navbar") }
        <div className="nav__inner">
          <Link 
            activeClassName="active" 
            className="nav__item" 
            to="/">
            Home
          </Link>      
          <Link 
            activeClassName="active" 
            className="nav__item" 
            to="/blog">
            Blog
          </Link>      
          <Link 
            activeClassName="active" 
            className="nav__item" 
            to="/about">
            About
          </Link>
          <Link
            activeClassName="active"
            className="nav__item"
            to="/store">
            Store
          </Link>
        </div>
        <div className="nav__trigger" onClick={openMobileNav}>
          <div className="nav__trigger--inner"></div>
        </div>        
      </nav>
  );
};

export default Navbar;


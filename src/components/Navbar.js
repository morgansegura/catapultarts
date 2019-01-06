import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import ContactModal from '../components/Forms/ContactForm'

const Navbar = (props) => {

  const toggleMobileNav = () => {
    const wrapper = document.getElementById("wrapper");

    // toggle open/closed calsses for transition effects
    const superToggle = (element, class0, class1) => {
      element.classList.toggle(class0);
      element.classList.toggle(class1);
    }

    superToggle(wrapper, 'mobile-nav--is-open', 'mobile-nav--is-closed')
  }

  return (

      <nav className="nav nav__main">
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
          <ContactModal />          
        </div>
        <div className="nav__trigger" onClick={toggleMobileNav}>
          <div className="nav__trigger--inner"></div>
        </div>        
      </nav>
  );
};

export default Navbar;


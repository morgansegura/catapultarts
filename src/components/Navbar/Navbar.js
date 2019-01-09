import React from "react";

import "./styles.scss";
import CustomLink from "../CustomLink";

export const NavbarTemplate = ({ data }) => (
  <nav className="navbar">
    <div className="container  navbar-container">
      {data.menuItems.length > 0 && (
        <ul className="navbar-menu">
          {data.menuItems.map(menuItem => (
            <li key={menuItem.linkURL} className="navbar-menuItem">
              <CustomLink
                linkType={menuItem.linkType}
                linkURL={menuItem.linkURL}
                className="navbar-menuLink"
              >
                {menuItem.label}
              </CustomLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  </nav>
);

const Navbar = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <NavbarTemplate data={data} />;
};

export { Navbar };




/*
import React from 'react'
import { Link } from 'gatsby'
// import ContactModal from '../components/Forms/ContactForm'

const Navbar = (props) => {

  const toggleMobileNav = () => {
    const wrapper = document.getElementById("wrapper");

    // toggle open/closed calsses for transition effects
    const superToggle = (element, class0, class1) => {
      element.classList.toggle(class0);
      element.classList.toggle(class1);
    }

    superToggle(wrapper, 'mobile-nav--is-open', 'mobile-nav--is-closed')
    console.log(props.location)
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
          <Link
            activeClassName="active"
            className="nav__item"
            to="/contact">
            Contact
          </Link>

        </div>
        <div className="nav__trigger" onClick={toggleMobileNav}>
          <div className="nav__trigger--inner"></div>
        </div>
      </nav>
  );
};

export default Navbar;



*/
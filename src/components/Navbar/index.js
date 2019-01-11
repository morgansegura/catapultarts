import React from "react"
import CustomLink from "../CustomLink"

const Navbar = ({ menuItems }) => {

    const toggleMobileNav = () => {
        const wrapper = document.getElementById("wrapper")

        // toggle open/closed calsses for transition effects
        const superToggle = (element, class0, class1) => {
            element.classList.toggle(class0)
            element.classList.toggle(class1)
        }

        superToggle(wrapper, 'mobile-nav--is-open', 'mobile-nav--is-closed')
    }
    return (
      <nav className="nav nav__main">        
        {menuItems.length > 0 ?
        // Note: Make the hamburger menu show if user add more than 5 links
        // Think about allowing users to create new menus and swap slocations
            <div className="nav__inner">
                {menuItems.map(menuItem => (
                    <CustomLink
                        key={menuItem.linkURL}
                        activeClassName="active"
                        linkType={menuItem.linkType}
                        linkURL={menuItem.linkURL}
                        className="nav__item"
                    >
                        {menuItem.label}
                    </CustomLink>
                ))}
            </div>
        : null }        
        <div className="nav__trigger" onClick={toggleMobileNav}>
          <div className="nav__trigger--inner"></div>
        </div>
      </nav>
    )
}

export default Navbar 

/*
import React from 'react'
import { Link } from 'gatsby'
// import ContactModal from '../components/Forms/ContactForm'

const Navbar = (props) => {

  const toggleMobileNav = () => {
    const wrapper = document.getElementById("wrapper")

    // toggle open/closed calsses for transition effects
    const superToggle = (element, class0, class1) => {
      element.classList.toggle(class0)
      element.classList.toggle(class1)
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
  )
}

export default Navbar



*/
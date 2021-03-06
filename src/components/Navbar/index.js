import React, { Component } from "react"
import CustomLink from "../CustomLink"

class Navbar extends Component {

    constructor(props) {
        super(props)

        this.toggleMobileNav = this.toggleMobileNav.bind(this)
    }

    componentDidMount() {

        const wrapper = document.getElementById("wrapper");

        window.onscroll = (e) => {
            const header = document.getElementById("headerMain");
            scrollFunction()
            function scrollFunction() {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    header.classList.add("fill");
                    header.classList.remove("unfill");
                } else {
                    header.classList.remove("fill");
                    header.classList.add("unfill");
                }
            }
            // AOS
            // AOS.init()
        }   
    } 
    toggleMobileNav() {
        const wrapper = document.getElementById("wrapper")

        // toggle open/closed calsses for transition effects
        const superToggle = (element, class0, class1) => {
            element.classList.toggle(class0)
            element.classList.toggle(class1)
        }

        superToggle(wrapper, 'mobile-nav--is-open', 'mobile-nav--is-closed')
    }   

    render() {

        console.log(this.props)

        return (
            <nav className="nav nav__main">
                {!!this.props.menuItems ?
                    // Note: Make the hamburger menu show if user add more than 5 links
                    // Think about allowing users to create new menus and swap slocations
                    <div className="nav__inner">
                        {this.props.menuItems.map(menuItem => (
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
                    : null}
                <div className="nav__trigger" onClick={this.toggleMobileNav}>
                    <div className="nav__trigger--inner"></div>
                </div>
            </nav>
        )        
    }
}

export default Navbar 

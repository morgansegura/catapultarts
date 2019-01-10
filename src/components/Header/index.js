import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Navbar } from '../Navbar'
import Logo from '../Accessories/Logo'
import AOS from 'aos'

class Header extends Component {    

    constructor() {
        super()
    }

    state = {
        userHasScrolled: false,
        isMobileNav: false,
        mobileNavIsOpen: false
    }

    componentDidMount() {
        const wrapper = document.getElementById("wrapper");

        window.onscroll = (e) => {
            this.state.userHasScrolled = true
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
        }

        // AOS
        AOS.init()        
    }

    render() {
        console.log(this.props)
        const menuStyle = 'desktop'

        return (
            <header id="headerMain" className="header__main">
                <div className="container">
                    <div className="header__main__inner">
                        <Link className="logo" to="/" title="">
                            {!Logo ?
                                <Logo classList={`logo__header logo--black`} />
                                :
                                <h2 className="title">{this.props.config.siteTitle}</h2>
                            }
                        </Link>
                        <Navbar menuStyle={menuStyle} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
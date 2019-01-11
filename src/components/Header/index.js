import React, { Component } from 'react';
import { Link } from 'gatsby';
import Navbar from '../Navbar'
// import Logo from '../Accessories/Logo'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

// import AOS from 'aos'

class Header extends Component {    

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
        }
        // AOS
        // AOS.init()
    }
    

    render() {
        const { data } = this.props;
        const { menuItems } = data.edges[0].node.frontmatter
        const { logoImage } = data.edges[0].node.frontmatter

        return (
            <header id="headerMain" className="header__main">
                <div className="container">
                    <div className="header__main__inner">
                        <Link className="logo" to="/" title="">
                            {!!logoImage && logoImage.image !== null ?
                                <PreviewCompatibleImage className="hello" imageInfo={logoImage}/>
                            :
                            <h2 className="title">Site Title</h2>
                            }
                        </Link>
                        <Navbar menuItems={menuItems} />
                    </div>
                </div>
            </header>
        );
    }
}


export default Header;
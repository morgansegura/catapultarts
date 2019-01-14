import React, { Component } from 'react';
import { Link } from 'gatsby';
import Navbar from '../Navbar'
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
        // const { menuItems } = data.menuItems
        console.log(data)
        return (
            <header id="headerMain" className="header__main">
                <div className="container">
                    <div className={`header__main__inner ${}`}>
                        <Link className="logo" to="/" title="">
                            {!!data.logoImage ?
                                data.logoImage !== null ?
                                <PreviewCompatibleImage className="hello" imageInfo={data.logoImage}/>
                                :                            
                                <h2 className="title">{data.logoImage.imageLabel && data.logoImage.imageLabel}</h2>
                                :
                                null
                            }
                        </Link>
                        <Navbar />
                    </div>
                </div>
            </header>
        );
    }
}


export default Header;
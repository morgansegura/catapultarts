import React, { Component } from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar'
import Logo from './Accessories/Logo'


class Header extends Component {    

    render() {
        const menuStyle = 'desktop'

        return (
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <Link className="logo" to="/" title="">
                            {!!Logo ?
                                <Logo classList={`logo__header logo--cta`} />
                                :
                                <h2 className="title">{this.props.siteTitle}</h2>
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
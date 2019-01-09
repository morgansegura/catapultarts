import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import config from '../data/siteConfig'
import AOS from 'aos'

// import {
//   isMobile
// } from "react-device-detect";

import '../assets/css/styles.css'

class TemplateWrapper extends Component {

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
    const { children } = this.props;

      return ( 
        <> 
        <Helmet>
          <html lang="en" />
          <title>{config.siteTitleAlt}</title>
          <meta name="description" content={config.siteDescription} />
          <meta name="u2f-support" content="true" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
          <link rel="manifest" href="/images/site.webmanifest" />
          <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:type" content="business.business" />
            <meta property="og:title" content={config.siteTitleAlt} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/images/og-image.jpg" />

          <script src="//code.iconify.design/1/1.0.0-rc1/iconify.min.js"></script>
        </Helmet>        
          <div id="wrapper" className="wrapper is--mobile-nav mobile-nav--is-closed">
          <Header config={config} />
          <main className="main">
            {children}
          </main>
          <Footer />
        </div>
        </>
      );
    }
}

export default TemplateWrapper
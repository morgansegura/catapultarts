import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { Footer } from './Footer'
import config from '../data/siteConfig'


import '../assets/css/styles.css'

const TemplateWrapper = ({ footerData = null, navbarData = null, children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
      }
    `}
  render={ data => (
        <> 
        {console.log(data)}
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
          <Header data={navbarData} config={config} />
          <main className="main">
            {children}
          </main>
          <Footer data={footerData} />
        </div>
        </>
      )}
    />
  )

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
              tagline
            }
            socialLinks {
              image
              imageAlt
              label
              linkURL
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;

export default TemplateWrapper


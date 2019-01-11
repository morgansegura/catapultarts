import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { Footer } from './Footer'
// import config from '../data/siteConfig'


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
        navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
          edges {
            node {
              id
              frontmatter {
                logoImage {
                  image {
                    id
                    childImageSharp {
                      fluid(maxWidth: 60) {
                        ...GatsbyImageSharpFluid
                      }
                    }                    
                  }
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
        footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
          edges {
            node {
              id
              frontmatter {
                logoImage {
                  image {
                    id
                    childImageSharp {
                      fluid(maxWidth: 60) {
                        ...GatsbyImageSharpFluid
                      }
                    }                    
                  }
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
      }      
    `}
  render={ data => (
        <> 
        <Helmet>
          <html lang="en" />
          <title>This will be from the admin</title>
          <meta name="description" content="This will be from the admin" />
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
          <meta property="og:title" content="This will be from the admin" />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/images/og-image.jpg" />

          <script src="//code.iconify.design/1/1.0.0-rc1/iconify.min.js"></script>
        </Helmet>        
          <div id="wrapper" className="wrapper is--mobile-nav mobile-nav--is-closed">
          <Header data={data.navbarData} />
          <main className="main">
            {children}
          </main>
          <Footer data={data.footerData} />
        </div>
        </>
      )}
    />
  )

export default TemplateWrapper


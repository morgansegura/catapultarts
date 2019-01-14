import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from './Footer'
// import config from '../data/siteConfig'

import '../assets/css/styles.css'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title,
            description
          }
        }
        navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "settings" } } }) {
          edges {
            node {
              id
              frontmatter {
                logoImage {
                  image  {
                    childImageSharp {
                      fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }                    
                  }                             
                  imageAlt
                  imageWidth
                  imageLabel
                }
              }
            }
          }
        }
        footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "menus" } } }) {
          edges {
            node {
              id
            }
          }
        }
      }      
    `}
  render={ data => (
        <> 
        {console.log(data)}
        <Helmet>
          <html lang="en" />
          title={data.meta.title}
          meta={[
            {
              name: "description",
              content: `${data.meta.description}`
            },
            {
              name: "keywords",
              content: `${data.meta.keywords}`
            },
            {
              name: "u2f-support",
              content: "true" 
            },
            /*
              http://ogp.me/  (Open Graph)
            */
          ]}            
          link={[
            /* Icons */
            { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
            { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
          { rel: 'apple-touch-icon', sizes: "180x180", href: `${favicon64}` },
          ]}            
          script={[
            /* Icons */
            { src: '//code.iconify.design/1/1.0.0-rc1/iconify.min.js', type: 'text/javascript'},
          ]}
          {!!CSS && CSS !== null ?
            <style style="text/css">
              {
                data.CSS
              }
            </style>
          : null}
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


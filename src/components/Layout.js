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
            title
          }
        }
        settingsData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "settings" } } }) {
          edges {
            node {
              id
              frontmatter {
                meta {
                  title
                  keywords
                  description
                }
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
        menuData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "menus" } } }) {
          edges {
            node {
              id
            }
          }
        }
      }      
    `}
  render={ data => {
    console.log(data)
    const { frontmatter: preData } = data.settingsData.edges[0].node

    return (
        <> 
          <Helmet
            title={preData.meta.title}
            meta={[
              {
                name: "description",
                content: `${preData.meta.description}`
              },
              {
                name: "keywords",
                content: `${preData.meta.keywords}`
              },
              {
                name: "u2f-support",
                content: "true" 
              },
              /*
                http://ogp.me/  (Open Graph)
              */
            ]}         
            script={[
              /* Icons */
              { src: '//code.iconify.design/1/1.0.0-rc1/iconify.min.js', type: 'text/javascript'},
            ]}         
            />

            <Helmet>
              {!!CSS && CSS !== null ?
                <style style="text/css">
                  {
                    data.CSS
                  }
                </style>
              : null}               
            </Helmet>   

            <div id="wrapper" className="wrapper is--mobile-nav mobile-nav--is-closed">
          <Header menuData={preData} />
            <main className="main">
              {children}
            </main>
            <Footer menuData={data.footerData} />
          </div>
          </>
        )}
      }
    />
  )

export default TemplateWrapper


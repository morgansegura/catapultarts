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
                iconMedia {
                  image  {
                    childImageSharp {
                      fixed(width: 180, height: 180) {
                        ...GatsbyImageSharpFixed
                      }
                    }                    
                  }                    
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
            link={[
              /* Icons */
              { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${preData.iconMedia.image}` },
              { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${preData.iconMedia.image}` },
              { rel: 'shortcut icon', type: 'image/png', href: `${preData.iconMedia.image}` },
              { rel: 'apple-touch-icon', sizes: "180x180", href: `${preData.iconMedia.image}` },
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
            <Header data={preData.logoImage} />
            <main className="main">
              {children}
            </main>
            <Footer data={data.footerData} />
          </div>
          </>
        )}
      }
    />
  )

export default TemplateWrapper


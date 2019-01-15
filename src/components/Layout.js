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
      query TemplateQuery {
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
                css {
                  styles
                }
              }
            }
          }
        }
      }      
    `}
  render={ data => {
    const { frontmatter: preData } = data.settingsData.edges[2].node
    // console.log(data)
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
              {!!preData.css.styles && preData.css.styles !== null ?
                <style rel="stylesheet" style="text/css">
                  {
                    preData.css.styles
                  }
                </style>
              : null}               
            </Helmet>   

            <div id="wrapper" className="wrapper is--mobile-nav mobile-nav--is-closed">
              <Header />
              <main className="main">
                {children}
              </main>
              <Footer />
            </div>
          </>
        )}
      }
    />
  )

export default TemplateWrapper


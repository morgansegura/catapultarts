import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby';
import Navbar from '../Navbar'
import PreviewCompatibleImage from '../PreviewCompatibleImage'

// import AOS from 'aos'

const Header = ({ children }) => (

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
                menuHeader {
                  menuItems {
                    label
                    linkTitle
                    linkType
                    linkURL           
                  }
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
    render={data => {

      

      const { frontmatter: settingsData } = data.settingsData.edges[1].node
        const menuItems = settingsData.menuHeader.menuItems
        const logoImage = settingsData.logoImage
        
      console.log(menuItems)

        return (
            <header id="headerMain" className="header__main">
                <div className="container">                
                    <div className={`header__main__inner`}>
                        <Link className="logo" to="/" title="">
                            {!!logoImage ?
                                logoImage !== null ?
                                <PreviewCompatibleImage className="hello" imageInfo={logoImage}/>
                                :                            
                                <h2 className="title">{logoImage.imageLabel && logoImage.imageLabel}</h2>
                            : null }
                        </Link>
                        <Navbar menuItems={menuItems} />
                    </div>
                </div>
            </header>
        )}}
    />
)


export default Header;
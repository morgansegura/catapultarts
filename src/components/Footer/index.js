import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import CustomLink from "../CustomLink"

const Footer = ({ children }) => (
    <StaticQuery
    query={graphql`
      query FooterQuery {
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
                menuFooter {
                  menuItems {
                    label
                    linkTitle
                    linkType
                    linkURL           
                  }
                }
              }
            }
          }
        }
      }      
    `}
    render={data => {

        const { frontmatter: settingsData } = data.settingsData.edges[0].node
        const menuItems = settingsData.menuFooter.menuItems

        // console.log(menuItems)

        return (
            <footer id="footer">
                <h3>This is the footersers</h3>
                <nav>
                {!!menuItems ?
                    <div>
                    {menuItems.map(menuItem => (
                        <CustomLink
                            key={menuItem.linkURL}
                            activeClassName="active"
                            linkType={menuItem.linkType}
                            linkURL={menuItem.linkURL}
                            className="nav__item"
                        >
                            {menuItem.label}
                        </CustomLink>
                    ))}
                    </div>
                : null }
                </nav>    
            </footer>
        )}}
    />
)

export default Footer 

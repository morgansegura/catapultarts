import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const Navbar = (props) => {

  const openMobileNav = () => {
    const wrapper = document.getElementById("wrapper");
    wrapper.classList.toggle("mobile-nav--is-open");
  }

  return (
    <StaticQuery
      query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              name
              count
              items {
                order
                title
                url
                # wordpress_children {
                #   wordpress_id
                #   title
                #   url
                # }
              }
            }
          }
        }
      }
    `}
      render={data => (
        <nav className="nav nav__main">
        {console.log(data) }
          <div className="nav__inner">
            {data.allWordpressWpApiMenusMenusItems.edges.map(edge => (
              edge.node.name === `Main Menu` ? 
                edge.node.items.map((item, i) => (
                  <Link
                    activeClassName="active"
                    className="nav__item"
                    to={item.url}
                    key={i}
                  >
                    {item.title}
                  </Link>                  
                ))
              : null
            ))}         
            <div className="nav__trigger" onClick={openMobileNav}>
              <div className="nav__trigger--inner"></div>
            </div>
          </div>
        </nav>
      )}
    />
  );
};

export default Navbar;


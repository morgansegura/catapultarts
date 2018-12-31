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
      }
    `}
      render={data => (
        <nav className="nav nav__main">
          <div className="nav__inner">
            {data.allWordpressPage.edges.map(edge => (
              <Link
                activeClassName="active"
                className="nav__item"
                to={edge.node.slug}
                key={edge.node.slug}
              >
                {edge.node.title}
              </Link>
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
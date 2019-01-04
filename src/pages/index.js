import React, { Component } from "react"
import get from 'lodash/get'
import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
// import Hero from '../components/Hero'
// import config from '../data/siteConfig'

class IndexPage extends Component {

  state = {
    // state
  }

  componentDidMount() {
    // component did mount
  }

  render() {
    
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const products = get(this, 'props.data.allMoltinProduct.edges')
    const filterProductsWithoutImages = products.filter(
      v => v.node.includedData.main_image
    )


    console.log(data)

    return (
      <Layout>
        <section className="section section__index">
          <div id="hero" className="hero container">
            <div>
              <ProductList products={filterProductsWithoutImages} />
            </div>
          </div>
        </section>
        
        {/* Mission Component */}
        <section id="mission" className="section mission">
          <div className="container content__block bg--light buffer--y-xl">
            <div className="row">
              <div className="col-12 col-md-3">
                <div className="nav__anchors">
                  <Link to="/" className="nav__anchors__link cta">
                    <span>Learn More</span> <span className="icon mdi mdi-chevrom-right"></span>
                  </Link>
                  <Link to="/" className="nav__anchors__link cta">
                    Mission
                  </Link>
                  <Link to="/" className="nav__anchors__link cta">
                    Services
                  </Link>
                  <Link to="/" className="nav__anchors__link cta">
                    Team
                  </Link>
                  <Link to="/" className="nav__anchors__link cta">
                    Investors
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="anchor__view mb-25">
                  <span className="b3">01.</span>
                  <span className="anchor__gap"></span>
                  <span className="b6">Mission</span>
                </div>
                <div className="content__centered">
                  <h3 className="title mb-30">
                    Our mission is new technology meets veteran experience. We've gathered the best in finance with some of the most innovative.
                  </h3>
                  <p className="copy">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews.
                    Iterative approaches to corporate strategy foster collaborative thinking to further
                    the overall value proposition. Organically grow the holistic world view of disruptive
                    innovation via workplace diversity and empowerment.
                  </p>
                </div>            
              </div>
            </div>
          </div>
        </section>

        {/* Services Component */}
        <section id="services" className="services container">
          {/* Services Design */}
          <div className="row services__block services__design">
            <div className="col-12 col-md-6">
              <div className="services__image content__block content__abs-center bg--alt buffer--y-xl">

              </div>
            </div>       
            <div className="col-12 col-md-6 content__block content__abs-center bg--white buffer--full-lg">
              <div className="services__description">
                <h3 className="title mb-20">
                  Custom UI/UX Design & Branding.
                </h3>
                <p className="copy mb-20">
                  Leverage agile frameworks to provide a robust synopsis for high level overviews.
                  Iterative approaches to corporate strategy foster collaborative thinking to further
                  the overall value proposition.
                </p>
                <a href="">Learn More <span className="iconify" data-icon="mdi-arrow-right"></span></a>
              </div>
            </div>       
          </div>

          {/* Services Design */}      
          <div className="row services__block services__design">
            <div className="col-12 col-md-6 content__block content__abs-center bg--white buffer--full-lg">
              <div className="services__description">
                <h3 className="title mb-20">
                  Professional Web Development Creation & Mentoring.
                </h3>
                <p className="copy mb-20">
                  Leverage agile frameworks to provide a robust synopsis for high level overviews.
                  Iterative approaches to corporate strategy foster collaborative thinking to further
                  the overall value proposition.
                </p>
                <a href="">Learn More <span className="iconify" data-icon="mdi-arrow-right"></span></a>
              </div>
            </div>          
            <div className="col-12 col-md-6">
              <div className="services__image content__block content__abs-center bg--alt buffer--y-xl">
 
              </div>
            </div>
          </div>

          {/* Services Marketing */}      
          <div className="row services__block services__marketing">
            <div className="col-12 col-md-6">
              <div className="services__image">

              </div>
            </div>       
            <div className="col-12 col-md-6">
              <div className="services__description">
              
              </div>
            </div>       
          </div>       
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #333', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    # allMoltinProduct {
    #   edges {
    #     node {
    #       originalId
    #       name
    #       description
    #       background_colour
    #       new
    #       meta {
    #         display_price {
    #           with_tax {
    #             amount
    #             currency
    #             formatted
    #           }
    #         }
    #       }
    #       includedData {
    #         main_image {
    #           id
    #           link {
    #             href
    #           }
    #         }
    #       }
    #       mainImage {
    #         childImageSharp {
    #           sizes(maxWidth: 600) {
    #             ...GatsbyImageSharpSizes
    #           }
    #         }
    #       }
    #     }
    #   }
    # }    
  }
`